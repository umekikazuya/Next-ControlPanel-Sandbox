import { ApiResource } from "@/model/apiResource.model";
import { Article } from "@/model/article.model";
import { Profile } from "@/model/profile.model";

export type ErrorData = {
  readonly data: null;
  readonly error?: Error;
};

export async function fetcher<T>(url: string): Promise<T | ErrorData> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    if (response.status === 204) return { data: null };
    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      return { data: null, error };
    }
    return { data: null };
  }
}

/**
 * Profile情報を取得.
 *
 * @returns
 */
export async function getProfile(): Promise<ApiResource<Profile> | ErrorData> {
  return fetcher<ApiResource<Profile>>(
    `${process.env.NEXT_API_URL}/backend/profile/${process.env.NEXT_MOMENTURE_USER_ID}`
  );
}

export async function getArticles(): Promise<
  ApiResource<Article[]> | ErrorData
> {
  return fetcher<ApiResource<Article[]>>(
    `${process.env.NEXT_API_URL}/backend/article`
  );
}

/**
 *
 * @param {number} id
 * @returns {Promise<ApiResource<Article> | ErrorData>}
 *
 * @throws {Error}
 */
export async function getArticle(
  id: number
): Promise<ApiResource<Article> | ErrorData> {
  return fetcher<ApiResource<Article>>(
    `${process.env.NEXT_API_URL}/backend/article/${id}`
  );
}
