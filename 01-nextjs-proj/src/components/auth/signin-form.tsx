// src\components\auth\signin-form.tsx

"use client";

import { FC, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useActionState } from "react";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { LogIn } from "lucide-react";

import { Spinner } from "@/components/ui/spinner";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

import { cn } from "@/lib/utils";
import { postSignin } from "@/app/actions/auth";

interface Props {
  className?: string;
  redirect: string;
}

const formSchema = z.object({
  username: z.string().min(2, {
    error: "Username must be at least 2 characters.",
  }),
  password: z
    .string()
    .min(1, "Please enter your password")
    .min(7, "Password must be at least 7 characters long"),
});

const initialState = { success: false, error: null };

const SigninForm: FC<Props> = ({ className, redirect, ...props }) => {
  const router = useRouter();

  const [state, formAction, isPending] = useActionState(
    postSignin,
    initialState,
  );

  const form = useForm<z.infer<typeof formSchema>>({
    mode: "onChange", // <-- makes isValid update live
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  // Watch form validity and if form has been modified (isDirty)
  const isValid = form.formState.isValid; // Check if form is valid
  const isDirty = form.formState.isDirty; // Check if form is modified

  // Show toast when state updates
  useEffect(() => {
    if (isPending) return; // skip while loading

    if (state.success) {
      toast.success("Welcome back!");
      router.push(redirect);
    }

    if (state.error) {
      toast.error(state.error);
    }
  }, [state, isPending, router, redirect]);

  return (
    <div
      className={cn(
        `flex min-h-3/5 w-1/3 flex-col items-center justify-center rounded-lg bg-white p-4 dark:bg-black`,
        className,
      )}
      {...props}
    >
      <Form {...form}>
        <form action={formAction} className="space-y-8">
          {/* Email */}
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="your username" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="••••••••" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            disabled={isPending || !isValid || !isDirty} // Disable if form is not valid or has no changes
            className={cn(
              "mt-2 w-full transition",
              !isValid || !isDirty
                ? "cursor-not-allowed border border-gray-300 bg-transparent text-gray-500 shadow-none"
                : "",
            )}
          >
            {isPending ? (
              <Spinner />
            ) : (
              <>
                <LogIn color={"#F5F5F5"} />
                Sign in
              </>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};
export { SigninForm };
