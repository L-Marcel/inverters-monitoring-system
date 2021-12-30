import { Box, Button, Progress, useToast } from "@chakra-ui/react";
import { bg } from "../../theme/effects/bg";
import { Input } from "../Input";
import { FaUserCircle } from "react-icons/fa";
import { Si1Password } from "react-icons/si"; 
import { ChangeEvent, useEffect, useState } from "react";
import { useLogin } from "../../hook/useLogin";
import { useIsLoading } from "../../hook/useIsLoading";

function LoginBox() {
  const isLoading = useIsLoading();
  const login = useLogin();
  const toast = useToast();
  const [credentials, setCredentials] = useState({
    login: "",
    password: "" 
  });

  function onChangeCredentials(e: ChangeEvent<HTMLInputElement>) {
    setCredentials(c => {
      return {
        ...c,
        [e.target.name]: e.target.value
      };
    });
  };

  return (
    <>
      { isLoading && <Progress
        position="absolute"
        top={0}
        w="100%"
        size="sm" 
        isIndeterminate
        colorScheme="primary"
      /> }
      <Box
        { ...bg({ bg: "whitesmoke" }) as any }
        w={[300, 350]}
        p={10}
      >
        <Input
          name="login"
          value={credentials.login}
          onChange={onChangeCredentials}
          placeholder="Usuário"
          icon={FaUserCircle}
          mb={4}
        />
        <Input
          name="password"
          value={credentials.password}
          onChange={onChangeCredentials}
          placeholder="Senha"
          type="password"
          icon={Si1Password}
          mb={4}
        />
        <Button
          onClick={() => login(credentials, (message) => {
            if(!toast.isActive(message)) {
              toast({
                id: message,
                status: "warning",
                variant: "left-accent",
                title: message,
                position: "top-right",
                duration: 5000
              })
            };
          })}
          bg="primary.400"
          color="white"
          disabled={isLoading}
          _hover={{
            bg: "primary.500"
          }}
        >
          Entrar
        </Button>
      </Box>
    </>
  );
};

export { LoginBox };