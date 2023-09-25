import { useState, useEffect, useRef } from 'react';

const AddArticle = ({ submitArticle, editData, editChangedArticle }) => {

    const [article, setArticle] = useState(undefined);
    // const [editArticle, setEditArticle] = useState({ id: '', title: '', body: '' });

    const titleRef = useRef('');
    const bodyRef = useRef('');
    const idRef = useRef('');

    useEffect(() => {
        prepopulateForm(editData);
    }, [editData])

    const prepopulateForm = (editData) => {
        if (editData) {
            // setEditArticle(editData);
            idRef.current.value = editData.id;
            titleRef.current.value = editData.title;
            bodyRef.current.value = editData.body || '';
        }
    }

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

    const editNewArticle = e => {
        e.preventDefault();
        // console.log(editData, article, {...editData, ...article});
        const newObj = { ...editData, ...article };
        editChangedArticle(newObj);
    }

    return (
        <form onSubmit={!!editData?.id ? editNewArticle : addNewArticle}>
            <input ref={idRef} id="id" onChange={handleChange} readOnly />
            <input ref={titleRef} id="title" type="text" placeholder="Enter title" onChange={handleChange} />
            <input ref={bodyRef} id="body" type="text" placeholder="Enter body" onChange={handleChange} />
            <button type="submit">{editData?.id ? 'Save changes' : 'Add Article'}</button>
        </form>
    )
}

export default AddArticle