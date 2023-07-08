import React from "react";
import { ThemeProvider } from "styled-components";
import { ThemeContext } from "./ThemeContext";
import defaultTheme from "./defaultTheme";

interface MyThemeProviderProps {
    theme?: any; // TODO: define type
    children: React.ReactNode;
}

const MyThemeProvider = ({ theme, children }: MyThemeProviderProps) => {
    const combinedTheme = {
        ...defaultTheme,
        ...theme,
    };

    return (
        <ThemeContext.Provider value={combinedTheme}>
            <ThemeProvider theme={combinedTheme}>{children}</ThemeProvider>
        </ThemeContext.Provider>
    )
}

export default MyThemeProvider;