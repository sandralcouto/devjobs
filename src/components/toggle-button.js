import { useState } from "react";
import { ThemeContext } from "./global-styles-provider";

//Preciso envelopar o Button no Provider tbm? Ou só na main page basta?
function ToggleButton() {
    return(
        <ThemeContext.Provider value={theme}>
            </ThemeContext.Provider>
    )
}