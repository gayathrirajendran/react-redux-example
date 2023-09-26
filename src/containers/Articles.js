import React from 'react';
import { connect } from "react-redux";
import AddArticle from "../components/AddArticle/AddArticle";
import Article from "../components/Article/Article";
import { ADD_ARTICLE, DELETE_ARTICLE, EDIT_ARTICLE } from '../store/actionTypes';
import { Fragment, useState } from "react";

const Articles = ({ articles, saveArticle, deleteArticle, editArticle }) => {

    const [editState, setEditState] = useState();

    const editCurrentArticle = article => {
        setEditState(article);
    }

    return (
        <>
            <AddArticle submitArticle={saveArticle} editData={editState} editChangedArticle={editArticle}></AddArticle>
            {articles.map((article) =>
                <Fragment key={article.id}>
                    <Article article={article}></Article>
                    <button type="button" onClick={() => editCurrentArticle(article)}>Edit Article</button>
                    <button type="button" onClick={() => deleteArticle(article)}>Delete Article</button>
                </Fragment>
            )}
        </>
    )
}

const stateToProps = state => {
    return {
        articles: state.articles
    }
}

const dispatchToProps = dispatch => {
    return {
        saveArticle: article => {
            console.log('added article', article);
            return dispatch({ type: ADD_ARTICLE, articleData: article });
        },
        deleteArticle: article => {
            console.log('deleted article', article);
            return dispatch({ type: DELETE_ARTICLE, articleData: article });
        },
        editArticle: article => {
            console.log('edited article', article);
            return dispatch({ type: EDIT_ARTICLE, articleData: article });
        }
    }
}

export default connect(stateToProps, dispatchToProps)(Articles);