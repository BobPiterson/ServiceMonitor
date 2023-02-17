import telegram_bot
import threading
import schedule
import main_cheak
import time


def cheak_serv():
    schedule.every(15).minutes.do(main_cheak.add_user)
    while True:
        schedule.run_pending()
        time.sleep(1)


if __name__ == '__main__':
    main_cheak.add_user()
    p1 = threading.Thread(target=telegram_bot.bot, args=())
    p2 = threading.Thread(target=cheak_serv, args=())
    p1.start()
    p2.start()
