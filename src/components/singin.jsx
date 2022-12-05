import { useFormik } from "formik";
import Input from "./common/input";
import PageHeader from "./common/pageHeader";
import Joi from "joi";
import formikValidateUsingJoi from "../utils/formikValidateUsingJoi";
/*  import { loginUser } from "./services/userService";
 */ import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/auth.context";
// npm install formik
// npm i joi

const Signin = () => {

  const [error, setError] = useState("");
  const navigate = useNavigate();
  const {login:loginUser} =useAuth();

  const form = useFormik({
    validateOnMount: true,
    initialValues: {
      email: "",
      password: "",
    },
    

    validate: formikValidateUsingJoi({
      email: Joi.string().min(6).max(255).required().email({tlds:{allow:false}}),
      password: Joi.string().min(6).max(1024).required(),
    }),

    async  onSubmit(values) {
      loginUser(values)
      try {
        await loginUser(values);
        navigate("/")
      } catch ({ response }) {
        if (response && response.status === 400) {
          setError(response.data);
        }
      } 
    },
  });

  return (
    <>
      <PageHeader
        title="Sign in with Real App"
        description="sing in"
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

        

        <div className="my-2">
          <button
            type="submit"
            disabled={!form.isValid}
            className="btn btn-primary"
          >
            Sign in
          </button>
        </div>
      </form>
    </>
  );
};

export default Signin;
