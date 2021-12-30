import { useBreakpointValue, Skeleton, Box, Text, Heading } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { api } from "../../service/api";
import { bg } from "../../theme/effects/bg";

interface InvertersListItemProps {
  inverter: Plant;
  index: number;
};

function InvertersListItem({ inverter, index }: InvertersListItemProps) {
  const isWideOrNormalVersion = useBreakpointValue({
    base: false,
    xl: true,
    lg: true,
    md: true
  });

  const { data, isLoading, isSuccess } = useQuery<Inverter>(`${inverter.id} / ${inverter.model}`, async() => {
    const res = await api.get(`/${inverter.model}/${inverter.id}`);
    return {
      ...inverter,
      ...res.data
    } as Inverter;
  }, {
    staleTime: 1000 * 60,
    refetchInterval: 1000 * 60 * 5,
  });

  if(isLoading || !isSuccess) {
    return <Skeleton/>;
  };

  return (
    <Box
      { ...bg({}) as any }
    >
      { isWideOrNormalVersion && <Text>{data.id} / {data.model}</Text> }
      <Heading>{data.name}</Heading>
      <Text>{data.energy}</Text>
      <Text>{data.power}</Text>
    </Box>
  );
};

export { InvertersListItem };