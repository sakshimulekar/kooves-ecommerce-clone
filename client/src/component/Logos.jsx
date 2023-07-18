import React from 'react';
import { Card, Flex, Image } from '@chakra-ui/react';
import koov from "../Assest/koov_brand_logo.avif";
import arkiv from "../Assest/arkiv_logo.avif";
import kangol from "../Assest/kangol_logo.avif";
import keen from "../Assest/keen_logo.avif";
import koovs from "../Assest/koovs_logo.avif";
import essential from "../Assest/essentials_logo.avif";
import conture from "../Assest/conture_logo.avif";
import coma from "../Assest/coma_logo.avif";
import brand from "../Assest/brand_logo.avif";
import Ball from "../Assest/Ball_logo.avif";
import publi from "../Assest/publi_logo.avif";

let images = [koov, arkiv, kangol, keen, koovs, essential, conture, coma, brand, Ball, publi];

const Logos = () => {
  return (
    <div>
      <Card>
        <Flex wrap="wrap" justify="center" rowGap={20} columnGap={10}>
          {images?.map((e, index) => {
            return (
              <Image
                key={index}
                objectFit="cover"
                maxW={{ base: '100%', sm: '200px' }}
                src={e}
                alt='Caffe Latte'
              />
            );
          })}
        </Flex>
      </Card>
    </div>
  );
};

export default Logos;
