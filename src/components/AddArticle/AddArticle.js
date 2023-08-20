import { useState } from 'react';

const AddArticle = ({ submitArticle }) => {

    const [article, setArticle] = useState();

    const handleChange = e => {
        setArticle({
            ...article,
            [e.target.id]: e.target.value
        });
    }

    const addNewArticle = e => {
        // stop submission of the form and to prevent the browser from refreshing itself when it encounters a native submit
        e.preventDefault();
        submitArticle(article);
    }

    return (
        <form onSubmit={addNewArticle}>
            <input id="title" type="text" placeholder="Enter title" onChange={handleChange} />
            <input id="body" type="text" placeholder="Enter body" onChange={handleChange} />
            <button type="submit">Add</button>
        </form>
    )
}

export default AddArticle