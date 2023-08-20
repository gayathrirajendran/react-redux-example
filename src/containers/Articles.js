import AddArticle from "../components/AddArticle/AddArticle";
import Article from "../components/Article/Article";
import { useState } from 'react';

const Articles = () => {

    const [articles] = useState([
        { id: 1, title: "post 1", body: "Quisque cursus, metus vitae pharetra" },
        { id: 2, title: "post 2", body: "Quisque cursus, metus vitae pharetra" },
    ])

    const addArticle = (e) => {
        console.log(e);
    }

    return (
        <>
            <AddArticle submitArticle={addArticle}></AddArticle>
            {articles.map((article) =>
                <Article key={article.id} article={article}></Article>
            )}
        </>
    )
}

export default Articles