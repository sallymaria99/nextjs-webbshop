"use client";

import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { Customer } from "../checkout/CustomerSchema";

type Context = {
  customer?: Customer;
  setCustomer: Dispatch<SetStateAction<Customer | undefined>>;
};

const CustomerContext = createContext<Context>({} as Context);

export function CustomerProvider({ children }: { children: React.ReactNode }) {
  let [customer, setCustomer] = useState<Customer>();

  return (
    <CustomerContext.Provider value={{ customer, setCustomer }}>
      {children}
    </CustomerContext.Provider>
  );
}

export function useCustomer() {
  return useContext(CustomerContext);
}
