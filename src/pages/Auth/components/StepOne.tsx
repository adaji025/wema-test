import { Button, NumberInput, Select, TextInput } from "@mantine/core";
import ImageUpload from "../../../components/ImageUpload";

type IProps = {
  setStep: React.Dispatch<React.SetStateAction<boolean>>;
};

const StepOne = ({ setStep }: IProps) => {
  return (
    <div>
      <h5 className="text-primary mt-5 font-medium">Business Information</h5>
      <TextInput required mt={16} size="md" label="Business Name" />
      <TextInput required mt={16} size="md" label="Business Email Address" />
      <TextInput required mt={16} size="md" label="Business Phone Number" />
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
      />

      <NumberInput required mt={16} size="md" hideControls label="Account No" />

      <ImageUpload />

      <div className="flex gap-3 items-center mt-6">
        <Button
          size="md"
          className="w-1/3 sm:w-1/3 bg-primary text-white"
          onClick={() => setStep(true)}
        >
          Next
        </Button>
        <div className="text-sm text-[#808080]">step 1 of 2</div>
      </div>
    </div>
  );
};

export default StepOne;
