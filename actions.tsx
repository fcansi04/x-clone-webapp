"use server";

export const shareAction = async (formData: FormData) => {
  const file = formData.get("file") as File;
  const desc = formData.get("description") as String;
  console.log(file, desc);
};
