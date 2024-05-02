import React from 'react';

interface TextInputProps {
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: React.FC<TextInputProps> = ({ label, type, value, onChange }) => {
  return (
    <div>
      <label>
        {label}
        <input type={type} value={value} onChange={onChange} />
      </label>
    </div>
  );
};

export default TextInput;
