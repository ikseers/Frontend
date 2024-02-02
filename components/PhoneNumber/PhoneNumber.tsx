'use client';
import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

// css
import '@/app/[locale]/globals.css';
import './PhoneNumber.css';

interface PhoneNumberValidationType {
  passPhoneNumber: (value: string) => void;
}

const PhoneNumberValidation = ({
  passPhoneNumber,
}: PhoneNumberValidationType) => {
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [valid, setValid] = useState<boolean>(true);

  const handleChange = (value: string) => {
    setPhoneNumber(value);
    passPhoneNumber(value);
    setValid(validatePhoneNumber(value));
  };

  const validatePhoneNumber = (phoneNumber: string) => {
    const phoneNumberPattern = /^\+?[1-9]\d{5,14}$/;
    return phoneNumberPattern.test(phoneNumber);
  };

  return (
    <div className="text-black w-3/4">
      <PhoneInput
        country={'eg'}
        value={phoneNumber}
        onChange={handleChange}
        excludeCountries={['is']}
        placeholder="Phone number"
        inputProps={{
          required: true,
        }}
      />

      {!valid && (
        <p className="text-red-600 text-xs text-start">
          Please enter a valid phone number.
        </p>
      )}
    </div>
  );
};

export default PhoneNumberValidation;
