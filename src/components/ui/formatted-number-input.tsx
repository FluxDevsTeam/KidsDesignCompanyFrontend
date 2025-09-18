import React from "react";
import { Input } from "@/components/ui/input";

export interface FormattedNumberInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "onChange" | "type"> {
  value: string;
  onValueChange: (value: string) => void;
}

const formatNumberWithCommas = (val: string) => {
  if (!val) return "";
  const parts = val.split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
};

const sanitize = (val: string) => {
  const raw = (val || "").replace(/,/g, "");
  return raw.replace(/[^0-9.]/g, "").replace(/(\..*)\./g, "$1");
};

export const FormattedNumberInput: React.FC<FormattedNumberInputProps> = ({
  value,
  onValueChange,
  ...rest
}) => {
  return (
    <Input
      type="text"
      value={formatNumberWithCommas(value)}
      onChange={(e) => onValueChange(sanitize(e.target.value))}
      {...rest}
    />
  );
};

export default FormattedNumberInput;


