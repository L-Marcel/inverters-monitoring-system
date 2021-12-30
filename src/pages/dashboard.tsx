import { Box, Progress } from "@chakra-ui/react";
import Head from "next/head";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { Background } from "../components/Background";
import { api } from "../service/api";
import { useCheckIsAuth } from "../hook/useCheckIsAuth";
import { InvertersList } from "../components/InvertersList";

function Dashboard() {
  const checkIsAuth = useCheckIsAuth();
  const { data: inverters, isFetching, isLoading } = useQuery("inverters", async() => {
    const res = await api.get("/inverters");
    return res.data;
  }, {
    refetchInterval: 1000 * 60,
  });

  useEffect(() => {
    checkIsAuth();
  }, []);

  return (
    <>
      <Head>
        <title>LLS/SMI - Dashboard</title>
      </Head>
      { (isLoading || isFetching) && <Progress
        position="absolute"
        top={0}
        w="100%"
        size="sm" 
        isIndeterminate
        colorScheme="primary"
      /> }
      <Box
        display="flex"
        flexDir="column"
        p={["5px", "4rem"]}
        maxH="100vh"
        overflowY="auto"
        overflowX="auto"
      >
        <InvertersList 
          inverters={inverters} 
        />
      </Box>
      <Background/>
    </>
  );
};

export default Dashboard;