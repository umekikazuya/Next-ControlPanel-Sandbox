import { ArticleTable } from "@/_components/table/articleTable";
import { getArticles } from "@/lib/api";
import { Paper } from "@mui/material";
import { Suspense } from "react";

export default async function page() {
  return (
    <>
      <Suspense fallback={<>Loading...</>}>
        <Content />
      </Suspense>
    </>
  );
}

async function Content() {
  const articleData = await getArticles();

  return (
    <Paper>
      <ArticleTable rows={articleData.data} />
    </Paper>
  );
}
