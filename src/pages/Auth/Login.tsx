import { Button, PasswordInput, TextInput } from "@mantine/core";
import Logo from "../../assets/svgs/xpress.svg";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate()
  return (
    <div className="bg-[#F5F6F8] min-h-screen p-6">
      <div className="max-w-[1200px] mx-auto w-full">
      <div className="flex gap-5 flex-col sm:flex-row pt-5 sm:pt-[unset] justify-between items-center min-h-[80px]">
          <img src={Logo} alt="express" className="w-[100px]" />
          <div className="flex items-center gap-2 text-sm">
            <div className="text-[#606060]">New to Xpress Rewards?</div>
            <button className="border px-3 py-2 rounded text-primary font-bold text-sm border-primary"
            onClick={() => navigate("/register")}>
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
            <TextInput required mt={16} size="md" label="Email Address" />
            <PasswordInput size="md" required mt={16} label="Password" />
            <div className="mt-3 flex items-center gap-2">
              <div>Forgot password?</div>
              <button className="text-primary font-medium">Reset it</button>
            </div>

            <Button size="md" mt={32} className="w-full bg-primary text-white">
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
