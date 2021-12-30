import { Table, Tbody, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";
import { bg } from "../../theme/effects/bg";
import { InverterTableRow } from "./InverterTableRow";
import style from "../../theme/scss/table.module.scss";

interface InvertersTableProps {
  inverters: {
    plants: Plant[];
  };
};

function InvertersTable({
  inverters
}: InvertersTableProps) {
  const isWideOrNormalVersion = useBreakpointValue({
    base: false,
    xl: true,
    lg: true,
    md: true
  });

  return (
    <Table
      size='sm'
      className={style.table}
      { ...bg({ opacity: 1 }) as any }
      __css={{
        borderSpacing: [0, 5],
        "& td": {
          border: "none"
        },
      }}
    >
      <Thead>
        <Tr>
          { isWideOrNormalVersion && <Th>ID - Marca</Th> }
          <Th>Nome</Th>
          <Th isNumeric>Produção</Th>
          <Th isNumeric>Potência</Th>
        </Tr>
      </Thead>
      <Tbody h={200}>
        {
          inverters?.plants?.map((i, index) => {
            return (
              <InverterTableRow
                key={`${i.id} / ${i.model}`} 
                index={index}
                inverter={i}
              />
            );
          })
        }
      </Tbody>
    </Table>
  );
};

export { InvertersTable };