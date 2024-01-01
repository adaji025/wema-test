import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/svgs/xpress.svg";
import {
  Button,
  NumberInput,
  PasswordInput,
  Select,
  TextInput,
} from "@mantine/core";
import { stateArrays } from "../../utils/state";
import { useForm } from "@mantine/form";
import { registerUser } from "../../services/user";
import { RegisterTypes } from "../../types/user";
import { showNotification } from "@mantine/notifications";
import { useDropzone } from "react-dropzone";
import UploadIcon from "../../assets/svgs/upload.svg";
import ButtonIcon from "../../assets/svgs/Icon button.svg";

const Register = () => {
  const [step, setStep] = useState(false);
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
  });

  const navigate = useNavigate();

  const form = useForm({
    initialValues: {
      businessName: "",
      businessAddress: "",
      businessEmail: "",
      businessPhone: "",
      businessCategory: "",
      accountNumber: "",
      houseNumber: "",
      streetNumber: "",
      city: "",
      state: "",
      contactName: "",
      contactPhone: "",
      contactEmail: "",
      password: "",
      confirm_password: "",
      image: "",
    },
    validate: {
      confirm_password: (value, values) =>
        value !== values.password ? "Passwords did not match" : null,
    },
  });

  const submit = (values: RegisterTypes) => {

    const formData = new FormData();
    formData.append("businessName", values.businessName);
    formData.append("businessAddress", "values.businessAddress");
    formData.append("businessEmail", values.businessEmail);
    formData.append("businessPhone", values.businessPhone);
    formData.append("businessCategory", values.businessCategory);
    formData.append("accountNumber", values.accountNumber);
    formData.append("houseNumber", values.houseNumber);
    formData.append("streetNumber", values.streetNumber);
    formData.append("city", values.city);
    formData.append("state", values.state);
    formData.append("contactName", values.contactName);
    formData.append("contactPhone", values.contactPhone);
    formData.append("contactEmail", values.contactEmail);
    formData.append("password", values.password);
    formData.append("image", acceptedFiles[0]);

    registerUser(formData)
      .then(() => {
        showNotification({
          title: "Success",
          message: "Successfully registered",
          color: "green",
        });
      })
      .catch((err) => {
        console.log(err);
      });

    console.log(values)
  };
  return (
    <Fragment>
      <div className="bg-[#F5F6F8] min-h-screen h-full p-6">
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="flex gap-5 flex-col sm:flex-row pt-5 sm:pt-[unset] justify-between items-center min-h-[80px]">
            <img src={Logo} alt="express" className="w-[100px]" />
            <div className="flex items-center gap-2 text-sm">
              <div className="text-[#606060]">Already have an account?</div>
              <button
                type="button"
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

              <form onSubmit={form.onSubmit((values) => submit(values))}>
                {!step && (
                  <div>
                    <h5 className="text-primary mt-5 font-medium">
                      Business Information
                    </h5>
                    <TextInput
                      required
                      mt={16}
                      size="md"
                      label="Business Name"
                      {...form.getInputProps("businessName")}
                    />
                    <TextInput
                      required
                      mt={16}
                      size="md"
                      label="Business Email Address"
                      {...form.getInputProps("businessEmail")}
                    />
                    <TextInput
                      required
                      mt={16}
                      size="md"
                      label="Business Phone Number"
                      {...form.getInputProps("businessPhone")}
                    />
                    <Select
                      required
                      mt={16}
                      size="md"
                      label="Business Category"
                      data={[
                        {
                          label: "Category one",
                          value: "one",
                        },
                        {
                          label: "Category two",
                          value: "two",
                        },
                        {
                          label: "Category Three",
                          value: "three",
                        },
                      ]}
                      {...form.getInputProps("businessCategory")}
                    />

                    <NumberInput
                      required
                      mt={16}
                      size="md"
                      hideControls
                      label="Account No"
                      {...form.getInputProps("accountNumber")}
                    />

                    <div className="mt-5">
                      <div
                        {...getRootProps({
                          className:
                            "dropzone flex justify-center text-sm my-2  cursor-pointer gap-3 px-2 py-8",
                        })}
                      >
                        <input {...getInputProps()} />
                        {acceptedFiles.length === 0 && (
                          <div className="grid place-items-center">
                            <img src={UploadIcon} alt="" className="w-[40px]" />
                            <div className="">
                              <div>
                                Drag here or click the button below to upload{" "}
                              </div>
                              <div className="flex justify-center">

                              <div  className="inline-flex justify-center mx-auto text-sm items-center gap-3 px-4 py-2 text-white rounded-md my-4 bg-primary">
                                <img src={ButtonIcon} alt="" />
                                <div>Choose file</div>
                              </div>
                              </div>
                            </div>
                            <div>Maximum upload size: 10MB (.jpg)</div>
                          </div>
                        )}
                        {acceptedFiles.length !== 0 && (
                          <div className="flex items-center gap-1">
                            {acceptedFiles[0].name}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex gap-3 items-center mt-6">
                      <Button
                        size="md"
                        type="button"
                        className="w-1/3 sm:w-1/3 bg-primary text-white"
                        onClick={() => setStep(true)}
                      >
                        Next
                      </Button>
                      <div className="text-sm text-[#808080]">step 1 of 2</div>
                    </div>
                  </div>
                )}

                {step && (
                  <div>
                    <h5 className="text-primary mt-5 font-medium">
                      Business Address
                    </h5>
                    <div className="flex gap-3">
                      <TextInput
                        required
                        mt={16}
                        size="md"
                        label="House Number"
                        className="w-1/3"
                        {...form.getInputProps("houseNumber")}
                      />
                      <TextInput
                        required
                        mt={16}
                        size="md"
                        label="Street"
                        className="flex-1"
                        {...form.getInputProps("streetNumber")}
                      />
                    </div>
                    <div className="flex gap-3">
                      <TextInput
                        required
                        mt={16}
                        size="md"
                        label="City"
                        className="w-1/2"
                        {...form.getInputProps("city")}
                      />
                      <Select
                        required
                        mt={16}
                        size="md"
                        label="State"
                        className="flex-1"
                        data={stateArrays.map((state) => state)}
                        searchable
                        {...form.getInputProps("state")}
                      />
                    </div>

                    <h5 className="text-primary mt-5 font-medium">
                      Contact Person Information
                    </h5>

                    <TextInput
                      required
                      mt={16}
                      size="md"
                      label="Contact Name"
                      {...form.getInputProps("contactName")}
                    />
                    <NumberInput
                      hideControls
                      required
                      mt={16}
                      size="md"
                      label="Contact Phone Number"
                      {...form.getInputProps("contactPhone")}
                    />
                    <TextInput
                      required
                      mt={16}
                      size="md"
                      type="email"
                      label="Contact Email"
                      {...form.getInputProps("contactEmail")}
                    />

                    <h5 className="text-primary mt-5 font-medium">Password</h5>
                    <PasswordInput
                      size="md"
                      required
                      mt={16}
                      label="Password"
                      {...form.getInputProps("password")}
                    />
                    <PasswordInput
                      size="md"
                      required
                      mt={16}
                      label="Confirm Password"
                      {...form.getInputProps("confirm_password")}
                    />

                    <div className="flex gap-3 items-center mt-6">
                      <Button
                        size="md"
                        type="submit"
                        className="w-1/3 sm:w-1/3 bg-primary text-white"
                      >
                        Submit
                      </Button>
                      <div className="text-sm text-[#808080]">step 2 of 2</div>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Register;
