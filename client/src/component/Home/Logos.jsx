import React from 'react';
import { Card, Flex, Image,Box } from '@chakra-ui/react';
import koov from "../../Assest/koov_brand_logo.avif";
import arkiv from "../../Assest/arkiv_logo.avif";
import kangol from "../../Assest/kangol_logo.avif";
import keen from "../../Assest/keen_logo.avif";
import koovs from "../../Assest/koovs_logo.avif";
import essential from "../../Assest/essentials_logo.avif";
import conture from "../../Assest/conture_logo.avif";
import coma from "../../Assest/coma_logo.avif";
import brand from "../../Assest/brand_logo.avif";
import Ball from "../../Assest/Ball_logo.avif";
import publi from "../../Assest/publi_logo.avif";

let images = [koov, arkiv, kangol, keen, koovs, essential, conture, coma, brand, Ball, publi];

const Logos = () => {
  const isMobile = window.innerWidth < 768; // Define a breakpoint for mobile
  const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024; // Define a breakpoint for tablet
  return (
    <Box >
      {(isMobile && !isTablet) && (
        <Card p={10}   m={'auto'}>
        <Flex wrap="wrap" justify="center" rowGap={5} columnGap={5}>
          {images?.map((e, index) => {
            return (
              <Image
                key={index}
                objectFit="cover"
                w={10}
                //maxW={{ base: '100%', sm: '200px' }}
                src={e}
                alt='Caffe Latte'
                boxShadow={'md'}
              />
            );
          })}
        </Flex>
      </Card>
      )}

      {(!isMobile && isTablet) && (
            <Card p={10}   m={'auto'}>
            <Flex wrap="wrap" justify="center" rowGap={5} columnGap={5}>
              {images?.map((e, index) => {
                return (
                  <Image
                    key={index}
                    objectFit="cover"
                    w={10}
                    //maxW={{ base: '100%', sm: '200px' }}
                    src={e}
                    alt='Caffe Latte'
                    boxShadow={'md'}
                  />
                );
              })}
            </Flex>
          </Card>
      )}

      {(!isMobile && !isTablet) && (
          <Card p={10}  w='80%' m={'auto'}>
          <Flex wrap="wrap" justify="center" rowGap={20} columnGap={10}>
            {images?.map((e, index) => {
              return (
                <Image
                  key={index}
                  objectFit="cover"
                  w={100}
                  //maxW={{ base: '100%', sm: '200px' }}
                  src={e}
                  alt='Caffe Latte'
                  boxShadow={'md'}
                />
              );
            })}
          </Flex>
        </Card>
      )}
      
    </Box>
  );
};

export default Logos;
