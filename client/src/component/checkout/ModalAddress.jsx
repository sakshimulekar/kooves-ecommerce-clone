import React from "react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody } from "@chakra-ui/react";
import AddressForm from "./AddressForm"; // Import your existing AddressForm component

function ModalAddress({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={'xl'}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader fontSize={'2xl'} fontWeight={'bold'}>Shipping Address</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <AddressForm/> {/* Render your AddressForm component here */}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default ModalAddress;
