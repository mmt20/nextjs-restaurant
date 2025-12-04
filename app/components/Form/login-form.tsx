"use client";
import { Button, Form } from "react-bootstrap";
import FormInput from "./form-Input";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, loginType } from "@/app/validations/loginSchema";
import { useActionState, useTransition } from "react";
import { loginAction } from "@/app/actions/login-action";
import toast from "react-hot-toast";
import { withCallbacks } from "@/app/utils/with-callback.util";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors: formErrors, isValid },
  } = useForm<loginType>({
    mode: "onBlur",
    resolver: zodResolver(loginSchema),
  });

  const loginSubmit = withCallbacks(loginAction, {
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

  const [, formAction] = useActionState(loginSubmit, { error: "" });

  const submitForm: SubmitHandler<loginType> = (data) => {
    startTransition(() => {
      formAction(data);
    });
  };

  return (
    <Form onSubmit={handleSubmit(submitForm)} className="container mt-4 mb-5">
      <FormInput
        label="Email"
        type="email"
        name="email"
        register={register}
        error={formErrors.email?.message}
        placeholder="name@example.com"
      />
      <FormInput
        label="Password"
        type="password"
        name="password"
        register={register}
        error={formErrors.password?.message}
      />

      <Button variant="danger" type="submit" style={{ color: "white" }} disabled={isPending || !isValid}>
        {isPending ? "Logging in..." : "Login"}
      </Button>
    </Form>
  );
};

export default LoginForm;
