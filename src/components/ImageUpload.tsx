import { useDropzone } from "react-dropzone";
import UploadIcon from "../assets/svgs/upload.svg";
import ButtonIcon from "../assets/svgs/Icon button.svg";

const ImageUpload = () => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
  });
  return (
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
              <div>Drag here or click the button below to upload </div>
              <button className="flex justify-center mx-auto text-sm items-center gap-3 px-4 py-2 text-white rounded-md my-4 bg-primary">
                <img src={ButtonIcon} alt="" />
                <div>Choose file</div>
              </button>
            </div>
            <div>Maximum upload size: 10MB (.jpg)</div>
          </div>
        )}
        {acceptedFiles.length !== 0 && (
          <div className="flex items-center gap-1">{acceptedFiles[0].name}</div>
        )}
      </div>
    </div>
  );
};

export default ImageUpload;
