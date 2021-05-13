import React, { useEffect, useState } from 'react'

import {
  ToggleSwitchContainer,
  Slider
} from './styles'

export const ToggleSwitch = (props) => {
  const { defaultChecked, onChange, className } = props
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    setChecked(defaultChecked)
  }, [defaultChecked])

  const handleCheckBoxChange = (evt) => {
    setChecked(evt.target.checked)
    onChange && onChange(evt.target.checked)
  }

  return (
    <ToggleSwitchContainer className={className}>
      <input
        type='checkbox'
        checked={checked}
        onChange={handleCheckBoxChange}
      />
      <Slider />
    </ToggleSwitchContainer>
  )
}
