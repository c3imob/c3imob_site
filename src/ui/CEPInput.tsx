import React, { ChangeEventHandler, ReactNode, useState } from 'react';
import InputMask from 'react-input-mask';

interface CEPInputInterface {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>; // (value: ChangeEventHandler<string>) => void;
}

const CEPInput = ({ value, onChange }: CEPInputInterface) => {
  return <InputMask value={value} onChange={onChange} mask="99999-999" maskChar="0" />;
};

export default CEPInput;
