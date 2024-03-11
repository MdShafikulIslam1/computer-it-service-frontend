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
  disabled?: boolean;
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
  disabled = false,
}: IInput) => {
  const { control } = useFormContext();
  return (
    <>
      {label ? (
        <p className="mb-1">
          {label}
          {required && <span className="text-green-500"> * </span>}{" "}
        </p>
      ) : null}

      <Controller
        control={control}
        name={name}
        render={({ field }) =>
          type === "password" ? (
            <Input.Password
              required={required}
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
              required={required}
              type={type}
              size={size}
              {...field}
              value={value ? value : field.value}
              prefix={prefix}
              placeholder={placeHolder}
              allowClear={allowClear}
              disabled={disabled}
            />
          )
        }
      />
    </>
  );
};

export default FormInput;
