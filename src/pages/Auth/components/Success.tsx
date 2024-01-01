import { useNavigate } from "react-router-dom";
import { Modal, Button } from "@mantine/core";
import PendingIcon from "../../../assets/svgs/Icon-Pending.svg";

type Props = {
  opened: boolean;
  close: () => void;
};

const Success = ({ close, opened }: Props) => {
  const navigate = useNavigate();
  return (
    <Modal centered opened={opened} onClose={close}>
      <div className="p-5">
        <div className="flex justify-center">
          <img src={PendingIcon} alt="" />
        </div>
        <h2 className="text-center mt-5 font-bold text-2xl">Pending</h2>
        <div className="text-sm text-center mt-5 w-5/6 mx-auto">
          Your registration is awaiting approval from our partnership team
        </div>
        <div className="flex gap-5 mb-5 mt-5 justify-center">
          <Button
            size="md"
            className="bg-primary flex-1"
            onClick={() => navigate("/")}
          >
            Done
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default Success;
