import React, { forwardRef } from 'react';

interface InputFieldProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled: boolean;
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(({ value, onChange, disabled }, ref) => {
  return (
    <input
      ref={ref}
      type="text"
      value={value}
      onChange={onChange}
      disabled={disabled}
      autoFocus
      autoComplete="off"
      autoCorrect="off"
      autoCapitalize="off"
      spellCheck="false"
      className="w-full max-w-xl mt-8 p-4 text-2xl bg-gray-700 border-2 border-gray-600 rounded-lg text-center text-gray-100 focus:outline-none focus:ring-4 focus:ring-sky-500 focus:border-sky-500 transition-all duration-200 disabled:opacity-50"
      placeholder="Start typing..."
    />
  );
});

InputField.displayName = 'InputField';

export default InputField;
