const axios = require("axios");

// const instance = axios.create({
//   baseURL: "https://eb-nc-news-app.herokuapp.com/api/",
// });

const fetchArticlesData = () => {
  return axios
    .get("https://eb-nc-news-app.herokuapp.com/api/articles")
    .then((res) => res.data);
};

const fetchArticlesByTopic = (topic_slug) => {
  return axios
    .get(
      `https://eb-nc-news-app.herokuapp.com/api/articles?topic=${topic_slug}`
    )
    .then((res) => res.data);
};

const fetchTopics = () => {
  return (
    axios
      .get(`https://eb-nc-news-app.herokuapp.com/api/topics`)
      // .then((response) => console.log(response))
      .then((res) => res.data.topics)
  );
};

const fetchSingleArticle = (articleId) => {
  return axios
    .get(`https://eb-nc-news-app.herokuapp.com/api/articles/${articleId}`)
    .then((res) => res.data.article);
};

const fetchVotes = (articleId) => {
  return axios
    .get(`https://eb-nc-news-app.herokuapp.com/api/articles/${articleId}`)
    .then((res) => res.data.article.votes);
};

const patchVotes = (voteObject, articleId) => {
  return axios.patch(
    `https://eb-nc-news-app.herokuapp.com/api/articles/${articleId}`,
    voteObject
  );
};

const fetchCommentsData = (articleId) => {
  return axios
    .get(
      `https://eb-nc-news-app.herokuapp.com/api/articles/${articleId}/comments`
    )
    .then((res) => res.data);
};

const fetchUserList = () => {
  return axios
    .get("https://eb-nc-news-app.herokuapp.com/api/users")
    .then((res) => res.data);
};

const CommentPoster = (commentForPosting, articleId) => {
  return axios
    .post(
      `https://eb-nc-news-app.herokuapp.com/api/articles/${articleId}/comments`,
      commentForPosting
    )
    .then(function (response) {
      console.log(response);
    });
};

export {
  fetchArticlesData,
  fetchArticlesByTopic,
  fetchTopics,
  fetchSingleArticle,
  fetchVotes,
  patchVotes,
  fetchCommentsData,
  CommentPoster,
  fetchUserList,
};
