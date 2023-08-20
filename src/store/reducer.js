import { ADD_ARTICLE } from "./actionTypes";

const initialState = {
    articles: [
        { id: 1, title: "post 1", body: "Quisque cursus, metus vitae pharetra" },
        { id: 2, title: "post 2", body: "Quisque cursus, metus vitae pharetra" },
    ],
}

const reducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
      case ADD_ARTICLE:
        const newArticle = {
          id: Math.random(), // not really unique but it's just an example
          title: action.articleData.title,
          body: action.articleData.body,
        }
        return {
          ...state,
          articles: state.articles.concat(newArticle),
        }
    }
    return state
  }
  export default reducer
  