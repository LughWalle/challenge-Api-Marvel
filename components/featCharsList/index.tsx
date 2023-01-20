import React, { useContext } from 'react'
import { MarvelContext } from '_context/MarvelContext'

type Props = {}

const featCharsList = (props: Props) => {
  const { featChars, setFeatChars } = useContext(MarvelContext)
  return (
    <div>featCharsList</div>
  )
}