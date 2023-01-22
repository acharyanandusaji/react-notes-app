import React from 'react';
import { useState } from "react";
import { LinearProgress } from '@mui/material';

const AddNote = ({ handleAddNote }) => {

    const [noteText, setNoteText] = useState('');
    const characterLimit = 100;
    const charLeft = characterLimit - noteText.length;

    const handleChange = (event) => {
		if (characterLimit - event.target.value.length >= 0) {
			setNoteText(event.target.value);
		}
	};

    const handleSaveClick = () => {
        if(noteText.trim().length > 0) {
            handleAddNote(noteText);
            setNoteText('');
        }
    };

    return( 
    <div className="note new">
        <textarea 
            rows="8" 
            cols="10" 
            placeholder="Type to add a note..." 
            value={noteText}
            onChange={handleChange}
            maxLength="100">
            
        </textarea>
        <div className="note-footer">
            <small>{charLeft} Remaining</small>
            <button className="save" onClick={handleSaveClick}>Save</button>
        </div>
        <LinearProgress className="char_progress" variant="determinate" value={charLeft} />
    </div>
    );
};

export default AddNote;