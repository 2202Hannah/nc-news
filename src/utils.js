import axios from "axios";

const myApi = axios.create({
  baseURL: `https://nc-news-4amo.onrender.com/api`,
});

export const fetchArticles = (sort, order) => {
  if (order && sort) {
    return myApi
      .get(`/articles?sort_by=${sort}&&order=${order}&&limit=12`)
      .then((res) => {
        return res.data.articles;
      })
      .catch((err) => console.log(err));
  } else {
    return myApi
      .get(`/articles?limit=12`)
      .then((res) => {
        return res.data.articles;
      })
      .catch((err) => console.log(err));
  }
};

export const fetchArticlesByTopic = (topic, sort, order) => {
  if (sort && order) {
    return myApi
      .get(`/articles?topic=${topic}&&sort_by=${sort}&&order=${order}`)
      .then((res) => {
        return res.data.articles;
      });
  } else {
    return myApi.get(`/articles?topic=${topic}`).then((res) => {
      return res.data.articles;
    });
  }
};

export const fetchTopics = () => {
  return myApi.get(`/topics`).then((res) => {
    return res.data.topics;
  });
};

export const fetchArticlesById = (article_id) => {
  return myApi.get(`/articles/${article_id}`).then((res) => {
    return res.data.article;
  });
};

export const fetchComments = (article_id) => {
  return myApi.get(`/articles/${article_id}/comments`).then((res) => {
    return res.data.comments;
  });
};

export const patchCommentVotes = (comment_id, number) => {
  return myApi
    .patch(`/comments/${comment_id}`, { inc_votes: number })
    .then((res) => {
      return res;
    });
};

export const patchArticleVotes = (article_id, number) => {
  return myApi
    .patch(`/articles/${article_id}`, { inc_votes: number })
    .then((res) => {
      return res;
    });
};

export const postComment = (article_id, body, username) => {
  return myApi
    .post(`/articles/${article_id}/comments`, {
      username: username,
      body: body,
    })
    .then((res) => {
      return res.data.comment;
    });
};

export const fetchUsers = () => {
  return myApi.get(`/users`).then((res) => {
    return res.data.users;
  });
};

export const deleteComment = (comment_id) => {
  return myApi.delete(`/comments/${comment_id}`).then((res) => {
    return res.data;
  });
};
