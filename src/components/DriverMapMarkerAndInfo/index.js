import React, { useRef, useState, useEffect } from 'react'
import { useLanguage, useUtils } from 'ordering-components'
import FaUserAlt from '@meronex/icons/fa/FaUserAlt'

import {
  WrapperMapMarker,
  MapMarkerImg,
  DriverInfo,
  TextContainer,
  Text
} from './styles'
export const DriverMapMarkerAndInfo = (props) => {
  const {
    driver
  } = props
  const [, t] = useLanguage()
  const [{ parseDate }] = useUtils()
  const [infoShow, setInfoShow] = useState(false)
  const infoRef = useRef(null)
  const [infoTop, setInfoTop] = useState('0px')

  useEffect(() => {
    if (!infoShow) return
    setInfoTop(`-${infoRef.current.scrollHeight + 33}px`)
  }, [infoShow])

  return (
    <>
      {infoShow && (
        <DriverInfo ref={infoRef} style={{ transform: `translate(-50%, ${infoTop})` }}>
          <TextContainer>
            <Text fontWeight='bold'>
              {t('NAME', 'Name')}:
            </Text>
            <Text>{driver.name} {driver.lastname}</Text>
          </TextContainer>
          {driver?.last_order_assigned_at && (
            <TextContainer>
              <Text fontWeight='bold'>
                {t('LAST_ORDER_AT', 'Last order at')}:
              </Text>
              <Text>{parseDate(driver.last_order_assigned_at, { utc: false })}</Text>
            </TextContainer>
          )}
          {driver?.drivergroups.length > 0 && (
            <TextContainer>
              <Text fontWeight='bold'>
                {t('DRIVER_GROUP', 'Driver group')}:
              </Text>
              {driver.drivergroups.map(group => (
                <Text key={group.id}>{group.name},</Text>
              ))}
            </TextContainer>
          )}
          {driver?.last_location_at && (
            <TextContainer>
              <Text fontWeight='bold'>
                {t('LAST_LOCATION', 'Last location')}:
              </Text>
              <Text>{parseDate(driver.last_location_at, { utc: false })}</Text>
            </TextContainer>
          )}
        </DriverInfo>
      )}
      <WrapperMapMarker
        offline={!driver.available}
        key={driver.id}
        onMouseOver={() => setInfoShow(true)}
        onMouseLeave={() => setInfoShow(false)}
      >
        {driver.photo ? (
          <MapMarkerImg bgimage={driver.photo} />
        ) : (
          <FaUserAlt />
        )}
      </WrapperMapMarker>
    </>
  )
}
