"use client"
import React from 'react';
import AuthForm from '@/components/forms/AuthForm';
import { SignUpSchema } from '@/lib/validations';

const SignUp = () => {
  return (
    <AuthForm
      formType="SIGN_UP"
      schema={SignUpSchema}
      defaultValues={{
        username: "",
        email: "",
        password: ""
      }}
      onSubmit={(data)=>{
        return Promise.resolve({success: true, data})
      }}
    />
  );
}

export default SignUp;