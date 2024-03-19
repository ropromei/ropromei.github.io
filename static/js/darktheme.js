const darkClass = "dark";
const darkThemeLocalStorageField = "darkTheme";
const darkThemeInputId = "#dark-theme-input";

const handleDarkThemeValueChange = (e) => {
    if (typeof e !== "undefined" && e) {
        const checkedValue = e.target.checked;
        updateLocalStorage(checkedValue);        
    }

    const localStorageIsDarkTheme = localStorage.getItem(darkThemeLocalStorageField)
    if (localStorageIsDarkTheme) {
        updateTheme(localStorageIsDarkTheme === "true")
        updateToggleValue(localStorageIsDarkTheme === "true");
    }
}

const updateLocalStorage = (checkedValue) => {
    localStorage.setItem(darkThemeLocalStorageField, checkedValue)
}

const updateTheme = (booleanValue) => {
    if (booleanValue) {
        document.body.classList.add(darkClass);
    } else if (document.body.classList.contains(darkClass)) {
        document.body.classList.remove(darkClass);
    }
}

const updateToggleValue = (booleanValue) => {
    const toggle = getToggle();

    toggle.checked = booleanValue;
}

export const getToggle = () => {
    const switcherToggles = document.querySelectorAll(darkThemeInputId);
    if (switcherToggles.length < 1) {
        throw new Error(`Element ${darkThemeInputId} has not been found!`);
    } else if (switcherToggles.length > 1) {
        throw new Error(`Element ${darkThemeInputId} has been found ${switcherToggles.length} times!`);
    }
    
    return switcherToggles[0];
}

export default handleDarkThemeValueChange;