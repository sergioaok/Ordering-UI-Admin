import React, { useState, useEffect } from 'react'
import { useLanguage, ExportCSV as ExportCSVController } from 'ordering-components-admin'
import { SpinnerLoader } from '../../../../../components/SpinnerLoader'
import { useWindowSize } from '../../../../../hooks/useWindowSize'
import { Button } from '../../styles/Buttons'
import ZoDownload from '@meronex/icons/zo/ZoDownload'
import { Modal } from '../../../../../components/Modal'
import {
  ExportContainer,
  PopoverContainer,
  Item,
  ExportCSVResult,
  ErrorMessage
} from './styles'
const ExportCSVUI = (props) => {
  const {
    actionStatus,
    getCSV
  } = props
  const [, t] = useLanguage()
  const { width } = useWindowSize()
  const [popoverOpen, setPopoverOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

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

  useEffect(() => {
    if (!actionStatus?.result || actionStatus?.error) return
    setModalOpen(true)
  }, [actionStatus])

  return (
    <>
      <ExportContainer>
        <Button
          borderRadius='5px'
          color='secundary'
          disabled={actionStatus.loading}
          onClick={() => setPopoverOpen(!popoverOpen)}
        >
          {width > 600 && t('CSV', 'CSV')}
          <ZoDownload />
        </Button>
        {popoverOpen && (
          <PopoverContainer>
            <Item onClick={() => handleExportAll()}>
              {t('EXPROT_ALL', 'Export all')}
            </Item>
            <Item onClick={() => handleExportFiltered()}>
              {t('EXPROT_FILTERED', 'Export filtered')}
            </Item>
          </PopoverContainer>
        )}

        {actionStatus.loading && (
          <SpinnerLoader primary />
        )}
      </ExportContainer>
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      >
        <ExportCSVResult>
          <h1 className='align-center'>{'ORDERING', 'Ordering'}</h1>
          {actionStatus?.result?.length > 0 && (
            actionStatus?.result.map((e, i) => (
              <ErrorMessage key={i}>{e?.message || e}</ErrorMessage>
            )
          ))}
          <Button
            rectangle
            color='primary'
            onClick={() => setModalOpen(false)}
          >
            {t('OK', 'OK')}
          </Button>
        </ExportCSVResult>
      </Modal>
    </>
  )
}

export const ExportCSV = (props) => {
  const ExportCSVControlProps = {
    ...props,
    UIComponent: ExportCSVUI,
    filterValues: props.filterValues
  }
  return <ExportCSVController {...ExportCSVControlProps} />
}