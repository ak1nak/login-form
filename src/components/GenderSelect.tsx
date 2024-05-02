import React from 'react';

interface GenderSelectProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const GenderSelect: React.FC<GenderSelectProps> = ({ label, value, onChange }) => {
  return (
    <div>
      <label>
        {label}
        <select value={value} onChange={onChange}>
          <option value="">Select...</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </label>
    </div>
  );
};

export default GenderSelect;
