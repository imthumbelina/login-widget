import React from "react"
import { useForm, SubmitHandler } from "react-hook-form"

import './LoginWidget.css';

type FormValues = {
  email: string
  password: string
}

export default function LoginWidget() {      
  const { register, handleSubmit, formState } = useForm<FormValues>({ mode: "onChange"})

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    localStorage.setItem("email", JSON.stringify(data.email));
  }

  return (
    <>
    <h3>Log in</h3>
    <div className="Form-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Email</label>
        <input type="email" {...register("email", { required: true, pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Entered value does not match email format",
            }, })} placeholder="Email address" />
        <label>Password</label>
        <input type="password" {...register("password", { required: true, minLength: 8 })} placeholder="Password"/>
        <input type="submit" value="Log in" disabled={!formState.isValid} />
      </form>
    </div>
    </>
  )
}