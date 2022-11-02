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

export const fetchComments = article_id => {
  return myApi.get(`/articles/${article_id}/comments`).then(res => {
    return res.data.comments;
  });
};

export const patchCommentVotes = (comment_id, number) => {
  return myApi
    .patch(`/comments/${comment_id}`, { inc_votes: number })
    .then(res => {
      return res;
    });
};

export const patchArticleVotes = (article_id, number) => {
  return myApi
    .patch(`/articles/${article_id}`, { inc_votes: number })
    .then(res => {
      return res;
    });
};

export const postComment = (article_id, body, username) => {
  console.log(article_id, username, body);
  return myApi
    .post(`/articles/${article_id}/comments`, {
      username: username,
      body: body
    })
    .then(res => {
      console.log(res);
      return res.data.comment;
    });
};
