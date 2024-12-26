import ArticleList from "@/_components/list/articleList";
import { getArticles } from "@/lib/api";

const page = async () => {
  const articleData = await getArticles();
  return <ArticleList articles={articleData.data} />;
};

export default page;
