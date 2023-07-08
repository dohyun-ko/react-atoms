import React from "react";
interface MyThemeProviderProps {
    theme?: any;
    children: React.ReactNode;
}
declare const MyThemeProvider: ({ theme, children }: MyThemeProviderProps) => any;
export default MyThemeProvider;
