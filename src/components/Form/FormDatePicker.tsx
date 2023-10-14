/* eslint-disable react-hooks/exhaustive-deps */
import type { DatePickerProps } from "antd";
import { DatePicker, Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";
import dayjs, { Dayjs } from "dayjs";
import { useEffect, useState } from "react";

interface IFormDatePicker {
  onChange?: (value1: Dayjs | null, value2: string) => void;
  name: string;
  size?: "large" | "small";
  label?: string;
  required?: boolean;
}

const FormDatePicker = ({
  name,
  size = "large",
  label,
  onChange,
  required = false,
}: IFormDatePicker) => {
  // const [initDate, setInitDate] = useState(Date.now());
  // console.log(new Date(Date.now()));

  // console.log(Date.now());
  const { control, setValue } = useFormContext();
  // useEffect(() => {
  //   setValue(name, initDate);
  // }, []);
  const handleOnChange: DatePickerProps["onChange"] = (date, dateString) => {
    onChange ? onChange(date, dateString) : "";
    setValue(name, date);
  };
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
          <DatePicker
            defaultValue={dayjs(field.value) || Date.now()}
            size={size}
            onChange={handleOnChange}
            style={{
              width: "100%",
            }}
          />
        )}
      />
    </>
  );
};

export default FormDatePicker;
