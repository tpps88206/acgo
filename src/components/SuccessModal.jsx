import React from 'react';

import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react';

import SuccessAnimation from './SuccessAnimation.jsx';

const SuccessModal = ({ isOpen, onClose }) => {
  return (
    <Modal size="xs" isOpen={isOpen} onClose={onClose} placement="center">
      <ModalContent>
        {onClose => (
          <>
            <ModalHeader className="flex flex-col gap-1">新增成功</ModalHeader>
            <ModalBody>
              <SuccessAnimation />
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onPress={onClose}>
                OK
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default SuccessModal;
