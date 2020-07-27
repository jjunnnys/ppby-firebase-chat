import React, { useState } from 'react';
import PropTypes from 'prop-types';
import firebase from '../../firebase';

const SidePanel = ({ clearRoom, clearUser }) => {
  const [createRoomModalIsOpen, setCreateRoomModalIsOpen] = useState(false);

  const onOpenModal = () => setCreateRoomModalIsOpen(true);
  const onCloseModal = () => setCreateRoomModalIsOpen(false);

  const onLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => console.log('Logout'));
    clearRoom();
    clearUser();
  };

  return (
    <div>
      <button type="button" onClick={onOpenModal}>
        방만들기
      </button>
      <button type="button" onClick={onLogout}>
        로그아웃
      </button>
      <CreateRoomModal />
    </div>
  );
};

SidePanel.propTypes = {
  currentUser: PropTypes.object,
  clearRoom: PropTypes.func.isRequired,
  clearUser: PropTypes.func.isRequired,
};

export default SidePanel;
