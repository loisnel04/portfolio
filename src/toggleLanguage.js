import React, { createContext, useState} from 'react'

export const ToggleLanguage = createContext()

export const ToggleProvider = ({ children }) => {
    const [language, setLanguage] = useState('English')
    
    return (
        <ToggleLanguage.Provider value = {{language, setLanguage}}>
            {children}
        </ToggleLanguage.Provider>
    )
}