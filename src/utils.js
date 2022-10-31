import axios from "axios";

const myApi = axios.create({
  baseURL: `http://nc-news-hb.herokuapp.com/api`
});

export const fetchArticles = () => {
  return myApi.get(`/articles`).then(res => {
    return res.data.articles;
  });
};
