import { useFormik } from "formik";
import Input from "./common/input";
import PageHeader from "./common/pageHeader";
import Joi from "joi";
import formikValidateUsingJoi from "../utils/formikValidateUsingJoi";
/* import { createUser } from "./services/userService";
 */import { useNavigate } from "react-router-dom";
 import {Navigate} from "react-router-dom"
import { useState } from "react";
import { useAuth } from "../context/auth.context";
import { toast } from "react-toastify";
// npm install formik
// npm i joi


const SignUpBiz = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  
  const {createUser,login,user} =useAuth();

  const form = useFormik({
    validateOnMount: true,
    initialValues: {
      email: "",
      password: "",
      name: "",
    },

    validate: formikValidateUsingJoi({
      name: Joi.string().min(2).max(255).required(),
      email: Joi.string().min(6).max(255).required().email({tlds:{allow:false}}),
      password: Joi.string().min(6).max(1024).required(),
    }),

    async  onSubmit(values) {
      try {
        await createUser({ ...values, biz: true });
        navigate("/my-cards");
        await login({email:values.email, password:values.password})
        toast("you didttt woooow");
      } catch ({ response }) {
        if (response && response.status === 400) {
          setError(response.data);
        }
      }
    },
  });

  if(user){
    return <Navigate to="/"/>
  }

  return (
    <>
      <PageHeader
        title="Sign Up with Real App"
        description="Open biz account"
      />

      <form onSubmit={form.handleSubmit} noValidate autoComplete="off">
      {error && <div className="alert alert-danger">{error}</div>}


        <Input
          type="email"
          label="Email"
          required
          {...form.getFieldProps("email")}
          error={form.touched.email && form.errors.email}
        />

        <Input
          type="password"
          name="password"
          label="Password"
          required
          {...form.getFieldProps("password")}
          error={form.touched.password && form.errors.password}
        />

        <Input
          type="text"
          label="Name"
          required
          {...form.getFieldProps("name")}
          error={form.touched.name && form.errors.name}
        />

        <div className="my-2">
          <button
            type="submit"
            disabled={!form.isValid}
            className="btn btn-primary"
          >
            Sign Up
          </button>
        </div>
      </form>
    </>
  );
};

export default SignUpBiz;
