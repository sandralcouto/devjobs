import { createContext, useState } from 'react';

//"Often, components in different files will need access to the same context. 
//This is why it’s common to declare contexts in a separate file."
export const ThemeContext = createContext('light-theme');

export const ThemeProvider = ({ children }) => {
    //To update context, you need to combine it with state.
    const [theme, setTheme] = useState('light-theme');

    const changeTheme = () => theme === 'light-theme'? setTheme('dark-theme') : setTheme('light-theme');

    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}