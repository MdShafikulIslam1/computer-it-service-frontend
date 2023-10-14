import { ReactNode } from "react";
import { Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";

interface IInput {
  name: string;
  type?: string;
  size?: "large" | "small";
  placeHolder?: string;
  value?: string | string[] | undefined;
  id?: string;
  validation?: string;
  label?: string;
  prefix?: ReactNode;
  allowClear?: boolean;
  required?: boolean;
}

const FormInput = ({
  name,
  type,
  size = "large",
  placeHolder,
  value,
  label,
  prefix,
  allowClear,
  required = false,
}: IInput) => {
  const { control } = useFormContext();
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
        render={({ field }) =>
          type === "password" ? (
            <Input.Password
              type={type}
              size={size}
              {...field}
              value={value ? value : field.value}
              prefix={prefix}
              placeholder={placeHolder}
              allowClear={allowClear}
            />
          ) : (
            <Input
              type={type}
              size={size}
              {...field}
              value={value ? value : field.value}
              prefix={prefix}
              placeholder={placeHolder}
              allowClear={allowClear}
            />
          )
        }
      />
    </>
  );
};

export default FormInput;
