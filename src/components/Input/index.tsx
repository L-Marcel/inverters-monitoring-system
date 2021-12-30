import { Button, Input as ChakraInput, InputGroup, InputLeftElement, InputProps as ChakraInputProps, InputRightElement } from "@chakra-ui/react";
import { useState } from "react";
import { IconType } from "react-icons";
import styles from "../../theme/scss/input.module.scss";

interface InputProps extends ChakraInputProps {
  icon: IconType;
};

function Input({ icon: Icon, ...rest }: InputProps ) {
  const [show, setShow] = useState(false);
  const isPassword = rest.type === "password";

  return (
    <InputGroup className={styles.input}>
      <InputLeftElement
        pointerEvents="none"
        children={<Icon size={22} color="currentColor"/>}
      />
      <ChakraInput
        { ...rest }
        h={10}
        w="100%"
        bg="white"
        borderWidth={2}
        pr={isPassword? "4.5rem": null}
        type={isPassword? (show ? "text":"password"):rest.type}
      />
      { rest.type === "password" && <InputRightElement width="4.5rem">
          <Button h="1.75rem" px="2.5rem" mr={5} size="sm" onClick={() => setShow(s => !s)}>
            {show ? "Esconder" : "Mostrar"}
          </Button>
        </InputRightElement> }
    </InputGroup>
  );
};

export { Input };