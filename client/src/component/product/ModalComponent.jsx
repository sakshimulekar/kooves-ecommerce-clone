// ModalComponent.js
import React from 'react';
import { Box, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody } from '@chakra-ui/react';

const ModalComponent = ({ closeModal }) => {
  return (
    <Modal isOpen={true} onClose={closeModal}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {/* Add your modal content here */}
          <p>Modal Content Goes Here</p>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalComponent;
