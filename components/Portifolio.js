import React from 'react'
import styled from 'styled-components'
import { BsThreeDotsVertical } from 'react-icons/bs'

import Coin from './Coin'
import { coins } from '../static/coins'

const Portifolio = () => {
  return (
    <Wrapper>
      <PortifolioTable>
        <TableItem>
          <Title>Your Assets</Title>
        </TableItem>

        <Divider />

        <Table>
          <TableItem>
            <TableRow>
              <div style={{ flex: 3 }}>Name</div>
              <div style={{ flex: 2 }}>Balance</div>
              <div style={{ flex: 1 }}>Price</div>
              <div style={{ flex: 1 }}>Allocation</div>
              <div style={{ flex: 0 }}>
                <BsThreeDotsVertical />
              </div>
            </TableRow>
          </TableItem>
          <Divider />
          <div>
            {coins.map(coin => (
              <div key={coin.sign}>
                <Coin coin={coin} />
                <Divider />
              </div>
            ))}
          </div>
        </Table>
      </PortifolioTable>
    </Wrapper>
  )
}

export default Portifolio

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`

const Content = styled.div`
  width: 100%;
  max-width: 1000px;
  padding: 2rem 1rem;
`

const PortifolioTable = styled.div`
  margin-top: 1rem;
  border: 1px solid #282b2f;
`

const Table = styled.table`
  width: 100%;
`

const TableRow = styled.tr`
  width: 100%;
  display: flex;
  justify-content: space-between;

  & > th {
    text-align: left;
  }
`

const TableItem = styled.div`
  padding: 1rem 2rem;
`

const Divider = styled.div`
  border-bottom: 1px solid #282b2f;
`

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
`
