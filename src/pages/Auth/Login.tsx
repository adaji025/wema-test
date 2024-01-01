import {
  Button,
  PasswordInput,
  TextInput,
  LoadingOverlay,
} from "@mantine/core";
import Logo from "../../assets/svgs/xpress.svg";
import { useNavigate } from "react-router-dom";
import { useForm } from "@mantine/form";
import { Fragment, useState } from "react";
import { loginUser } from "../../services/user";
import { showNotification } from "@mantine/notifications";
import useNotification from "../../components/hooks/useNotification";
const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { handleError } = useNotification();

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
  });

  const submit = (values: any) => {
    setLoading(true);

    loginUser(values)
      .then(() => {
        showNotification({
          title: "success",
          message: "Login successful",
          color: "green",
        });
      })
      .catch((error) => {
        handleError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <Fragment>
      <LoadingOverlay visible={loading} />
      <div className="bg-[#F5F6F8] min-h-screen p-6">
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="flex gap-5 flex-col sm:flex-row pt-5 sm:pt-[unset] justify-between items-center min-h-[80px]">
            <img src={Logo} alt="express" className="w-[100px]" />
            <div className="flex items-center gap-2 text-sm">
              <div className="text-[#606060]">New to Xpress Rewards?</div>
              <button
                className="border px-3 py-2 rounded text-primary font-bold text-sm border-primary"
                onClick={() => navigate("/register")}
              >
                Sign up
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center w-full h-[calc(100vh-80px)] -mt-[60px]">
            <div className="max-w-[522px] mx-auto w-full bg-white p-10">
              <h3 className="text-lg sm:text-2xl font-medium text-primary">
                Welcome Back!
              </h3>
              <div className="text-xs text-[#606060] mt-1">
                Sign in to your Xpress reward partner’s dashboard
              </div>
              <form onSubmit={form.onSubmit((values) => submit(values))}>
                <TextInput
                  type="email"
                  required
                  mt={16}
                  size="md"
                  label="Email Address"
                  {...form.getInputProps("email")}
                />
                <PasswordInput
                  size="md"
                  required
                  mt={16}
                  label="Password"
                  {...form.getInputProps("password")}
                />
                <div className="mt-3 flex items-center gap-2">
                  <div>Forgot password?</div>
                  <button className="text-primary font-medium">Reset it</button>
                </div>

                <Button
                  size="md"
                  type="submit"
                  mt={32}
                  className="w-full bg-primary text-white"
                >
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
