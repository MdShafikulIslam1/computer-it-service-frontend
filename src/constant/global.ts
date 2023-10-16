import { ISelectOptions } from "@/components/Form/FormSelectField";

export const serviceStatusOptions: ISelectOptions[] = [
  {
    label: "UPCOMING",
    value: "UPCOMING",
  },
  {
    label: "AVAILABLE",
    value: "AVAILABLE",
  },
  {
    label: "NOT_AVAILABLE",
    value: "NOT_AVAILABLE",
  },
];

export const bookingOptions: ISelectOptions[] = [
  {
    label: "PENDING",
    value: "PENDING",
  },
  {
    label: "ACCEPT",
    value: "ACCEPT",
  },
  {
    label: "REJECT",
    value: "REJECT",
  },
  {
    label: "CANCEL",
    value: "CANCEL",
  },
];
