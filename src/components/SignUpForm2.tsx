import React, { useState } from 'react';
import TextInput from './TextInput';
import GenderSelect from './GenderSelect';
import SubmitButton from './SubmitButton';

const SignUpForm2: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');

  const handleSubmit = () => {
    // Submit logic goes here
    console.log('Submitting Form 2:', { username, password, gender });
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
      <GenderSelect
        label="Gender"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
      />
      <SubmitButton onClick={handleSubmit}>Sign Up</SubmitButton>
    </form>
  );
};

export default SignUpForm2;
