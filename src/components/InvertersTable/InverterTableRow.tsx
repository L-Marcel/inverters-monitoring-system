import { Tr, Td, useBreakpointValue } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { api } from "../../service/api";
import style from "../../theme/scss/table.module.scss";

interface InverterTableRowProps {
  inverter: Plant;
  index: number;
};

function InverterTableRow({ inverter, index }: InverterTableRowProps) {
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
    return null;
  };

  return (
    <Tr className={(index % 2) === 0? style.alt:""}>
      { isWideOrNormalVersion && <Td>{data.id} / {data.model}</Td> }
      <Td>{data.name}</Td>
      <Td isNumeric>{data.energy}</Td>
      <Td isNumeric>{data.power}</Td>
    </Tr>
  );
};

export { InverterTableRow };