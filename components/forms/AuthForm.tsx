"use client"
import { DefaultValues, FieldValues, Path, SubmitHandler, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { z, ZodType } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import ROUTES from "@/constants/routes";

interface AuthFormProps<T extends FieldValues> {
    formType: "SIGN_IN" | "SIGN_UP";
    schema: ZodType<T>;
    defaultValues: T;
    onSubmit: (data: T) => Promise<{success: boolean}>;
}

const AuthForm = <T extends FieldValues> ({formType, schema, defaultValues, onSubmit}: AuthFormProps<T>) => {

    const form = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
        defaultValues: defaultValues as DefaultValues<T>,
    });

    const handleSubmit: SubmitHandler<T> = async () => {
        
    };

    const buttonText = formType === "SIGN_IN" ? 'Sign In' : 'Sign Up';

    return (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 pt-10">
            {Object.keys(defaultValues).map((field)=>(
                <FormField
                    key={field}
                    control={form.control}
                    name={field as Path<T>}
                    render={({ field }) => (
                        <FormItem className="flex flex-col w-full gap-2.5">
                            <FormLabel>{field.name == "email" ? "Email address" : field.name.charAt(0).toUpperCase() + field.name.slice(1)}</FormLabel>
                            <FormControl>
                                <Input 
                                    required 
                                    type={field.name==="password" ? "password" : "text"}  
                                    {...field} 
                                    className="paragraph-regular background-light900_dark300 light-border-2
                                    text-dark300_light700 no-focus min-h-10 rounded-1.5 border"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )
                }
              />
            ))}
            <Button disabled={form.formState.isSubmitting} 
                className="primary-gradient w-full 
                !text-white paragraph-semibold min-h-12 rounded-2
                px-4 py-3 font-inter"
            >
                {form.formState.isSubmitting 
                    ? buttonText === "Sign In" 
                        ? "Signing In..." : "Signing Up..."
                    : buttonText
                }
            </Button>
            {formType==="SIGN_IN" && (
                <p className="w-fit m-auto">
                    Don't have an account?{" "}
                    <Link href={ROUTES.SIGN_UP} className="paragraph-semibold primary-text-gradient">
                        Sign up
                    </Link>
                </p>
            )}
            {formType==="SIGN_UP" && (
                <p className="w-fit m-auto">
                    Already have an account?{" "}
                    <Link href={ROUTES.SIGN_IN} className="paragraph-semibold primary-text-gradient">
                        Sign In
                    </Link>
                </p>
            )}
          </form>
        </Form>
    )
}

export default AuthForm