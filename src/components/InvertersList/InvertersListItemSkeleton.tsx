import { Box, Skeleton, SkeletonText, useBreakpointValue } from "@chakra-ui/react";
import { bg } from "../../theme/effects/bg";

function InvertersListItemSkeleton() {
  return (
    <Box
      { ...bg({}) as any }
      px={5}
    >
      <SkeletonText
        w="60%"
        opacity={0.4}
        noOfLines={1}
        borderRadius={10}
        my={5}
      />
      <SkeletonText
        w="80%"
        lineHeight={5}
        noOfLines={1}
        opacity={0.5}
        borderRadius={4}
        mb={5}
      />
      <SkeletonText
        w="100%"
        opacity={0.3}
        noOfLines={5}
        borderRadius={10}
        mb={5}
      />
    </Box>
  );
};

export { InvertersListItemSkeleton };