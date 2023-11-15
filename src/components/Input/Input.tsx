import React, { useState } from 'react';
import './Input.css';
import { InputValidationType } from './InputValidationTypes';

function Input({onInputChange, handleInvalidInput, inputValidationType}:
                 {
                   onInputChange: (value: string) => void,
                   handleInvalidInput?: (isInputValid: boolean) => void,
                   inputValidationType?: InputValidationType
                 }) {
  const [isInputValid, setIsInputValid] = useState<boolean>(true);
  const isValid = (value: string): boolean => {
    if (inputValidationType && inputValidationType in [InputValidationType.Email, InputValidationType.Telegram]) {
      const minNicknameLength = 3;
      return value.includes('@') && value.length >= minNicknameLength;
    }
    return true;
  };
  return (
    <div>
      <input
        className={`input ${isInputValid? '': 'invalidInput'}`}
        placeholder={"Ваш email или telegram"}
        onChange={(event) => {
          const inputValue = event.target.value;
          setIsInputValid(isValid(inputValue));
          handleInvalidInput && handleInvalidInput(isInputValid);
          onInputChange(inputValue);
        }}
      />
    </div>

  );
}

export default Input;
