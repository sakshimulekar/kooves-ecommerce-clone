import { Box, Center, Heading ,Image} from "@chakra-ui/react";
import React from "react";


function UnderConstruction() {
  return (
    <>
      <Center mt={'10%'}>
        <Image
          src="https://github.com/shubhamkr2/UploadImages/blob/main/undercunstruction.gif?raw=true"
          alt="error"
        />
      </Center>
      <Center>
      <Heading color="red">Error 404, this page is under construction</Heading>
      </Center>
      <Center>
      <Heading color="green" pb="40px">
        We are working on it...
      </Heading>
      </Center>
    </>
  );
}

export { UnderConstruction };