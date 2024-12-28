import { ApiResource } from "@/model/apiResource.model";
import { Article } from "@/model/article.model";
import { Profile } from "@/model/profile.model";

export async function getProfile(): Promise<ApiResource<Profile>> {
  const res = await fetch(
    `${process.env.NEXT_API_URL}/backend/profile/${process.env.NEXT_MOMENTURE_USER_ID}`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch profile");
  }
  return res.json();
}

export async function getArticles(): Promise<ApiResource<Article[]>> {
  const res = await fetch(`${process.env.NEXT_API_URL}/backend/article`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch profile");
  }
  return res.json();
}

export async function getArticle(id: number): Promise<ApiResource<Article>> {
  const res = await fetch(`${process.env.NEXT_API_URL}/backend/article/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch profile");
  }
  return res.json();
}
