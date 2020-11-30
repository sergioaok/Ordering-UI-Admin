import React, { useEffect, useState } from 'react'
import {
  useLanguage
} from 'ordering-components'
import { MultiSelect } from '../../styles/MultiSelect'
import {
  Option,
  OptionContent,
  OptionName,
  OptionCategory,
  WrapperBusinessImage,
  BusinessImage
} from './styles'

export const BusinessesSelector = (props) => {
  const {
    businessesList,
    handleSelectedBusinessType
  } = props

  const [, t] = useLanguage()
  const [businessTypes, setBusinessTypes] = useState([])

  const Placeholder = <Option>{t('SELECT_A_BUSINESS', 'Select a business')}</Option>
  const businessesLoading = [{ value: 'default', content: <Option>{t('BUSINESSES_LOADING', 'Businesses loading')}...</Option> }]

  useEffect(() => {
    const _businessesOptionList = []
    if (!businessesList.loading) {
      const _businessesOption = businessesList.businesses.map((business) => {
        return {
          value: business.id,
          content: (
            <Option>
              <WrapperBusinessImage>
                {business.logo && <BusinessImage bgimage={business.logo} />}
              </WrapperBusinessImage>
              <OptionContent>
                <OptionName>
                  {business.name}
                </OptionName>
                <OptionCategory>
                  {business.alcohol && t('ALCOHOL', 'Alcohol')}
                  {business.food && t('FOOD', 'Food')}
                  {business.groceries && t('GROCERIES', 'Groceries')}
                  {business.laundry && t('LAUNDRY', 'Laundry')}
                </OptionCategory>
              </OptionContent>
            </Option>
          )
        }
      })

      for (const option of _businessesOption) {
        _businessesOptionList.push(option)
      }
    }

    setBusinessTypes(_businessesOptionList)
  }, [businessesList])

  return (
    <>
      {!businessesList.loading ? (
        <MultiSelect
          defaultValue='default'
          placeholder={Placeholder}
          options={businessTypes}
          optionInnerMargin='10px'
          optionInnerMaxHeight='150px'
          optionBottomBorder
          onChange={(businessType) => handleSelectedBusinessType(businessType)}
        />
      ) : (
        <MultiSelect
          defaultValue='default'
          options={businessesLoading}
          optionInnerMargin='10px'
          optionInnerMaxHeight='150px'
          optionBottomBorder
        />
      )}
    </>
  )
}
