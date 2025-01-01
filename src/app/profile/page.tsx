import ProfileForm from "@/_components/form/profileForm";
import { getProfile } from "@/lib/api";
import React from "react";

export async function formAction(formData: FormData): Promise<void> {
  // inputタグの name 属性に対応
  const displayName = formData.get("displayName") as string;
  const displayShortName = formData.get("displayShortName") as string;
  const github = formData.get("github") as string;
  const qiita = formData.get("qiita") as string;
  const zenn = formData.get("zenn") as string;
  const address = formData.get("address") as string;
  const skill = formData.get("skill");
  const from = formData.get("from") as string;
  const likes = formData.get("likes");
  const summaryIntroduction = formData.get("summaryIntroduction") as string;
  const introduction = formData.get("introduction") as string;
  const job = formData.get("job") as string;

  console.log(
    displayName,
    displayShortName,
    github,
    qiita,
    zenn,
    address,
    skill,
    from,
    likes,
    summaryIntroduction,
    introduction,
    job
  );

  try {
    // const res = await fetch(`${process.env.NEXT_API_URL}/api/profile`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     displayName,
    //     displayShortName,
    //     github,
    //     qiita,
    //     zenn,
    //     address,
    //     skill,
    //     from,
    //     likes,
    //     summaryIntroduction,
    //     introduction,
    //     job,
    //   }),
    // });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "更新に失敗しました");
    }

    // 成功時の再描画などが必要なら再検証するパスを指定
    // revalidatePath('/profile/edit');

    alert("更新しました");
  } catch (error) {
    console.log(error);
  }
}

export default async function page() {
  try {
    const profile = await getProfile();
    if (!("data" in profile) || !profile.data) {
      return <div>データの取得に失敗しました。</div>;
    }
    return <ProfileForm profile={profile} />;
  } catch (error) {
    console.log(error);
    return <div>データの取得に失敗しました。</div>;
  }
}
