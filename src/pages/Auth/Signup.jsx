import { Link } from "react-router-dom";

import Button from "../../components/ui/Button";
import FormInput from "../../components/ui/FormInput";

const Signup = () => {
  {
    /* const {firstName, lastName, age, username, email, password} = req.body */
  }
  return (
    <div className="max-w-sm">
      <div className="mb-5 flex space-x-3">
        <div>
          <FormInput name={"firstName"} type={"text"} placeholder={"Endra"} />
        </div>
        <div>
          <FormInput name={"lastName"} type={"text"} placeholder={"Ganteng"} />
        </div>
      </div>
      <div className="mb-5">
        <FormInput name={"age"} a type={"number"} placeholder={"17"} />
      </div>
      <div className="mb-5">
        <FormInput name={"username"} a type={"text"} placeholder={"inibudigaming123"} />
      </div>
      <div className="mb-5">
        <FormInput name={"email"} a type={"email"} placeholder={"endrafruz@gmail.com"} />
      </div>
      <div className="mb-5">
        <FormInput name={"password"} a type={"text"} placeholder={"****"} />
      </div>
      <Button
        width={"w-full"}
        value={"Sign Up"}
        textColor={"text-white"}
        backgroundColor={"bg-secondary-blue"}
        xPadding="px-16"
        yPadding="py-2"
      />
      <h3 className="text-white">
        Already have an account?{" "}
        <span>
          <Link className="underline" to="/login">
            Login
          </Link>
        </span>
      </h3>
    </div>
  );
};

export default Signup;
