import React, { createContext, useState } from "react";

const themeContext = createContext()

function ThemeProvider(props){
    const [mode, setMode] = useState(true)

    function toggle(){
        setMode(!mode)
    }

    return(
        <themeContext.Provider value={{mode, toggle}}>
            {props.children}
        </themeContext.Provider>
    )
}

export {themeContext, ThemeProvider}