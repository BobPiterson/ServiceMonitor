import sql_manager


class Notice_for_bot:
    def __init__(self):
        self.table = sql_manager.Sql_manager()

    def dell_notice(self, arr):
        self.table.change_note_server(arr)

    def send_notice(self):
        return self.table.return_server(False)
