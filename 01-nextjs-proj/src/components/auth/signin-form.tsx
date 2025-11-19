"use client";

import { FC, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Spinner } from "@/components/ui/spinner";

import { LogIn } from "lucide-react";

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

interface Props {
  className?: string;
  redirect: string;
}

const formSchema = z.object({
  username: z.string().min(2, {
    error: "Username must be at least 2 characters.",
  }),
});

const SigninForm: FC<Props> = ({ className, redirect, ...props }) => {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  // Watch form validity and if form has been modified (isDirty)
  const isValid = form.formState.isValid; // Check if form is valid
  const isDirty = form.formState.isDirty; // Check if form is modified

  const handleOnSubmit = (data: z.infer<typeof formSchema>) => {
    if (isLoading) return; // prevent performing multiple on submits

    setIsLoading((prev) => !prev); // Start loading

    try {
      const loginPromise = new Promise<{ name: string }>((resolve) =>
        setTimeout(() => resolve({ name: data.username }), 500),
      );

      toast.promise<{ name: string }>(loginPromise, {
        loading: "Signing in...",
        success: (data) => `Welcome back ${data.name}`,
        error: "Error",
      });
      router.push(redirect);
    } catch (error: unknown) {
      // const msg = error instanceof Error ? error.message : "Something went wrong!";
      // test
      // console.log(msg);
    } finally {
      setIsLoading((prev) => !prev); // Stop loading
    }
  };

  return (
    <div
      className={cn(
        `flex min-h-98 w-3/5 flex-col items-center justify-center rounded-lg bg-white p-4 dark:bg-black`,
        className,
      )}
      {...props}
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleOnSubmit)}
          className="space-y-8"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="type username" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            disabled={!isValid || !isDirty} // Disable if form is not valid or has no changes
            className={cn(
              "mt-2 w-full transition",
              !isValid || !isDirty
                ? "cursor-not-allowed border border-gray-300 bg-transparent text-gray-500 shadow-none"
                : "",
            )}
          >
            {isLoading ? (
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
