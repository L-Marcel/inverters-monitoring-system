import { Box, Heading, Image } from "@chakra-ui/react";
import Head from "next/head";
import { Background } from "../components/Background";
import { LoginBox } from "../components/LoginBox";

function Home() {
  return (
    <>
      <Head>
        <title>LLS/SMI - Login</title>
      </Head>
      <Box
        display="flex"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        minH="100vh"
        w="100vw"
      >
        <Image 
          maxH="38vh" 
          maxW="38vw" 
          src="/logo.png"
          my={["-20px", "-20px", "-20px", "-35px"]}
        />
        <Heading
          fontSize={[18, 20, 24, 24, 26]}
          fontWeight="light"
          wordBreak="break-word"
          maxW={["70%", "50%", "40%", "30%"]}
          textAlign="center"
          mb={10}
        >
          Sistema de Monitoramento de Inversores
        </Heading>
        <LoginBox/>
      </Box>
      <Background/>
    </>
  );
};

export default Home;