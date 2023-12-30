import { showNotification } from "@mantine/notifications";
import { useNavigate } from "react-router-dom";

const useNotification = () => {
  const navigate = useNavigate();

  const logoutUser = () => {
    showNotification({
      title: "Error",
      message: "User logged out, Login in to continue 😑",
      color: "red",
    });
    localStorage.clear();
    navigate("/");
  };

  const handleError = (error: any) => {
    if (!error.response) {
      return showNotification({
        title: "Error",
        message: "Network Error, Please check your connection",
        color: "red",
      });
    }

    if (error.response.data.status === 401) {
      return showNotification({
        title: "Error",
        message: "Unathorized, Please login",
        color: "red",
      });
    }

    if (error?.response?.status === 500) {
      return showNotification({
        title: "Error",
        message: `${
          error?.response?.data?.message ?? "An error occured, please try again"
        } 🤥`,
        color: "red",
      });
    }

    if (typeof error?.response?.data?.errors === "object" && error !== null) {
      for (const [_, value] of Object?.entries(error?.response?.data?.errors)) {
        if (typeof value === "string") {
          showNotification({
            message: `${value} 🤥`,
            color: "red",
            title: "Error",
          });
        }
      }
    } else {
      showNotification({
        message: `${error?.response?.data?.message} 🤥`,
        color: "red",
        title: "Error",
      });
    }
  };
  return {
    handleError,
    logoutUser,
  };
};

export default useNotification;
