import { createContext, useContext, useState } from "react";
const Ctx = createContext();
export function CtxProvider({ children }) {
  const [modalStatus, setModalStatus] = useState({ status: false, jsx: null });
  const [activeTab, setActiveTab] = useState("Categories");
  const updateActiveTab = (tab) => {
    setActiveTab(tab);
  };
  const updateModalStatus = (status, jsx) => {
    setModalStatus({ ...status, jsx, status });
  };
  return (
    <Ctx.Provider
      value={{ activeTab, updateActiveTab, modalStatus, updateModalStatus }}
    >
      {children}
    </Ctx.Provider>
  );
}
export function useCtx() {
  return useContext(Ctx);
}
