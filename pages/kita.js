import React from 'react'
import { smsApi } from '../helpers/otp'
import CryptoJS from 'crypto-js';

export default function kita() {
  const message =CryptoJS.AES.encrypt('my message', 'This is a secret key for Code').toString();
  const bytes  = CryptoJS.AES.decrypt(message, 'This is a secret key for Code');
  const originalText = bytes.toString(CryptoJS.enc.Utf8);
  console.log(originalText);
  return (
    <div>
      <h2>sadasd</h2>
    </div>
  )
}
