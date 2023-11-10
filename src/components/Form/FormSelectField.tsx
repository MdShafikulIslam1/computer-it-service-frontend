import { Select } from "antd";
import { Controller, useFormContext } from "react-hook-form";
export type ISelectOptions = {
  label: string;
  value: string;
};
interface IInput {
  name: string;
  size?: "large" | "small";
  placeHolder?: string;
  value?: string | string[] | undefined;
  label?: string;
  defaultValue?: string;
  mode?: "multiple";
  options: ISelectOptions[];
  handleChange?: (el: any) => void;
  required?: boolean;
}

const FormSelectField = ({
  name,
  mode,
  size = "large",
  placeHolder = "select",
  value,
  defaultValue,
  label,
  options,
  handleChange,
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
        render={({ field: { onChange, value } }) => (
          <Select
            style={{
              width: "100%",
            }}
            mode={mode}
            defaultValue={defaultValue}
            value={value}
            size={size}
            onChange={handleChange ? handleChange : onChange}
            showSearch
            placeholder={placeHolder}
            options={options}
          />
        )}
      />
    </>
  );
};

export default FormSelectField;
