import { Link } from "react-router-dom";
import FormInput from "../../components/ui/FormInput";
import Button from "../../components/ui/Button";

const Login = () => {
  return (
    <div className="max-w-sm">
      <div className="mb-5">
        <FormInput name={"username"} a type={"text"} placeholder={"budigaming"} />
      </div>
      <div className="mb-5">
        <FormInput name={"password"} a type={"text"} placeholder={"****"} />
      </div>
      <Button
        width={"w-full"}
        value={"Sign In"}
        textColor={"text-white"}
        backgroundColor={"bg-secondary-blue"}
        xPadding="px-16"
        yPadding="py-2"
      />
      <h3 className="text-white">
        Don't have an account?{" "}
        <span>
          <Link className="underline" to="/signup">
            Sign up
          </Link>
        </span>
      </h3>
    </div>
  );
};

export default Login;
