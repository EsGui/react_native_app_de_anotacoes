import { useState } from "react"
import MyContext from "./MyContext"

export default function Logic({ children }) {
    const [listNotes, setListNotas] = useState([]);
    const [textNote, setTextNote] = useState('');

    const obj = {
        setListNotas,
        setTextNote,
        textNote,
        listNotes,
    }

    return (
        <MyContext.Provider value={obj}>
            { children }
        </MyContext.Provider>
    )
}