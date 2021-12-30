import { useRouter } from "next/router";
import { ReactNode, useCallback, useEffect, useState } from "react";
import { createContext } from "use-context-selector";
import { api } from "../service/api";

interface AppProviderProps {
  children: ReactNode;
};

export const appContext = createContext({} as AppContext);

function AppProvider ({ children }: AppProviderProps) {
  const router = useRouter();
  const [user, setUser] = useState<User>();
  const [isLoading, setIsLoading] = useState(true);

  const checkIsAuth = useCallback(() => {
    if(!user) {
      const token = localStorage.getItem("ims@auth");
      if(token) {
        api.defaults.headers["authorization"] = "Bearer " + token;
        token && api.get("/user").then(({ data }) => { 
          setUser(data.user);
          setIsLoading(false);
          router.asPath === "/" && router.push("/dashboard");
        }).catch(() => {
          setIsLoading(false);
          router.asPath !== "/" && router.push("/");
        });
      } else {
        setIsLoading(false);
        router.asPath !== "/" && router.push("/");
      };
    };
  }, [setIsLoading, setUser, user]);

  const login = useCallback(async(credentials: Credentials, onError: (message: string) => void) => {
    await api.post("/login", credentials).then(({ data }) => {
      api.defaults.headers["authorization"] = "Bearer " + data.token;
      localStorage.setItem("ims@auth", data.token);
      setUser(data.user);
      router.asPath === "/" && router.push("/dashboard");
    }).catch(err => {
      onError(err.response.data.message);
    });
  }, [setUser]);

  useEffect(() => {

  }, []);

  return (
    <appContext.Provider 
      value={{
        user,
        login,
        checkIsAuth,
        isLoading
      }}
    >
      {children}
    </appContext.Provider>
  );
};

export { AppProvider };