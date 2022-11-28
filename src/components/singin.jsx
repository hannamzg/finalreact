import PageHeader from "./common/pageHeader";
import Input from "./common/input";
import { useFormik } from "formik";

function SignIn() {
    const form = useFormik({
        validateOnMount: true,
        initialValues:{
            email:"",
            password:""
        },
        validate(values){
            const errors ={};
            if (values.email === "") {
                errors.email = "noooooooooooooooooooo"                
            }
            if(values.password === ""){
                errors.password = "noooooooooooooooooooo"  
            }
            return errors
        },

        onSubmit(values){   
               console.log(values , "sumbmit"); 
        }
        
    })

    return(
        <>
        <PageHeader
        title="Sign in with Real App"
        description="welcome"
        />
        <form onSubmit={form.handleSubmit}  noValidate autoComplete="off">
            <Input  
            type="email"
            label="Email"
            {...form.getFieldProps("email")}
            error={form.touched.email && form.errors.email}
            required
            />

            <Input  
            type="password"
            label="password"
            {...form.getFieldProps("password")}
            error={form.touched.password && form.errors.password}
            required
            />

            <div className="my-2" >
                <button className="btn btn-primary"             
                disabled={!form.isValid}>
                     Sign In
                </button>
            </div>
            
        </form>
       

        </>

        
    )
}
export default SignIn;