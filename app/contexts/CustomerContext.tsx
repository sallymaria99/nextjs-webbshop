"use client";

import { CartItem } from "@/data";
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
  orderSummary: CartItem[];
  setCustomer: Dispatch<SetStateAction<Customer | undefined>>;
  setOrderSummary: Dispatch<SetStateAction<CartItem[]>>;
  addItemsToOrderSummary: (cartItems: CartItem[]) => void;
};

const CustomerContext = createContext<Context>({} as Context);

export function CustomerProvider({ children }: { children: React.ReactNode }) {
  const [customer, setCustomer] = useState<Customer>();
  const [orderSummary, setOrderSummary] = useState<CartItem[]>([]);

  const addItemsToOrderSummary = (cartItems: CartItem[]) => {
    setOrderSummary(cartItems);
  };

  /*   const orderContext = useContext(CustomerContext);
  useEffect(() => {
    orderContext.setOrderSummary(orderSummary);
    setOrderSummary([]);
  }, [orderSummary, orderContext]);
 */
  return (
    <CustomerContext.Provider
      value={{
        customer,
        orderSummary,
        setCustomer,
        setOrderSummary,
        addItemsToOrderSummary,
      }}
    >
      {children}
    </CustomerContext.Provider>
  );
}

export function useCustomer() {
  return useContext(CustomerContext);
}
