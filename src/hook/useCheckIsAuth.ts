import { useContextSelector } from "use-context-selector";
import { appContext } from "../context/AppProvider";

function useCheckIsAuth() {
  return useContextSelector(appContext, c => c.checkIsAuth);
};

export { useCheckIsAuth };