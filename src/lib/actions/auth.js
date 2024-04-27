"use server";

import { redirect } from "next/navigation";
import { errorsToObject, formDataToObject } from "../../helper/converter";
import registerValidation from "../validations/register";
import prismaClient from "../../config/prismaClient";

export async function loginAction(prevState, formData) {
  const dataForm = formDataToObject(formData);
  if (dataForm.email === "user" && dataForm.password === "123") {
    return redirect("/home");
  } else {
    return {
      message: "login gagal",
    };
  }
}

export async function registerAction(prevState, formData) {
  const { error, value } = registerValidation(formData);

  if (error) {
    // return validation error
    return errorsToObject(error.details);
  }

  const newUser = {
    email: value.email,
    fullName: value.fullName,
    password: value.password,
  };

  try {
    await prismaClient.user.create({ data: newUser });
    redirect("/login");
  } catch (error) {
    return { message: "Pendaftaran gagal, silakan coba kembali" };
  }
}
