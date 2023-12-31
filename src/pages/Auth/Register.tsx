import { useState } from "react";
import Logo from "../../assets/svgs/xpress.svg";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [step, setStep] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="bg-[#F5F6F8] min-h-screen h-full p-6">
      <div className="max-w-[1200px] mx-auto w-full">
        <div className="flex gap-5 flex-col sm:flex-row pt-5 sm:pt-[unset] justify-between items-center min-h-[80px]">
          <img src={Logo} alt="express" className="w-[100px]" />
          <div className="flex items-center gap-2 text-sm">
            <div className="text-[#606060]">Already have an account?</div>
            <button
              className="border px-3 py-2 rounded text-primary font-bold text-sm border-primary"
              onClick={() => navigate("/login")}
            >
              Sign in
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center w-full min-h-[calc(100vh-80px)]">
          <div className="max-w-[522px] mx-auto w-full bg-white p-10">
            <h3 className="text-lg sm:text-2xl font-medium text-primary">
              Welcome to Xpress Rewards
            </h3>
            <div className="text-xs text-[#606060] mt-1">
              Complete the form below to get started
            </div>
            {!step && <StepOne setStep={setStep} />}
            {step && <StepTwo />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
