import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
// import notes from "../notes";
import CreateArea from "./CreateArea";

function App() {

    const [notes, setNotes] = useState([]);

    function addNotes(newNote) {
        console.log(newNote);
        setNotes((prevValue) => {
            return [...prevValue, newNote];
        });

    }

    function deleteNote(id) {
        setNotes((prevValue) => {
            return notes.filter((notes, index) => {
                return index !== id;
            });
        });
    }

    return (
        <div>
            <Header />
            <CreateArea onAdd={addNotes} />
            {notes.map((noteItem, index) => {
                return <Note 
                            key={index}
                            id={index} 
                            title={noteItem.title} 
                            content={noteItem.content}
                            onDelete={deleteNote} />
                    }
                )}
            <Footer />
        </div>

    );
}

export default App;

