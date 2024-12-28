import {
  TextField,
  Button,
  Stack,
  FormControlLabel,
  Container,
  Box,
  Typography,
  FormGroup,
  Switch,
} from "@mui/material";
import { getArticle } from "@/lib/api";

interface EditArticleProps {
  params: { id: number };
}

const page = async ({ params }: EditArticleProps) => {
  const article = await getArticle(params.id);
  console.log(article);

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          記事編集
        </Typography>
        <form>
          <Stack spacing={3}>
            <TextField
              fullWidth
              label="タイトル"
              name="title"
              defaultValue={article.data.title}
            />
            <TextField
              fullWidth
              label="リンク"
              name="link"
              defaultValue={article.data.link}
            />
            <FormGroup>
              <FormControlLabel
                control={<Switch defaultChecked={article.data.is_pickup} />}
                label="注目記事に表示する"
              />
            </FormGroup>
            <Button type="submit" variant="contained" color="primary">
              保存
            </Button>
          </Stack>
        </form>
      </Box>
    </Container>
  );
};

export default page;
