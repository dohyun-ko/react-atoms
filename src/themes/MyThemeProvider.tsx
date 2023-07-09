import React from "react";
import { ThemeProvider } from "styled-components";
import MyThemeContext from "./MyThemeContext";
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
        <MyThemeContext.Provider value={combinedTheme}>
            <ThemeProvider theme={combinedTheme}>{children}</ThemeProvider>
        </MyThemeContext.Provider>
    )
}

export default MyThemeProvider;