import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import env from '../env.json';

function Note() {
    let { noteURL } = useParams();
    const [noteText, setNoteText] = useState('');
    const [lineClass, setLineClass] = useState('hide');
    const [formClass, setFormClass] = useState('hide');
    const [errorClass, setErrorClass] = useState('hide');

    useEffect(() => {
        if (noteURL !== undefined) {
            fetch(env.urlBackend, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify({ "url": noteURL })
            })
                .then(response => response.json())
                .then(response => {
                    if (response.result) {
                        setNoteText(response.note);
                        setLineClass('');
                        setFormClass('hide');
                        setErrorClass('hide');
                    }
                    else if (!response.result) {
                        setLineClass('hide');
                        setFormClass('hide');
                        setErrorClass('');
                    }
                });
        }
        else {
            setLineClass('hide');
            setFormClass('');
            setErrorClass('hide');
        }
    }, [noteURL]);

    const getNote = (event) => {
        event.preventDefault();
        let url = event.target.elements.note.value;
        url = url.trim();
        if (url === '') {
            alert('Заполните поля');
            return false;
        }
        noteURL = url;
        window.location.href = env.url + '/' + url;
    }

    const searchNote = () => {
        window.location.href = env.url;
    }

    return (
        <div className="container">
            <section className="note">
                <h2>Note</h2>
                <div className="form-note" >
                    <div className={lineClass} >
                        <div className="hiden-div">{noteText}</div>
                        <div className={errorClass}>
                            <p className="hiden-div" >An error has occurred. No such hash found</p>
                        </div>
                        <div><button className="hided-btn" onClick={searchNote} > Watch another Note</button></div>
                    </div>

                    <div className={formClass}>
                        <form action="" onSubmit={getNote} >
                            <label htmlFor="note">Enter a Note</label>
                            <input name="note" id="note" type="text" placeholder="Your note" />
                            <button type="submit">Search Note</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Note;
