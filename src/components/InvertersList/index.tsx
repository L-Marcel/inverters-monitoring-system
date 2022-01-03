import { SimpleGrid, useBreakpointValue } from "@chakra-ui/react";
import { InvertersListItem } from "./InvertersListItem";

interface InvertersListProps {
  inverters: {
    plants: Plant[];
  };
};

function InvertersList({
  inverters
}: InvertersListProps) {
  const numberOfColumns = useBreakpointValue({
    base: 1,
    xl: 3,
    lg: 3,
    md: 2
  });

  const numberOfRows = Math.round(
    inverters?.plants?.length / numberOfColumns
  ) ?? 0;

  return (
    <SimpleGrid
      spacing={5}
      columns={numberOfColumns}
    >
      {
        inverters?.plants?.map((i, index) => {
          return (
            <InvertersListItem
              key={`${i.id} / ${i.model}`}
              inverter={i}
              index={index}
            />
          );
        })
      }
    </SimpleGrid>
  );
};

export { InvertersList };