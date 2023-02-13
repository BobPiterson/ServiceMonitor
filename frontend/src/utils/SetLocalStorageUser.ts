export const SetLocalStorageUser = (token: string) => {
    localStorage.setItem('Authorization', token)
}