import { useContextSelector } from "use-context-selector";
import { appContext } from "../context/AppProvider";

function useToken() {
  const token = useContextSelector(appContext, c => c.token);
  const setToken = useContextSelector(appContext, c => c.setToken);
  
  return {
    token,
    setToken
  };
};

export { useToken };