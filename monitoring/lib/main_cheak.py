import requests
import logging
import sql_manager


def server_cheak(url):
    print(url)
    headers = {
        "Accept": "*/*",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:106.0) Gecko/20100101 Firefox/106.0",
    }
    try:
        # answer = urllib.request.urlopen(url, headers=headers).getcode()
        requests.get(url, headers=headers, timeout=2)
        return [1, ""]
    except Exception as e:
        r = logging.error(e)
        print(str(e))
        return [0, "Error"]


def add_user():
    table = sql_manager.Sql_manager()
    with open("lib/url.txt", "r") as f:
        sv = [i.strip() for i in f.readlines()]
    print(sv)
    for url in sv:
        inf = server_cheak(url)
        if inf is None:
            table.add_server({url: [0, ""]})
        table.add_server({url: inf})

# print(server("https://vk.com/memi.smechno"))
