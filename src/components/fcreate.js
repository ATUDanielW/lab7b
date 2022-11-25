import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function FCreate() {

    const [title, setTitle] = useState('');
    const [cover, setCover] = useState('');
    const [author, setAuthor] = useState('');

    const navigate = useNavigate();


    // useEffect(()=>{
    //     setTitle('');
    //     setCover('');
    //     setAuthor('');
    // })

    const handleSubmit = (event) => {
        event.preventDefault();
        //alert(`${title}` + " " + `${cover}` + " " + `${author}`);
        const newBook = {
            title: title,
            cover: cover,
            author: author
        }
        axios.post('http://localhost:4000/api/books', newBook)
            .then((res) => {
                console.log(res);
                navigate('/read');
            })
            .catch((err) => { console.log(err) });
    }


    return (
        <div>
            <h1>Good Morning</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="My book Title"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}>
                    </input>
                </div>
                <div>
                    <input
                        type="cover"
                        className="form-control"
                        placeholder="My book Cover"
                        value={cover}
                        onChange={(e) => { setCover(e.target.value) }}>
                    </input>
                </div>
                <div>
                    <input
                        type="author"
                        className="form-control"
                        placeholder="My book Author"
                        value={author}
                        onChange={(e) => { setAuthor(e.target.value) }}>
                    </input>
                </div>

                <input type="submit" value="Add Value"></input>

            </form>
        </div>
    )
}