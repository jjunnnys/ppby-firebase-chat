import React, { useState, useCallback } from 'react';
import firebase from '../firebase';

const App = () => {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });

  const { email, password } = inputs;

  const onChangeInput = useCallback(
    (e) => {
      const { value, name } = e.target;
      setInputs({
        ...inputs,
        [name]: value,
      });
    },
    [inputs],
  );

  const onCreateUser = useCallback(async () => {
    console.log('dsds');
    try {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((createdUser) => {
          console.log(createdUser);
          createdUser.user.updateProfile({
            displayName: 'ppby',
          });
        });
      setInputs('');
    } catch (e) {
      console.log(e);
    }
  }, [email, password]);

  return (
    <>
      <h1>파이어베이스 인증 연결 확인 - 회원가입</h1>
      <input
        type="email"
        placeholder="이메일 입력"
        onChange={onChangeInput}
        name="email"
        value={email}
      />
      <input
        type="password"
        placeholder="비밀번호 입력"
        onChange={onChangeInput}
        name="password"
        value={password}
      />
      <button type="button" onClick={onCreateUser}>
        가입
      </button>
    </>
  );
};

export default App;
