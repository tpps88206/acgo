import React, { useEffect } from 'react';

import { Modal, ModalBody, ModalContent, ModalHeader } from '@nextui-org/react';

import SuccessAnimation from './SuccessAnimation.jsx';

const SuccessModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <Modal size="xs" isOpen={isOpen} onClose={onClose} placement="center" hideCloseButton>
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">成功</ModalHeader>
        <ModalBody>
          <SuccessAnimation />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default SuccessModal;
