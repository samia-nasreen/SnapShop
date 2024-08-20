import * as yup from "yup";

export const checkoutSchema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  streetAddress: yup.string().required("Street Address is required"),
  city: yup.string().required("Town/City is required"),
  phoneNumber: yup.string().required("Phone Number is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
});
