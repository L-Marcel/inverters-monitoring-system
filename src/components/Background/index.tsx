import { Box, Image } from "@chakra-ui/react";

function Background() {
  return (
    <Box
      position="absolute"
      bottom={0}
      left={0}
      w="100vw"
      h="100vh"
      zIndex={-20}
    >
      <Image 
        position="absolute"
        bottom="-18px"
        left={0}
        src="/background.png"
        w={["auto", "auto", "auto", "60%"]}
        h={["35%", "45%", "50%", "80%"]}
        zIndex={-20}
      />
    </Box>
  );
};

export { Background };