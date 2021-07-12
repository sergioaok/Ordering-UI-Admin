import React, { useState } from 'react'
import PropTypes from 'prop-types'
// import { useSession } from '../../contexts/SessionContext'
// import { useApi } from '../../contexts/ApiContext'
// import { useLanguage } from '../../contexts/LanguageContext'
import { useSession, useApi } from 'ordering-components-admin'

/**
 * Component to manage Checkout page behavior without UI component
 */
export const CreateBusinessProduct = (props) => {
  const {
    UIComponent,
    business,
    handleUpdateBusinessState,
    setIsAddProduct,
    categorySelected
  } = props

  const [{ loading }] = useSession()
  const [ordering] = useApi()
  const [formState, setFormState] = useState({ loading: false, changes: { enabled: true }, result: { error: false } })

  /**
  * Update credential data
  * @param {EventTarget} e Related HTML event
  */
  const handleChangeInput = (e) => {
    const currentChanges = { [e.target.name]: e.target.value }

    setFormState({
      ...formState,
      changes: { ...formState.changes, ...currentChanges }
    })
  }

  /**
* Update credential data
* @param {Boolean} isChecked checkbox status
*/
  const handleChangeCheckBox = (isChecked) => {
    const currentChanges = { enabled: isChecked }

    setFormState({
      ...formState,
      changes: { ...formState.changes, ...currentChanges }
    })
  }

  /**
 * Update business photo data
 * @param {File} file Image to change business photo
 */
  const handlechangeImage = (file) => {
    const reader = new window.FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      setFormState({
        ...formState,
        changes: {
          ...formState.changes,
          images: reader.result
        }
      })
    }
    reader.onerror = error => console.log(error)
  }

  /**
  * Function to create Business product
  */
  const handleUpdateClick = async () => {
    if (loading) return
    try {
      let categoryId
      if (categorySelected.id === null && categorySelected.id === 'featured') {
        categoryId = parseInt(business?.categories[0])
      } else {
        categoryId = parseInt(categorySelected.id)
      }
      setFormState({
        ...formState,
        loading: true
      })
      const { content } = await ordering.businesses(parseInt(business?.id)).categories(categoryId).products().save(formState.changes)
      if (!content.error) {
        setFormState({
          ...formState,
          changes: {},
          result: content,
          loading: false
        })
        if (handleUpdateBusinessState) {
          const _categories = business?.categories.map(item => {
            if (item.id === categoryId) {
              let _products = []
              if (item.products && item.products.length > 0) {
                _products = item.products.map(prod => {
                  return prod
                })
              }
              _products.push(content.result)
              return {
                ...item,
                products: _products
              }
            }
            return item
          })
          handleUpdateBusinessState({ ...business, categories: _categories })
        }
        setIsAddProduct(false)
      } else {
        setFormState({
          ...formState,
          changes: formState.changes,
          result: content,
          loading: false
        })
      }
    } catch (err) {
      setFormState({
        ...formState,
        result: {
          error: true,
          result: err.message
        },
        loading: false
      })
    }
  }

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          formState={formState}
          setFormState={setFormState}
          handlechangeImage={handlechangeImage}
          handleChangeInput={handleChangeInput}
          handleUpdateClick={handleUpdateClick}
          handleChangeCheckBox={handleChangeCheckBox}
        />
      )}
    </>
  )
}

CreateBusinessProduct.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Object for a business
   */
  business: PropTypes.object,
  /**
   * Function to set a business state
   */
  handleUpdateBusinessState: PropTypes.func,
  /**
   * Function to set product creation mode
   */
  setIsAddProduct: PropTypes.func,
  /**
   * Components types before Checkout
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after Checkout
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before Checkout
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after Checkout
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

CreateBusinessProduct.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
