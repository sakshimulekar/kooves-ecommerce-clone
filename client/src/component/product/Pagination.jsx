import { Box, Button, Text, Flex } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Pagination = ({ setPage, page, totalPages }) => {
  const createPageButtons = () => {
    const buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <Button

          key={i}
          onClick={() => setPage(i)}
          colorScheme={page === i ? 'blue' : 'gray'}
          variant={page === i ? 'solid' : 'outline'}
        >
          {i}
        </Button>
      );
    }
    return buttons;
  };

  return (
    <Flex gap={5}>
      <Button onClick={() => setPage((p) => p - 1)} isDisabled={page === 1}>
        PREV
      </Button>
      {createPageButtons()}
      <Button
        onClick={() => setPage((p) => p + 1)}
        isDisabled={page === totalPages}
      >
        NEXT
      </Button>
    </Flex>
  );
};

export default Pagination;

