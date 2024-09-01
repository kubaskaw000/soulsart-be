import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import './modal.scss';

type ModalProps = {
  isVisible: boolean;
  onModalClose: () => void;
  children?: ReactNode;
  className?: string;
  bodyClassName?: string;
};

export const Modal: React.FC<ModalProps> = ({
  isVisible,
  onModalClose,
}) => {
  const modal = (
    <div className="modal" onClick={onModalClose}>
    </div>
  );

  return isVisible ? ReactDOM.createPortal(modal, document.body) : null;
};
