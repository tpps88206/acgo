import React from 'react';

import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react';

import ErrorAnimation from './ErrorAnimation.jsx';

const ErrorModal = ({ isOpen, onClose }) => {
  return (
    <Modal size="xs" isOpen={isOpen} onClose={onClose} placement="center">
      <ModalContent>
        {onClose => (
          <>
            <ModalHeader className="flex flex-col gap-1">錯誤</ModalHeader>
            <ModalBody>
              <ErrorAnimation />
              <p>請聯繫開發人員</p>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onPress={onClose}>
                好
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ErrorModal;
