import { useState } from "react"
import MyContext from "./MyContext"

export default function Logic({ children }) {
    const [notaCriada, setNotaCriada] = useState('');

    const obj = {
        setNotaCriada,
    }

    return (
        <MyContext.Provider value={obj}>
            { children }
        </MyContext.Provider>
    )
}