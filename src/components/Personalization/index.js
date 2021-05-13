import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import { useTheme } from 'styled-components'
import {
  PersonalizationContainer,
  Title,
  Description,
  Link,
  ImageContainer
} from './styles'

export const Personalization = () => {
  const theme = useTheme()
  const [, t] = useLanguage()

  return (
    <PersonalizationContainer>
      <Title>{t('PERSONALIZATION', 'Personalization')}</Title>
      <Description>
        {t('IF_YOU_ARE_LOOKING_ORDERING_SOLUTION', 'If you are looking for something special for your Ordering Solution')},
        <Link>{t('SEND_US_YOUR_SPECIAL_WISH', 'Send us your special wish')}.</Link>
      </Description>
      <ImageContainer>
        <img alt='image' src={theme?.images?.general?.notNetwork} loading='lazy' />
      </ImageContainer>
    </PersonalizationContainer>
  )
}
