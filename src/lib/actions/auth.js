"use server";

import { redirect } from "next/navigation";
import { errorsToObject, formDataToObject } from "../helpers/converter";
import registerValidation from "../validations/registration";

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
  const {error , value} = registerValidation(formData);
  if (error) {
    return errorsToObject(error.details);
  }
  redirect("/login");
}
