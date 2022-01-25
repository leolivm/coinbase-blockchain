import React from 'react'
import styled from 'styled-components'

import Portifolio from './Portifolio'

const Main = () => {
  return (
    <Wrapper>
      <Portifolio />
    </Wrapper>
  )
}

export default Main

const Wrapper = styled.div`
  display: flex;
  max-height: calc(100vh - 64px);
  overflow: scroll;

  & div {
    border-radius: 0.4rem;
  }
`
