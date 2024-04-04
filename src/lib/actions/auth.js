"use server";

import Joi from "joi";
import { redirect } from "next/navigation";
import { errorsToObject, formDataToObject } from "../helpers/converter";

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
  const schema = Joi.object({
    fullName: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    rePassword: Joi.string().required(),
  });
  const { error, value } = schema.validate(formDataToObject(formData), {
    abortEarly: false,
  });
  if (error) {
    return errorsToObject(error.details);
  }
  redirect("/login");
}
