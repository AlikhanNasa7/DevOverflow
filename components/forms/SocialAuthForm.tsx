"use client"

import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { toast } from "@/hooks/use-toast";
import { signIn } from "next-auth/react";
import ROUTES from "@/constants/routes";

const SocialAuthForm = () => {
    
    const handleSignIn = async (provider: "github" | "google") => {
        try {
            await signIn(provider, {
                callbackUrl: ROUTES.HOME,
                redirect: false
            });
        } catch (error){
            console.log(error);

            toast({
                title: "Sign-in Failed",
                description: error instanceof Error ? error.message : "An error occurred during sign-in",
                variant: "destructive"
            });
        }
    };

    return (
        <div className="mt-10 flex flex-wrap gap-2.5">
        <Button className="background-light800_dark400 
        text-dark200_light800 min-h-12 flex-1 px-4 py-3.5 rounded-2 font-bold"
        onClick={()=>handleSignIn("github")}>
            <Image
                src="/icons/github.svg"
                alt="Github logo"
                width={20}
                height={20}
                className="invert-colors mr-2.5 object-contain"
            />
            <span>Log in with GitHub</span>
        </Button>

        <Button className="background-light800_dark400 
        text-dark200_light800 min-h-12 flex-1 px-4 py-3.5 rounded-2 font-bold"
        onClick={()=>handleSignIn("google")}>
            <Image
                src="/icons/google.svg"
                alt="Google logo"
                width={20}
                height={20}
                className="invert-colors mr-2.5 object-contain"
            />
            <span>Log in with Google</span>
        </Button>
        </div>
    );
};

export default SocialAuthForm;
