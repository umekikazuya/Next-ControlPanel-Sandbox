export interface Article {
  id: string;
  title: string;
  link: string;
  service: ArticleService;
  is_pickup: boolean;
  published: Date;
}

export const ARTICLE_SERVICES = [
  { key: "zenn", label: "Zenn" },
  { key: "qiita", label: "Qiita" },
  { key: "Other", label: "その他" },
] as const;

export type ArticleService = typeof ARTICLE_SERVICES[number]["key"];
