import React, { useState } from 'react';

import { Container, Message } from './styles';

const Modal = ({ open }) => {
  const [modal, setModal] = useState(false);

  function openModal() {
    console.log(open);
  }

  return (
    <Container>
      <Message>Salvo com sucesso! ✔</Message>
      <button onClick={openModal}>X</button>
    </Container>
  );
};

export default Modal;
