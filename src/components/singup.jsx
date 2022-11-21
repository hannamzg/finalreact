import PageHeader from "./common/pageHeader";
import Input from "./common/input";
const SignUp = () => {
  return (
    <>
      <PageHeader
        title="Sign Up with Real App"
        description="Open a new account, it is free!!!!!!"
      />

      <form noValidate autoComplete="off">
        <div className="alert alert-danger">Error</div>
        
       

        <Input type="email" name="email" label="Email" />

        <Input type="password" name="password" label="Password" />

        <Input type="text" name="name" label="Name" />

        <div className="my-2">
          <button className="btn btn-primary">Sign Up</button>
        </div>
      </form>
    </>
  );
};

export default SignUp;
