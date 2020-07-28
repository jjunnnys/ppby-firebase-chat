import React from 'react';
import { Auth } from '../firebase';

const App = () => {
  return (
    <>
      <h1>파이어베이스 인증 연결 확인</h1>
      <button type="button">구글 로그인</button>
      {console.log(Auth)}
    </>
  );
};

export default App;
