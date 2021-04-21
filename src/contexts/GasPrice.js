import React, { createContext, useContext, useState, useEffect, useMemo } from 'react'
import { ethers } from 'ethers'
import { useBlockNumber } from './Application'

const GasContext = createContext()

function useGasContext() {
  return useContext(GasContext)
}

export default function Provider({ children }) {
  const [gasPrice, setGasPrice] = useState()

  const globalBlockNumber = useBlockNumber()

  useEffect(() => {
    fetch("https://www.gasnow.org/api/v3/gas/price?utm_source=symphony").then((res) => {
      res.json().then(gasInfo => {
        try {
          setGasPrice(ethers.BigNumber.from(gasInfo.data.fast))
        } catch {}
      })
    })
  }, [globalBlockNumber])

  return (
    <GasContext.Provider value={useMemo(() => [gasPrice, { setGasPrice }], [gasPrice, setGasPrice])}>
      {children}
    </GasContext.Provider>
  )
}

export function useGasPrice() {
  const [gasPrice] = useGasContext()
  return gasPrice
}
