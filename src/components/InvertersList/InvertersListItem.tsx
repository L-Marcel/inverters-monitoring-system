import { useBreakpointValue, Skeleton, Box, Text, Heading } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { api } from "../../service/api";
import { bg } from "../../theme/effects/bg";
import { InvertersListItemSkeleton } from "./InvertersListItemSkeleton";

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
    return <InvertersListItemSkeleton/>;
  };

  const unity = "KW";
  const power = data.power > 1000? data.power/1000:data.power;

  return (
    <Box
      { ...bg({ hoverEffect: true }) as any }
      p={5}
    >
      { isWideOrNormalVersion && <Text
        fontWeight="semibold"
      >
        {data.id} / {data.model}
      </Text> }
      <Heading
        color="primary.500"
        fontSize="1.8rem"
        textTransform="uppercase"
        mb={1}
      >
        {data.name}
      </Heading>
      <Text>Energia: {Math.round(data.energy/1000)} KW/H</Text>
      <Text>Potência: {power} {unity}</Text>
    </Box>
  );
};

export { InvertersListItem };