import React, { useState, useEffect } from 'react'
import { useConfig, useLanguage, useUtils, BusinessZoneGoogleMaps } from 'ordering-components-admin'
import { Select } from '../../styles/Select/FirstSelect'
import { Input } from '../../styles/Inputs'
import { Button } from '../../styles/Buttons'
import { Alert } from '../Confirm'

import {
  BasicContainer,
  FieldName,
  TypeSelectWrapper,
  WrapperMap
} from './styles'

export const BusinessDeliveryZoneBasic = (props) => {
  const {
    business,
    zone,
    handleZoneType,
    handleChangeZoneData,
    handleUpdateBusinessDeliveryZone,
    isAddValid,
    handleAddBusinessDeliveryZone
  } = props
  const [, t] = useLanguage()
  const [{ parseNumber }] = useUtils()
  const [configState] = useConfig()
  const [clearState, setClearState] = useState(false)
  const [infoContentString, setInfoContentString] = useState('')
  const [zoneType, setZoneType] = useState(zone?.type || 2)
  const [zoneData, setZoneData] = useState(zone?.data)
  const [alertState, setAlertState] = useState({ open: false, content: [] })

  const typeOptions = [
    { value: 1, content: t('CIRCLE', 'Circle') },
    { value: 2, content: t('POLYGON', 'Polygon') }
  ]

  const googleMapsControls = {
    defaultZoom: 15,
    zoomControl: true,
    streetViewControl: false,
    fullscreenControl: false,
    mapTypeId: 'roadmap', // 'roadmap', 'satellite', 'hybrid', 'terrain'
    mapTypeControl: false,
    mapTypeControlOptions: {
      mapTypeIds: ['roadmap', 'satellite']
    },
    isMarkerDraggable: false
  }

  const fillStyle = {
    fillColor: '#2C7BE5',
    strokeColor: '#03459E',
    fillOpacity: 0.2,
    strokeWeight: 2,
    editable: true
  }

  const handleChangeType = (type) => {
    handleZoneType(type, zone?.id || null)
    setClearState(true)
    setZoneType(type)
  }

  const handleZoneData = (data) => {
    setZoneData(data)
    handleChangeZoneData(data, zone?.id || null)
  }

  const handleSave = () => {
    if (!zoneData) {
      setAlertState({
        open: true,
        content: t('REQUIRED_POLYGON_CIRCLE', 'Polygon or circle must be drawn.')
      })
    } else {
      if (isAddValid) handleAddBusinessDeliveryZone()
      else handleUpdateBusinessDeliveryZone()
    }
  }

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  useEffect(() => {
    if (clearState) {
      handleZoneData(null)
    }
  }, [clearState])

  useEffect(() => {
    if (zoneType !== 1) return
    let content = '<div style="width: 90px; height: 30px">' + '<span>Radius: </span>'
    content += parseNumber(zoneData?.radio)
    content += '<span>km</span>' + '</div>'
    setInfoContentString(content)
  }, [zoneData, zoneType])

  return (
    <>
      <BasicContainer>
        <FieldName>{t('TYPE', 'Type')}</FieldName>
        <TypeSelectWrapper>
          <Select
            defaultValue={parseInt(zoneType)}
            options={typeOptions}
            onChange={handleChangeType}
          />
        </TypeSelectWrapper>
        <FieldName>{t('BUSINESS_ADDRESS', 'Business address')}</FieldName>
        <Input
          name='address'
          defaultValue={business?.address}
          disabled
        />
        <WrapperMap>
          <button
            onClick={() => setClearState(true)}
          >
            {t('CLEAR', 'Clear')}
          </button>
          <BusinessZoneGoogleMaps
            apiKey={configState?.configs?.google_maps_api_key?.value}
            mapControls={googleMapsControls}
            location={business?.location}
            clearState={clearState}
            setClearState={setClearState}
            type={zoneType}
            data={zoneData}
            handleData={handleZoneData}
            fillStyle={fillStyle}
            infoContentString={infoContentString}
          />
        </WrapperMap>
        <Button
          color='primary'
          borderRadius='5px'
          onClick={() => handleSave()}
        >
          {isAddValid ? t('SAVE', 'Save') : t('UPDATE', 'Update')}
        </Button>
      </BasicContainer>
      <Alert
        title={t('ORDERING', 'Ordering')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
    </>
  )
}
