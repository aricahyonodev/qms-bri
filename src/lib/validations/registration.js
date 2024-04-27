import Joi from "joi";
import { formDataToObject } from "../helpers/converter";

const messagesFullName = { "string.empty": "Nama Lengkap wajib terisi" };
const messagesEmail = {
  "string.empty": "Email wajib terisi",
  "string.email": "Format Email salah",
};
const messagesPassword = {
  "string.empty": "Password wajib terisi",
};
const messageRePassword = {
  "string.empty": "Re-Password wajib terisi",
  "any.only": "Re-Password wajib sama dengan Password",
};

export default function registerValidation(formData) {
  const schema = Joi.object({
    fullName: Joi.string().required().messages(messagesFullName),
    email: Joi.string().email().required().messages(messagesEmail),
    password: Joi.string().required().messages(messagesPassword),
    rePassword: Joi.string()
      .required()
      .valid(Joi.ref("password"))
      .messages(messageRePassword),
  });
  return schema.validate(formDataToObject(formData), {
    abortEarly: false,
  });
}
