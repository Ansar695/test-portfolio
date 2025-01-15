"use client";

import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactFormSchema } from "@/utils/contact-form-schema";

const ContactForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch("/api/contact-me", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.fullName,
          message: data.message,
        }),
      });

      const result = await response.json();
      if (response.ok) {
        alert(result.message);
      } else {
        alert(result.error || "Something went wrong!");
      }

      reset();
    } catch (error) {
      alert("Error submitting the form");
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <div>
        <Controller
          name="fullName"
          control={control}
          render={({ field }) => (
            <>
              <input
                {...field}
                type="text"
                placeholder="Name"
                className="p-3 bg-[#1F2937] text-[#F3F4F6] focus:outline-none max-w-[250px]"
              />
              {errors.fullName && (
                <p className="text-[red] text-sm">{errors.fullName.message}</p>
              )}
            </>
          )}
        />
      </div>

      <div>
        <Controller
          name="message"
          control={control}
          render={({ field }) => (
            <>
              <textarea
                {...field}
                rows={5}
                placeholder="Message"
                className="p-3 bg-[#1F2937] text-[#F3F4F6] focus:outline-none w-[300px] lg:min-w-[400px] resize-none"
              />
              {errors.message && (
                <p className="text-[red] text-sm">{errors.message.message}</p>
              )}
            </>
          )}
        />
      </div>

      <Button
        className="bg-[#FACC15] hover:bg-[#EAB308] text-[#000000] w-[fit-content] rounded-sm text-base px-5 py-7"
        onClick={handleSubmit(onSubmit)}
      >
        Contact us
      </Button>
    </div>
  );
};

export default ContactForm;
