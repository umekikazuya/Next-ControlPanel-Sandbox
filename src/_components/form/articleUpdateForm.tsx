"use client";

import { formAction } from "@/app/article/[id]/page";
import { Article, ARTICLE_SERVICES } from "@/model/article.model";
import {
  Button,
  FormControlLabel,
  FormGroup,
  MenuItem,
  Stack,
  Switch,
  TextField,
} from "@mui/material";

type ArticleUpdateFormProps = {
  article: Article;
};

export default function ArticleUpdateForm({ article }: ArticleUpdateFormProps) {
  return (
    <>
      <form action={formAction}>
        <Stack spacing={3}>
          <input type="hidden" name="id" value={article.id} />
          <TextField
            fullWidth
            label="タイトル"
            name="title"
            defaultValue={article.title || ""}
          />
          <TextField
            fullWidth
            label="リンク"
            name="link"
            defaultValue={article.link || ""}
          />
          <TextField
            fullWidth
            select
            label="サービス"
            name="service"
            defaultValue={article.service || ""}
          >
            {ARTICLE_SERVICES.map((service) => (
              <MenuItem key={service.key} value={service.key}>
                {service.label}
              </MenuItem>
            ))}
          </TextField>
          <FormGroup>
            <FormControlLabel
              control={<Switch defaultChecked={article.is_pickup} />}
              label="注目記事に表示する"
            />
          </FormGroup>
          <Button type="submit" variant="contained" color="primary">
            保存
          </Button>
        </Stack>
      </form>
    </>
  );
}
