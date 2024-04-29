import { useState } from "react"
import MyContext from "./MyContext"

export default function Logic({ children }) {
    const [listNotes, setListNotas] = useState([]);
    const [textNote, setTextNote] = useState('');

    const openNote = (noteId) => {
        const findNote = listNotes.find((element) => Number(element.id) == Number(noteId));
        setTextNote(findNote.text)
    }

    const obj = {
        setListNotas,
        setTextNote,
        textNote,
        listNotes,
        openNote
    }

    return (
        <MyContext.Provider value={obj}>
            { children }
        </MyContext.Provider>
    )
}