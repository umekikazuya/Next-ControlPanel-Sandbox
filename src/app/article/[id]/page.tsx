import { Container, Box, Typography } from "@mui/material";
import ArticleUpdateForm from "@/_components/form/articleUpdateForm";
import { Suspense } from "react";
import { ErrorData, getArticle } from "@/lib/api";
import { Article } from "@/model/article.model";
import { ApiResource } from "@/model/apiResource.model";

export async function formAction(formData: FormData): Promise<void> {
  const id = formData.get("id") as string;
  const title = formData.get("title") as string;
  const link = formData.get("link") as string;
  const service = formData.get("service") as string;
  const is_pickup = formData.get("is_pickup") as string;
  const published = formData.get("published") as string;

  console.log(id, title, link, service, is_pickup, published);

  try {
    const res = await fetch(`https://momenture.vercel.app/api/article/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        title,
        link,
        service,
        is_pickup,
        published,
      }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "更新に失敗しました");
    }

    // 成功時の再描画などが必要なら再検証するパスを指定
    // revalidatePath('/profile/edit');

    alert("更新しました");
  } catch (error: any) {
    console.log(error);
  }
}

export default async function page({ params }: { params: { id: number } }) {
  const { id } = params;
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Content id={id} />
    </Suspense>
  );
}

async function Content({ id }: { id: number }) {
  try {
    const article: ApiResource<Article> | ErrorData = await getArticle(id);
    if (!("data" in article) || !article.data) {
      return <div>データの取得に失敗しました。</div>;
    }
    return (
      <Container maxWidth="md">
        <Box sx={{ mt: 4, mb: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            記事編集
          </Typography>
          <ArticleUpdateForm article={article.data} />
        </Box>
      </Container>
    );
  } catch (error) {
    console.error("エラー:", error);
    return <div>記事の取得中にエラーが発生しました。</div>;
  }
}
