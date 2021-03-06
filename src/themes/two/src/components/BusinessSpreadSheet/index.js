import React, { useEffect, useState } from 'react'
import { useLanguage, BusinessSpreadSheet as BusinessSpreadSheetController } from 'ordering-components-admin'
import { SpreadSheetEditor } from '../SpreadSheetEditor'
import 'react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify'
import { Alert } from '../Confirm'
import {
  BusinessSpreadSheetContainer
} from './styles'

const BusinessSpreadSheetUI = (props) => {
  const {
    handleItemChange,
    spreadSheetState,
    handleRowRemove,
    handleAfterSectionEnd,
    handleoutsideClickDeselects
  } = props

  const [, t] = useLanguage()
  const [alertState, setAlertState] = useState({ open: false, content: [] })

  const spreadSheetHeaderItems = [
    { title: t('ID', 'Id'), code: 'id', readOnly: true, type: 'numeric' },
    { title: t('NAME', 'Name'), code: 'name', readOnly: false, type: 'text' },
    { title: t('DESCRIPTION', 'Description'), code: 'description', readOnly: false, type: 'text' },
    { title: t('PRICE', 'Price'), code: 'price', readOnly: false, type: 'numeric' },
    { title: t('QUANTITY', 'Quantity'), code: 'quantity', readOnly: false, type: 'numeric' }
  ]

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  useEffect(() => {
    if (spreadSheetState.products && !spreadSheetState.result.error && !spreadSheetState.loading) {
      const toastConfigure = {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      }
      const content = spreadSheetState?.result.result
      toast.dark(content, toastConfigure)
    }
  }, [spreadSheetState?.loading])

  useEffect(() => {
    if (spreadSheetState?.result?.error) {
      setAlertState({
        open: true,
        content: spreadSheetState?.result?.result
      })
    }
  }, [spreadSheetState?.result])

  return (
    <>
      <BusinessSpreadSheetContainer>
        <SpreadSheetEditor
          {...props}
          hotTableData={spreadSheetState.products}
          headerItems={spreadSheetHeaderItems}
          handleItemChange={handleItemChange}
          handleRowRemove={handleRowRemove}
          handleAfterSectionEnd={handleAfterSectionEnd}
          handleoutsideClickDeselects={handleoutsideClickDeselects}
        />
      </BusinessSpreadSheetContainer>
      <Alert
        title={t('PRODUCT EDIT', 'Product Edit')}
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

export const BusinessSpreadSheet = (props) => {
  const businessSpreadSheetProps = {
    ...props,
    UIComponent: BusinessSpreadSheetUI
  }
  return <BusinessSpreadSheetController {...businessSpreadSheetProps} />
}
