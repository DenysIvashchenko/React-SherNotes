import React from 'react';
import { useState } from "react";
import env from '../env.json';

function Create() {
    const [url, setUrl] = useState('');
    const [lineClass, setLineClass] = useState('hide'); // hide div
    const [formClass, setFormClass] = useState(''); // hide div

    const sendData = (obj) => {
        setFormClass('hide');
        setLineClass('');
        fetch(env.urlBackend, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(obj)
        })
            .then(response => response.json())
            .then(response => {
                console.log(response);
                if (response.result) {
                    setUrl(env.url + '/' + response.url);
                }
            })
    }

    const LoadDataFromForm = (event) => {
        event.preventDefault();
        let note = event.target.elements.note.value;
        note = note.trim();
        if (note === '') {
            alert('заполните поле');  // доделать всплывающее окно 
            return false;
        }
        sendData({ "note": note });
    }
    return (
        <div className="container">
            <section className="create">
                <h2>Create</h2>
                <div className="form-note">
                    <form onSubmit={LoadDataFromForm} className={formClass}>
                        <label htmlFor="note">Enter a Note</label>
                        <textarea name="note" id="note"></textarea>
                        <button type="submit">Create</button>
                    </form>
                    <div className={lineClass} >
                        <div className="hiden-div">{url}</div>
                        <div><button onClick={() => window.location.reload()} className="hided-btn">Create new Note</button></div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Create;
