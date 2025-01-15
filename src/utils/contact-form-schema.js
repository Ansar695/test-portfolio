import * as yup from "yup";

export const contactFormSchema = yup.object({
  fullName: yup.string().required("Name is required"),
  message: yup.string().required("Message is required"),
});
