export interface Article {
  id: string;
  title: string;
  link: string;
  service: ArticleService;
  is_pickup: string;
  published: Date;
}

type ArticleService = "zenn" | "qiita" | "Other";
