export interface Article {
  id: string;
  title: string;
  link: string;
  service: ArticleService;
  is_pickup: boolean;
  published: Date;
}

type ArticleService = "zenn" | "qiita" | "Other";
