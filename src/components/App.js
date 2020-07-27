import React from 'react';
import PropTypes from 'prop-types';

function App({ currentUser, currentRoom }) {
  return (
    <div>
      <SidePanel />
      <RoomList />
      <Messages />
    </div>
  );
}

App.propTypes = {
  currentUser: PropTypes.object,
  currentRoom: PropTypes.object,
};

export default App;
