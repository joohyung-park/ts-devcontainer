import axios from "axios";
import { logAndThrow } from "./util.js";
import { Article } from "./Article.js";

// ## Article 요청 함수 구현하기

// - [https://panda-market-api-crud.vercel.app/docs](https://panda-market-api-crud.vercel.app/docs) 의 Article API를 이용하여 아래 함수들을 구현해 주세요.

//     - `getArticleList()` : GET 메소드를 사용해 주세요.
//         - `page`, `pageSize`, `keyword` 쿼리 파라미터를 이용해 주세요.

export function getArticleList(params) {
  return axios
    .get("https://panda-market-api-crud.vercel.app/articles", { params })
    .then((response) => response.data.list.map(Article.of))
    .catch((e) => logAndThrow("getting article list", e));
}

//     - `getArticle()` : GET 메소드를 사용해 주세요.
export function getArticle(articleId) {
  return axios
    .get(`https://panda-market-api-crud.vercel.app/articles/${articleId}`)
    .then(Article.of)
    .catch((e) => logAndThrow("getting article", e));
}

//     - `createArticle()` : POST 메소드를 사용해 주세요.
//         - request body에 `title`, `content`, `image` 를 포함해 주세요.
export function createArticle(article) {
  return axios
    .post("https://panda-market-api-crud.vercel.app/articles", article)
    .catch((e) => logAndThrow("creating article", e));
}

//     - `patchArticle()` : PATCH 메소드를 사용해 주세요.
export function patchArticle(id, article) {
  return axios
    .patch(
      `https://panda-market-api-crud.vercel.app/articles/${articleId}`,
      article
    )
    .catch((e) => logAndThrow("patching article", e));
}

//     - `deleteArticle()` : DELETE 메소드를 사용해 주세요.
export function deleteArticle(articleId) {
  return axios
    .delete(`https://panda-market-api-crud.vercel.app/articles/${articleId}`)
    .then(({ id }) => id)
    .catch((e) => logAndThrow("deleting article", e));
} // - class 키워드를 이용해서 Article 클래스를 만들어 주세요.
