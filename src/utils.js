import axios from "axios";

const myApi = axios.create({
  baseURL: `http://nc-news-hb.herokuapp.com/api`
});

export const fetchArticles = topic => {
  if (topic) {
    return myApi.get(`/articles?topic=${topic}`).then(res => {
      return res.data.articles;
    });
  } else {
    return myApi.get(`/articles`).then(res => {
      return res.data.articles;
    });
  }
};

export const fetchTopics = () => {
  return myApi.get(`/topics`).then(res => {
    return res.data.topics;
  });
};
