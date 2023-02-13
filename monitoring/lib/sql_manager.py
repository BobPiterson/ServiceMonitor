import sqlite3

sql_path = '../../sqlite/database.sqlite'
sql_table = 'MonitorModels'


class Sql_manager:
    def __init__(self):
        self.name = sql_table
        self.con = sqlite3.connect(sql_path)
        self.sql = self.con.cursor()

    def add_server(self, dict):
        for server in dict:
            self.sql.execute(f"SELECT id FROM {self.name} WHERE url = '{server}'")
            if self.sql.fetchone() is None:
                self.sql.execute(f"SELECT id FROM {self.name}")
                if self.sql.fetchone() is None:
                    id = 0
                else:
                    for i in self.sql.execute(f'SELECT MAX(id) FROM {self.name}'):
                        id = int(i[0]) + 1
                self.sql.execute(f"INSERT INTO {self.name} VALUES(?, ?, ?, ?)", (id, server, dict[server], 0))
                self.con.commit()
            else:
                self.sql.execute(f"UPDATE {self.name} SET inf_s = '{dict[server]}' WHERE url = '{server}'")
                self.con.commit()
                self.sql.execute(f"UPDATE {self.name} SET note = 0 WHERE url = '{server}'")
                self.con.commit()

    def change_inf(self, url):
        pass
        # self.sql.execute(f"SELECT inf_s, inf_u FROM {self.name} WHERE url = '{url}'")
        # if self.sql.fetchone() is None:
        #     id = 0
        # else:
        #     for i in self.sql.execute(f'SELECT MAX(id) FROM {self.name}'):
        #         id = int(i[0]) + 1
        # self.sql.execute(f"INSERT INTO {self.name} VALUES(?, ?, ?)", (id, server, dict[server]))
        # self.con.commit()

    def return_server(self, type):
        dict = {}
        print(1111)
        arr = []
        if type is False:
            for i in self.sql.execute(f"SELECT id, url, inf_s FROM {self.name} WHERE NOT inf_s = 'True' AND note = 0"):
                dict[i[1]] = i[2]
                arr.append(i[0])
        else:
            for i in self.sql.execute(f"SELECT id, url, inf_s FROM {self.name} WHERE inf_s = 'True' AND note = 0"):
                dict[i[1]] = i[2]
                arr.append(i[0])

        return dict, arr

    def change_note_server(self, arr):
        for up in arr:
            self.sql.execute(f"UPDATE {self.name} SET note = 1 WHERE id = {up}")
            self.con.commit()
