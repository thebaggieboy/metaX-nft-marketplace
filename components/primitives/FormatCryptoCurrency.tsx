import FormatCrypto from './FormatCrypto'
import React, { FC, ComponentProps } from 'react'
import CryptoCurrencyIcon from './CryptoCurrencyIcon'
import { zeroAddress } from 'viem'

type FormatCryptoCurrencyProps = {
  logoHeight?: number
  borderRadius?: string;
  address?: string
}

type Props = ComponentProps<typeof FormatCrypto> & FormatCryptoCurrencyProps

const FormatCryptoCurrency: FC<Props> = ({
  amount,
  address = zeroAddress,
  maximumFractionDigits,
  borderRadius = '0%',
  logoHeight = 8,
  textStyle,
  css,
  decimals,
}) => {
  return (
    <FormatCrypto
      css={css}
      textStyle={textStyle}
      amount={amount}
      maximumFractionDigits={maximumFractionDigits}
      decimals={decimals}
    >
      {/** <CryptoCurrencyIcon css={{ height: logoHeight, borderRadius: borderRadius }} address={address} />*/}
   
      
    </FormatCrypto>
  )
}

export default FormatCryptoCurrency
