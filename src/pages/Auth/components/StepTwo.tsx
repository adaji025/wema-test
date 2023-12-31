import { Button, PasswordInput, Select, TextInput } from "@mantine/core";
import { stateArrays } from "../../../utils/state";

const StepTwo = () => {
  return (
    <div>
      <h5 className="text-primary mt-5 font-medium">Business Address</h5>
      <div className="flex gap-3">
        <TextInput
          required
          mt={16}
          size="md"
          label="House Number"
          className="w-1/3"
        />
        <TextInput
          required
          mt={16}
          size="md"
          label="Street"
          className="flex-1"
        />
      </div>
      <div className="flex gap-3">
        <TextInput required mt={16} size="md" label="City" className="w-1/2" />
        <Select
          required
          mt={16}
          size="md"
          label="State"
          className="flex-1"
          data={stateArrays.map((state) => state)}
          searchable
        />
      </div>

      <h5 className="text-primary mt-5 font-medium">
        Contact Person Information
      </h5>

      <TextInput required mt={16} size="md" label="Contact Name" />
      <TextInput
        required
        mt={16}
        size="md"
        type="email"
        label="Contact Email"
      />

      <h5 className="text-primary mt-5 font-medium">Password</h5>
      <PasswordInput size="md" required mt={16} label="Password" />
      <PasswordInput size="md" required mt={16} label="Confirm Password" />

      <div className="flex gap-3 items-center mt-6">
        <Button size="md" className="w-1/3 sm:w-1/3 bg-primary text-white">
          Submit
        </Button>
        <div className="text-sm text-[#808080]">step 2 of 2</div>
      </div>
    </div>
  );
};

export default StepTwo;
