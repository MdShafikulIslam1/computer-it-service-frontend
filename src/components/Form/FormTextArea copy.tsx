import { ReactNode } from "react";
import { Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";
import { getErrorMessageByPathname } from "@/utils/schemaValidation";
interface IInput {
  name: string;
  placeHolder?: string;
  value?: string | string[] | undefined;
  label?: string;
  allowClear?: boolean;
  required?:boolean;
}

const FormTextArea = ({
  name,
  placeHolder,
  value,
  label,
  allowClear = true,
  required =false
}: IInput) => {
  const {
    control,
  } = useFormContext();
  return (
    <>
      {label ? label : null}
      {required ? (
        <span className="text-green-500"> * </span>
      ) : (
        <span className="text-green-500">(optional)</span>
      )}
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Input.TextArea
            {...field}
            name={name}
            showCount
            maxLength={100}
            style={{ height: 120, marginBottom: 24 }}
            // onChange={onChange}
            placeholder={placeHolder}
            allowClear
          />
        )}
      />
      <small style={{ color: "red" }}>{errorMessages}</small>
    </>
  );
};

export default FormTextArea;
