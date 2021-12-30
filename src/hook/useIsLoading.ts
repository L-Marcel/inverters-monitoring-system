import { useContextSelector } from "use-context-selector";
import { appContext } from "../context/AppProvider";

function useIsLoading() {
  return useContextSelector(appContext, c => c.isLoading);
};

export { useIsLoading };