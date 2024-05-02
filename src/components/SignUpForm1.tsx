import React, { useState } from 'react';
import TextInput from './TextInput';
import SubmitButton from './SubmitButton';

const SignUpForm1: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    // Submit logic goes here
    console.log('Submitting Form 1:', { username, password });
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <TextInput
        label="Username"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextInput
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <SubmitButton onClick={handleSubmit}>Sign Up</SubmitButton>
    </form>
  );
};

export default SignUpForm1;
