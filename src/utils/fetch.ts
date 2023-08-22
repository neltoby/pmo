export class SaveToStorage  {
	saveToLocalStorage(name: string, value: any) {
		if (typeof value === "object") {
			value = JSON.stringify(value);		
			window.localStorage.setItem(name, value)
		} else {
			window.localStorage.setItem(name, value)
		}		
	}

	getFromLocalStorage(name: string) {
		window.localStorage.getItem("lastname");
	}

	removeFromLocalStorage(name: string) {
		window.localStorage.removeItem(name)
	}
}

export const saveToLocalStorage = new SaveToStorage()
