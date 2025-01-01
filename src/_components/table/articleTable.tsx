'use client';

import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Link as MuiLink } from "@mui/material";
import Link from "next/link";
import { Article } from "@/model/article.model";

export const ArticleTable: React.FC<{ rows: Article[] }> = ({ rows }) => {
  return (
    <DataGrid
      rows={rows}
      columns={articleTableCol}
      pageSizeOptions={[5, 10, 20]}
    />
  );
}

const articleTableCol: GridColDef[] = [
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
  { field: "service", headerName: "Service", width: 150 },
  {
    field: "is_pickup",
    headerName: "注目記事に表示する",
    width: 100,
    type: "boolean",
  },
  { field: "published", headerName: "公開日", width: 150 },
  {
    field: "action",
    headerName: "操作",
    width: 150,
    renderCell: (params) => (
      <MuiLink
        href={`/article/${params.row.id}`}
        component={Link}
        underline="none"
        color="inherit"
      >
        編集
      </MuiLink>
    ),
  },
];
