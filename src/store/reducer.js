import { ADD_ARTICLE, DELETE_ARTICLE, EDIT_ARTICLE } from "./actionTypes";

const initialState = {
    articles: [
        { id: 1, title: "post 1", body: "Quisque cursus, metus vitae pharetra" },
        { id: 2, title: "post 2", body: "Yet another post to fill my vanity" },
    ],
}

const reducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
      case ADD_ARTICLE: {
        const newArticle = {
          id: Math.floor(Math.random() * 100), // not really unique but it's just an example
          title: action.articleData.title,
          body: action.articleData.body,
        }
        return {
          ...state,
          articles: state.articles.concat(newArticle),
        }
      }

      case DELETE_ARTICLE: {
        return {
          ...state,
          articles: state.articles.filter((item) => item.id !== action.articleData.id)
        }
      }

      case EDIT_ARTICLE: {
        return {
          ...state,
          articles: state.articles.map((item) => {
            // console.log(item);
            if(item.id !== action.articleData.id) return item; else return { ...item, ...action.articleData }
           })
        }
      }
    }
    return state
  }
  export default reducer
  