import sqlite3

sql_path = '../sqlite/database.sqlite'
sql_table = 'MonitorModels'


class Sql_manager:
    def __init__(self):
        self.name = sql_table
        self.con = sqlite3.connect(sql_path)
        self.sql = self.con.cursor()

    def add_server(self, dict):
        for server in dict:
            error = dict[server][1]
            inf_s = dict[server][0]
            self.sql.execute(f"SELECT id FROM {self.name} WHERE url = '{server}'")
            if self.sql.fetchone() is None:
                self.sql.execute(f"SELECT id FROM {self.name}")
                if self.sql.fetchone() is None:
                    id = 0
                else:
                    for i in self.sql.execute(f'SELECT MAX(id) FROM {self.name}'):
                        id = int(i[0]) + 1
                self.sql.execute(f"INSERT INTO {self.name} VALUES(?, ?, ?, ?, ?)", (id, server, inf_s, 0, error))
                self.con.commit()
            else:
                for i in self.sql.execute(f"SELECT inf_s FROM {self.name} WHERE url = '{server}'"):
                    val = int(i[0])
                print(val)
                if val != inf_s:
                    self.sql.execute(
                        f"UPDATE {self.name} SET inf_s = {inf_s}, note = 0, error = {error} WHERE url = '{server}'")
                    self.con.commit()

    def return_server(self, type):
        dict = {}
        arr = []
        if type is False:
            for i in self.sql.execute(f"SELECT id, url, error FROM {self.name} WHERE inf_s = 0 AND note = 0"):
                dict[i[1]] = i[2]
                arr.append(i[0])
        else:
            for i in self.sql.execute(f"SELECT id, url, error FROM {self.name} WHERE inf_s = 1 AND note = 0"):
                dict[i[1]] = i[2]
                arr.append(i[0])
        return dict, arr

    def change_note_server(self, arr):
        for up in arr:
            self.sql.execute(f"UPDATE {self.name} SET note = 1 WHERE id = {up}")
            self.con.commit()
