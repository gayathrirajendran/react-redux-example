import { connect } from "react-redux";
import AddArticle from "../components/AddArticle/AddArticle";
import Article from "../components/Article/Article";
import { ADD_ARTICLE } from '../store/actionTypes';

const Articles = ({ articles, saveArticle }) => {

    return (
        <>
            <AddArticle submitArticle={saveArticle}></AddArticle>
            {articles.map((article) =>
                <Article key={article.id} article={article}></Article>
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
        console.log(article);
        return dispatch({ type: ADD_ARTICLE, articleData: article });
      }
    }
  }

export default connect(stateToProps, dispatchToProps)(Articles);