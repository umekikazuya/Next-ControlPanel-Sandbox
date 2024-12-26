"use client";

import {
  TextField,
  Button,
  Box,
  Typography,
  Container,
  Stack,
  Autocomplete,
} from "@mui/material";
import { ApiResource } from "@/model/apiResource.model";
import { Profile } from "@/model/profile.model";
import { formAction } from "@/app/profile/page";

type ProfileFormProps = {
  profile: ApiResource<Profile>;
};

const ProfileForm: React.FC<ProfileFormProps> = ({ profile }) => {
  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          プロフィール管理
        </Typography>
        <form action={formAction}>
          <Stack spacing={3}>
            <TextField
              fullWidth
              label="DisplayName"
              name="displayName"
              defaultValue={profile.data.displayName}
            />
            <TextField
              fullWidth
              label="DisplayShortName"
              name="displayShortName"
              defaultValue={profile.data.displayShortName}
            />
            <TextField
              fullWidth
              label="GitHub"
              name="github"
              defaultValue={profile.data.github}
            />
            <TextField
              fullWidth
              label="Qiita"
              name="qiita"
              defaultValue={profile.data.qiita}
            />
            <TextField
              fullWidth
              label="Zenn"
              name="zenn"
              defaultValue={profile.data.zenn}
            />
            <TextField
              fullWidth
              label="Address"
              name="address"
              defaultValue={profile.data.address}
            />
            <Autocomplete
              fullWidth
              options={[]}
              multiple
              freeSolo
              // defaultValue={profile.data.skill}
              renderInput={(params) => (
                <TextField {...params} label="Skill" name={`skill`} />
              )}
            />
            <TextField
              fullWidth
              label="From"
              name="from"
              defaultValue={profile.data.from}
            />
            {/* 好きなものの複数フィールド */}
            <Box>
              <Typography variant="h6" component="h2" gutterBottom>
                好きなもの
              </Typography>
              {profile.data.likes &&
                profile.data.likes.map((like, index) => (
                  <TextField
                    key={index}
                    fullWidth
                    label={`好きなもの ${index + 1}`}
                    name="likes[]"
                    defaultValue={like}
                  />
                ))}
            </Box>
            <TextField
              fullWidth
              label="SummaryIntroduction"
              name="summaryIntroduction"
              defaultValue={profile.data.summaryIntroduction}
              multiline
              rows={2}
            />
            <TextField
              fullWidth
              label="Introduction"
              name="introduction"
              defaultValue={profile.data.introduction}
              multiline
              rows={4}
            />
            <TextField
              fullWidth
              label="Job"
              name="job"
              defaultValue={profile.data.job}
            />
            <Button type="submit" variant="contained" color="primary">
              保存
            </Button>
          </Stack>
        </form>
      </Box>
    </Container>
  );
};

export default ProfileForm;
