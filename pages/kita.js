import React from 'react'
import { smsApi } from '../helpers/otp'

export default function kita() {
  const sms = smsApi('sdsd','dddd')
  console.log(sms)
  return (
    <div>
      <h2> xsds</h2>
    </div>
  )
}
