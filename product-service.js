import axios from "axios";
import { logAndThrow } from "./util.js";
import { Product } from "./product.js";

// ## Product 요청 함수 구현하기

// - [https://panda-market-api-crud.vercel.app/docs](https://panda-market-api-crud.vercel.app/docs) 의 Product API를 이용하여 아래 함수들을 구현해 주세요.

//     - `getProductList()` : GET 메소드를 사용해 주세요.
//         - `page`, `pageSize`, `keyword` 쿼리 파라미터를 이용해 주세요.

export async function getProductList(params) {
  try {
    const response = await axios.get(
      "https://panda-market-api-crud.vercel.app/products",
      { params }
    );
    return response.data.list.map(Product.of);
  } catch (e) {
    logAndThrow("getting product list", e);
  }
}

//     - `getProduct()` : GET 메소드를 사용해 주세요.
export async function getProduct(productId) {
  try {
    const response = await axios.get(
      `https://panda-market-api-crud.vercel.app/products/${productId}`
    );
    return Product.of(response.data);
  } catch (e) {
    logAndThrow("getting product", e);
  }
}

//     - `createProduct()` : POST 메소드를 사용해 주세요.
//         - request body에 `title`, `content`, `image` 를 포함해 주세요.
export async function createProduct(product) {
  try {
    const response = await axios.post(
      "https://panda-market-api-crud.vercel.app/products"
    );
    return response.data;
  } catch (e) {
    logAndThrow("creating product", e);
  }
}

//     - `patchProduct()` : PATCH 메소드를 사용해 주세요.
export async function patchProduct(id, product) {
  try {
    const response = await axios.patch(
      `https://panda-market-api-crud.vercel.app/products/${productId}`,
      product
    );
    return response.data;
  } catch (e) {
    logAndThrow("patching product", e);
  }
}

//     - `deleteProduct()` : DELETE 메소드를 사용해 주세요.
export async function deleteProduct(productId) {
  try {
    const response = await axios.delete(
      `https://panda-market-api-crud.vercel.app/products/${productId}`
    );
    return Product.of(response.data);
  } catch (e) {
    logAndThrow("deleting product", e);
  }
} //     - ElectronicProduct 클래스는 Product를 상속하며, 추가로 `manufacturer`(제조사) 프로퍼티를 가집니다.
