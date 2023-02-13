import telebot
import items
import threading
import tmp
import time

from telebot import types

all_users = {}


class User:
    def add_user(self, user_id):
        global all_users
        if user_id not in all_users:
            all_users[user_id] = {'settings': 'sub'}

    def dell_settings(self, user_id):
        global all_users
        if user_id in all_users:
            all_users[user_id] = {'settings': 'unsub'}


def bot():
    bot = telebot.TeleBot(items.token)
    user = User()

    menu_sub = types.ReplyKeyboardMarkup(resize_keyboard=True)
    sub = types.KeyboardButton("📪Подписаться")
    menu_sub.add(sub)

    menu_unsub = types.ReplyKeyboardMarkup(resize_keyboard=True)
    unsub = types.KeyboardButton("🔕Отписаться")
    menu_unsub.add(unsub)

    def push():
        global all_users
        obj = tmp.Notice_for_bot()
        while True:
            arr_notice = obj.send_notice()
            all_notice = arr_notice[0]
            dell = arr_notice[1]
            print(all_notice)
            if all_users != {} and all_notice != {}:
                cash = []
                for id in all_notice:
                    for user in all_users.keys():
                        if user in all_users:
                            if all_users[user]['settings'] == 'sub':
                                text = f'На данном сайте {id} Cбой : {all_notice[id]}'
                                bot.send_message(user, text, reply_markup=menu_unsub)
                                time.sleep(3)
                            else:
                                if user not in cash:
                                    cash.append(user)
                        else:
                            break
                obj.dell_notice(dell)
                print("CASH ", cash)
                if cash != []:
                    for user in cash:
                        print(all_users, "--text")
                        del all_users[user]
                    cash.clear()

                # obj.dell_notice(id)
            time.sleep(3)

    p = threading.Thread(target=push, args=())
    p.start()

    @bot.message_handler(commands=['start'])  # Обработчик команды start
    def start(message):
        '''Запускает и отправляет сообщение с приветствием'''
        bot.send_message(message.from_user.id, "Привет, нажми на кнопку, чтобы подписаться на рассылку.",
                         reply_markup=menu_sub)

    @bot.message_handler(func=lambda message: message.text == "📪Подписаться" or message.text == "/sub")
    def sub(message):
        user.add_user(message.from_user.id)
        bot.send_message(message.from_user.id, "Отлично! Теперь ты подписан.", reply_markup=menu_unsub)

    @bot.message_handler(func=lambda message: message.text == "🔕Отписаться" or message.text == "/unsub")
    def unsub(message):
        user.dell_settings(message.from_user.id)
        bot.send_message(message.from_user.id, "Ты отписался от уведомлений", reply_markup=menu_sub)

    @bot.message_handler(func=lambda message: message.text == "test")
    def unsub(message):
        bot.send_message(message.from_user.id, f"Пользователи {user.all_users}")

    bot.polling(none_stop=True)
