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

export const fetchArticlesById = article_id => {
  return myApi.get(`/articles/${article_id}`).then(res => {
    return res.data.article;
  });
};

export const patchArticleVotes = (article_id, number) => {
  console.log(article_id, number, "in utils");
  return myApi
    .patch(`/articles/${article_id}`, { inc_votes: number})
    .then(res => {
      console.log(res);
    });

  // const article = article.find(a => a.article_id === article_id);
  // article.votes += number;
  // return new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve({ article });
  //   }, 100);
  // });
};
