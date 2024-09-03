import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Button from "../../../components/UI/Button";
import RoundedInput from "../../../components/UI/RoundedInput";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactSchema } from "../../../schemas/contactSchema";

interface ContactFormValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: yupResolver(contactSchema),
  });

  const onSubmit: SubmitHandler<ContactFormValues> = (data) => {
    console.log(data);
    toast.success("Message sent successfully");
    reset();
  };

  return (
    <div
      className="bg-white rounded-md px-8 py-12 w-full md:w-2/3"
      style={{ boxShadow: "0px 0px 8px 2px rgba(0, 0, 0, 0.05)" }}
    >
      <form
        className="flex flex-col space-y-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-4">
          <RoundedInput
            name="name"
            placeholder="Your Name"
            register={register}
            errors={errors}
            required
          />
          <RoundedInput
            name="email"
            placeholder="Your Email"
            register={register}
            errors={errors}
            required
          />
          <RoundedInput
            type="tel"
            name="phone"
            placeholder="Your Phone"
            register={register}
            errors={errors}
            required
          />
        </div>
        <textarea
          placeholder="Your Message"
          rows={8}
          className="w-full p-3 border border-white bg-stone-100 rounded"
          {...register("message", { required: true })}
        />
        {errors.message && (
          <p className="text-red-500 text-sm">Message is required</p>
        )}
        <div className="pt-4 pb-2 text-right">
          <Button text="Send Message" type="submit" fontSize="base" />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
