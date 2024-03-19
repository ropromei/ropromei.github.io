"use strict"

import handleDarkThemeValueChange, { getToggle } from "./darktheme.js"

function main() {    
    const switcherToggle = getToggle();
    
    handleDarkThemeValueChange();

    switcherToggle.addEventListener("change", handleDarkThemeValueChange);
}

main();