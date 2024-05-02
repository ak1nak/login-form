import React from 'react';

interface SubmitButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ onClick, children }) => {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
};

export default SubmitButton;
