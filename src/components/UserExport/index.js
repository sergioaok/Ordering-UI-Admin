import React, { useState, useEffect } from 'react'
import {
  useLanguage,
  UserExport as UserExportController
} from 'ordering-components-admin'
import BsFillCaretDownFill from '@meronex/icons/bs/BsFillCaretDownFill'
// import { UserExport as UserExportController } from './naked'
import { SpinnerLoader } from '../SpinnerLoader'
import {
  ExportContent,
  ExportTitle,
  ExportText,
  ExportDropMenu,
  MenuItem
} from './styles'

const UserExportUI = (props) => {
  const {
    actionStatus,
    getCSV
  } = props
  const [, t] = useLanguage()
  const [popoverOpen, setPopoverOpen] = useState(false)

  const handleExportAll = () => {
    setPopoverOpen(false)
    getCSV(false)
  }

  const handleExportFiltered = () => {
    setPopoverOpen(false)
    getCSV(true)
  }

  const closePopover = () => {
    setPopoverOpen(false)
  }

  useEffect(() => {
    if (!popoverOpen) return
    document.addEventListener('click', closePopover)
    return () => document.removeEventListener('click', closePopover)
  }, [popoverOpen])

  return (
    <ExportContent>
      <ExportTitle onClick={() => setPopoverOpen(!popoverOpen)} disabled={actionStatus.loading}>
        <ExportText>{t('EXPORT', 'Export')}</ExportText>
        <BsFillCaretDownFill />
      </ExportTitle>
      {
        popoverOpen &&
        <ExportDropMenu>
          <MenuItem onClick={() => handleExportAll()}>{t('EXPORT_ALL', 'Export all')}</MenuItem>
          <MenuItem onClick={() => handleExportFiltered()}>{t('EXPORT_FILTERED', 'Export filtered')}</MenuItem>
        </ExportDropMenu>
      }
      {actionStatus.loading && (
        <SpinnerLoader primary />
      )}
    </ExportContent>
  )
}

export const UserExport = (props) => {
  const userExportProps = {
    ...props,
    UIComponent: UserExportUI,
    filterValues: props.filterValues
  }
  return <UserExportController {...userExportProps} />
}
