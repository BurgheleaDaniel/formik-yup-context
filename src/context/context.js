import React, { createContext, useEffect } from "react";
import { useImmerReducer } from "use-immer";
import reducer from "./reducers";
import TYPES from "./types";

const initialState = {
  supplierList: JSON.parse(localStorage.getItem("supplierList")) || [],
  fetchSupplier: false,
  status: 0, // 0:loading, 1:success, 2:error
};

const SupplierContext = createContext();

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useImmerReducer(reducer, initialState);

  const fetchSupplierList = () => {
    dispatch({
      type: TYPES.FETCH_SUPPLIER_SUCCESS,
      payload: initialState.supplierList,
    });
  };

  const storeSupplierList = () => {
    localStorage.setItem("supplierList", JSON.stringify(state.supplierList));
  };

  useEffect(fetchSupplierList, [state.fetchSupplier]);

  useEffect(storeSupplierList, [state.supplierList]);

  return (
    <SupplierContext.Provider value={{ state, dispatch }}>
      {children}
    </SupplierContext.Provider>
  );
};

export { SupplierContext, ContextProvider };
