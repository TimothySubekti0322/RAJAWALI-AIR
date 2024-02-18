export const SaveToLocalStorage = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value))
}
