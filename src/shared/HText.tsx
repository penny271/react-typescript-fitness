import React from 'react'

// tsrafce

type Props = {
  children: React.ReactNode,
}

// <HText>MORE THAN JUST GYM.</HText> のタグに囲まれたものが children として入る
const HText = ({children}: Props) => {
  return (
    <h1 className="text-3xl font-bold basis-3/5 font-montserrat">{ children }</h1>
  )
}

export default HText

// tsrafce