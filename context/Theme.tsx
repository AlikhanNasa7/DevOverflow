"use client"

import React, { createContext } from "react";
import { ThemeProviderProps } from "next-themes/dist/types";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import Navbar from "@/components/navigation/navbar";

const themeCtx = createContext({});

const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  return (
        <NextThemeProvider {...props}>
            {children}
        </NextThemeProvider>
    );
};

export default ThemeProvider;
