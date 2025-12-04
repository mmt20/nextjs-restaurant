"use client";
import { Button, Form } from "react-bootstrap";
import FormInput from "./form-Input";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema, signUpType } from "@/app/validations/signUpSchema";
import { useActionState, useTransition } from "react";
import { signUpAction } from "@/app/actions/singup-actiom";
import toast from "react-hot-toast";
import { withCallbacks } from "@/app/utils/with-callback.util";
import { useRouter } from "next/navigation";

const SignupForm = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors: formErrors, isValid },
  } = useForm<signUpType>({
    mode: "onBlur",
    resolver: zodResolver(signUpSchema),
  });

  const signupSubmit = withCallbacks(signUpAction, {
    onSuccess: (data) => {
      if (data?.message) {
        toast.success(data.message);
      }
      router.replace("/");
    },
    onError: (error) => {
      if (error?.error) {
        toast.error(error.error);
      }
    },
  });

  const [, formAction] = useActionState(signupSubmit, { error: "" });

  const submitForm: SubmitHandler<signUpType> = (data) => {
    startTransition(() => {
      formAction(data);
    });
  };

  return (
    <Form onSubmit={handleSubmit(submitForm)} className="container mt-4 mb-5">
      <FormInput label="First Name" name="firstName" register={register} error={formErrors.firstName?.message} />
      <FormInput label="Last Name" name="lastName" register={register} error={formErrors.lastName?.message} />
      <FormInput label="Email" type="email" name="email" register={register} error={formErrors.email?.message} />
      <FormInput
        label="Password"
        type="password"
        name="password"
        register={register}
        error={formErrors.password?.message}
      />
      <FormInput
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        register={register}
        error={formErrors.confirmPassword?.message}
      />

      <Button variant="danger" type="submit" style={{ color: "white" }} disabled={isPending || !isValid}>
        {isPending ? "Creating Account..." : "Sign Up"}
      </Button>
    </Form>
  );
};

export default SignupForm;
