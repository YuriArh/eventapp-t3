import { Image } from "@nextui-org/image";
import { useState } from "react";
import { DropzoneOptions, useDropzone } from "react-dropzone";

interface IProps extends DropzoneOptions {
  multiple?: boolean;
  onChange?: (files: File[]) => void;
}

/**
 * A simple dropzone component to drop files into.
 *
 * @param {{ multiple?: boolean, onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void }}
 *   - `multiple`: Whether to allow multiple file selection.
 *   - `onChange`: Change event handler when files are dropped.
 * @returns {JSX.Element} A JSX element representing the dropzone.
 */
export const Dropzone = ({ multiple, onChange, ...rest }: IProps) => {
  const [preview, setPreview] = useState();
  const {
    getRootProps,
    getInputProps,
    isDragAccept,
    isDragReject,
    isDragActive,
  } = useDropzone({
    multiple,
    onDrop: (acceptedFiles: File[]) => {
      const urlImage = URL.createObjectURL(acceptedFiles[0]);

      setPreview(urlImage);
      onChange?.(acceptedFiles);
    },
    ...rest,
  });

  return (
    <div {...getRootProps({ className: "Dropzone" })}>
      <input {...getInputProps()} />
      <Image src={preview} width={150} height={150} />
      {isDragAccept ? <p>All files will be accepted</p> : null}
      {isDragReject ? <p>Some files will be rejected</p> : null}
      {!isDragActive ? <p>Drop some files here ...</p> : null}
    </div>
  );
};
