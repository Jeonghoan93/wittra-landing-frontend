import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useContactUsModal from "src/hooks/useContactUsModal";
import { login } from "src/services/auth";
import Heading from "../Heading";
import Input from "../inputs/Input";
import Modal from "./Modal";
import TextBox from "../inputs/textBox";

const ContactUsModal = () => {
  const navigate = useNavigate();

  const contactUsModal = useContactUsModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (credentials) => {
    setIsLoading(true);

    try {
      const res = await login(credentials);

      if (res?.status == "success") {
        toast.success("Logged in");
        contactUsModal.onClose();
        navigate("/");
      } else {
        toast.error(res?.message || "Unknown error");
      }
    } catch (err) {
      toast.error("Unknown error");
    } finally {
      setIsLoading(false);
    }
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="We would love to discuss how WiTTRA can help your business!" />
      <Input
        id="name"
        label="Your name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="email"
        label="Email address"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="companyWebsite"
        label="Company website"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="country"
        label="Country"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <TextBox
        id="message"
        label="Type message"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={contactUsModal.isOpen}
      title="Contact us"
      actionLabel="Send"
      onClose={contactUsModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
    />
  );
};

export default ContactUsModal;
