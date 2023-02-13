import urllib.request
import logging

from items import sv
import sql_manager


def server_cheak(url):
    try:
        answer = urllib.request.urlopen(url).getcode()
    except Exception as e:
        r = logging.error(e)
        return str(e)
    return str(answer == 200)


def add_server():
    table = sql_manager.Sql_manager()
    for url in sv:
        inf = server_cheak(url)
        if inf is None:
            table.add_server({url: "False"})
        table.add_server({url: inf})


add_server()
# print(server("https://vk.com/memi.smechno"))
