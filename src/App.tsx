import React, { useState } from 'react';
import './App.css';
import SignUpForm1 from './components/SignUpForm1';
import SignUpForm2 from './components/SignUpForm2';

function App() {
  const [formVisible, setFormVisible] = useState(1); // 1 for Form 1, 2 for Form 2

  const handleSwitchForm = () => {
    setFormVisible(formVisible === 1 ? 2 : 1);
  };

  return (
    <div className="App">
      <h1>Sign Up Forms</h1>
      {formVisible === 1 && (
        <>
          <SignUpForm1 />
          <button onClick={handleSwitchForm}>Go to Form 2</button>
        </>
      )}
      {formVisible === 2 && (
        <>
          <SignUpForm2 />
          <button onClick={handleSwitchForm}>Back to Form 1</button>
        </>
      )}
    </div>
  );
}

export default App;
