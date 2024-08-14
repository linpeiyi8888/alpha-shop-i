import { createContext } from "react";

export const FormContext = createContext([
  {
    name: "name",
    label: "持卡人姓名",
    defaultValue: "John Doe",
    dataValue: "",
  },
  {
    name: "cardNumber",
    label: "卡號",
    defaultValue: "1111 2222 3333 4444",
    dataValue: "",
  },
  {
    name: "validDate",
    label: "有效期限",
    defaultValue: "MM/YY",
    dataValue: "",
  },
  {
    name: "code",
    label: "CVC / CCV",
    defaultValue: 123,
    dataValue: "",
  },
]);
