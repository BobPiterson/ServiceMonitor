export interface ServerToClientEvents {
    users: (data: { users: string[] }) => void;
    started: (data: { started: boolean, error?: string, colors?: { [key: string]: string } }) => void;
    sendField: (data: { field: string[][] }) => void
}

export interface ClientToServerEvents {
    sendDirection: (data: { direction: string }) => void
    start: () => void
}