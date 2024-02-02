const saveToLocalStorage = (varName: string, value: any) => {
    localStorage.setItem(varName, JSON.stringify(value))
}
export default saveToLocalStorage;