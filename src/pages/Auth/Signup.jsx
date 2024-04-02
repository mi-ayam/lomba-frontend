import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import Button from "../../components/ui/Button";
import FormInput from "../../components/ui/FormInput";

import userService from "../../service/users.service";

const Signup = () => {
  const initialState = {
    firstName: "",
    lastName: "",
    age: "",
    username: "",
    email: "",
    password: "",
  };

  const [user, setUser] = useState(initialState);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const addUser = (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("firstName", user.firstName);
    formData.append("lastName", user.lastName);
    formData.append("age", user.age);
    formData.append("username", user.username);
    formData.append("email", user.email);
    formData.append("password", user.password);

    let headers = {
      "Content-Type": "multipart/form-data",
    };

    const fetchResponse = userService.create(formData, headers);
    fetchResponse.then((res) => {
      setUser({
        id: res.data.id,
        firstName: res.data.firstName,
        lastName: res.data.lastName,
        age: res.data.age,
        username: res.data.username,
        email: res.data.email,
        password: res.data.password,
      });
      console.log(res.data);
      navigate("/login");
    });
  };
  return (
    <div className="max-w-sm">
      <div className="mb-5 flex space-x-3">
        <div>
          <FormInput
            name={"firstName"}
            type={"text"}
            placeholder={"Endra"}
            value={user.firstName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <FormInput
            name={"lastName"}
            type={"text"}
            placeholder={"Ganteng"}
            value={user.lastName}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="mb-5">
        <FormInput
          name={"age"}
          a
          type={"number"}
          placeholder={"17"}
          value={user.age}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-5">
        <FormInput
          name={"username"}
          a
          type={"text"}
          placeholder={"inibudigaming123"}
          value={user.username}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-5">
        <FormInput
          name={"email"}
          a
          type={"email"}
          placeholder={"endrafruz@gmail.com"}
          value={user.email}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-5">
        <FormInput
          name={"password"}
          a
          type={"text"}
          placeholder={"****"}
          value={user.password}
          onChange={handleInputChange}
        />
      </div>
      <Button
        width={"w-full"}
        value={"Sign Up"}
        textColor={"text-white"}
        backgroundColor={"bg-secondary-blue"}
        xPadding="px-16"
        yPadding="py-2"
        onClick={addUser}
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
