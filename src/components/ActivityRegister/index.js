import React from 'react'
import {
  ActivityRegisterContainer,
  VisitInfo,
  ItemContainer,
  ItemName,
  ItemData,
  ItemAmount,
  ItemUnit
} from './styles'

export const ActivityRegister = () => {
  const dataList = [
    { content: 'Orders Placed', value: 128 },
    { content: 'Visits in the app', value: 50, unit: 'Month' },
    { content: 'Visits in the web', value: 89, unit: 'Month' }
  ]

  return (
    <ActivityRegisterContainer>
      <VisitInfo>
        {
          dataList && dataList.length > 0 &&
          dataList.map((item, i) => (
            <ItemContainer key={i}>
              <ItemName>{item.content}</ItemName>
              <ItemData>
                <ItemAmount>{item.value}</ItemAmount>
                {item?.unit && item.unit !== '' && <ItemUnit> /{item.unit}</ItemUnit>}
              </ItemData>
            </ItemContainer>
          ))
        }
      </VisitInfo>
    </ActivityRegisterContainer>
  )
}
