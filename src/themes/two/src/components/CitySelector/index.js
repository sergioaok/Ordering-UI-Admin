import React, { useState, useEffect } from 'react'
import { useLanguage, CityList as CityListController } from 'ordering-components-admin'
import { Select } from '../../styles/Select/FirstSelect'
import { MultiSelect } from '../../styles/MultiSelect'
import {
  PlaceholderTitle,
  Option
} from './styles'

const CitySelectorUI = (props) => {
  const {
    citiesList,
    isDefault,
    filterValues,
    handleChangeCity
  } = props

  const [cityOptions, setCityOptions] = useState([])
  const [, t] = useLanguage()
  const placeholder = <PlaceholderTitle isDefault={isDefault}>{t('SELECT_CITY', 'Select City')}</PlaceholderTitle>

  useEffect(() => {
    if (citiesList?.loading) return
    const _cityOptions = citiesList?.cities.map(city => {
      return {
        value: city.id,
        content: <Option isDefault={isDefault}>{city?.name}</Option>
      }
    })
    setCityOptions(_cityOptions)
  }, [citiesList, isDefault])

  return (
    <>
      {isDefault ? (
        <Select
          placeholder={placeholder}
          options={cityOptions}
          onChange={(city) => handleChangeCity(city)}
        />
      ) : (
        <MultiSelect
          placeholder={placeholder}
          defaultValue={filterValues?.cityIds}
          options={cityOptions}
          onChange={(city) => handleChangeCity(city)}
        />
      )}
    </>
  )
}

export const CitySelector = (props) => {
  const cityListProps = {
    ...props,
    UIComponent: CitySelectorUI
  }
  return <CityListController {...cityListProps} />
}
