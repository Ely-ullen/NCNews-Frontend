const axios = require("axios");

const instance = axios.create({
  baseURL: "https://eb-nc-news-app.herokuapp.com/api/",
});

const fetchArticlesData = () => {
  return axios
    .get("https://eb-nc-news-app.herokuapp.com/api/articles")
    .then((res) => res.data);
};

const fetchArticlesByTopic = (topic_slug) => {
  console.log(topic_slug);
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

export {
  fetchArticlesData,
  fetchArticlesByTopic,
  fetchTopics,
  fetchSingleArticle,
};
