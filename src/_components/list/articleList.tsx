"use client";

import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { Article } from "@/model/article.model";

interface ArticleTableProps {
  articles: Article[];
}

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "title", headerName: "記事名", width: 300 },
  {
    field: "link",
    headerName: "リンク",
    width: 300,
    renderCell: (params) => (
      <a href={params.value} target="_blank" rel="noopener noreferrer">
        {params.value}
      </a>
    ),
  },
  { field: "service", headerName: "サービス", width: 150 },
  {
    field: "is_pickup",
    headerName: "注目記事に表示する",
    width: 100,
    type: "boolean",
  },
  { field: "published", headerName: "公開日", width: 150 },
];

export default function ArticleList({ articles }: ArticleTableProps) {
  return (
    <Paper>
      <DataGrid
        rows={articles}
        columns={columns}
        pageSizeOptions={[5, 10, 20]}
      />
    </Paper>
  );
}
