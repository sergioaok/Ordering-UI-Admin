import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
// import { useSession } from '../../contexts/SessionContext'
// import { useApi } from '../../contexts/ApiContext'
import { useSession, useApi } from 'ordering-components-admin'

/**
 * Component to manage Checkout page behavior without UI component
 */
export const BusinessCategoryEdit = (props) => {
  const {
    UIComponent,
    business,
    handleUpdateBusinessState,
    category
  } = props

  const [{ loading }] = useSession()
  const [ordering] = useApi()
  const [formState, setFormState] = useState({ loading: false, changes: {}, result: { error: false } })

  /**
  * Update category data
  * @param {EventTarget} e Related HTML event
  */
  const handleChangeInput = (e) => {
    setFormState({
      ...formState,
      changes: { ...formState.changes, [e.target.name]: e.target.value }
    })
  }

  /**
* Update credential data
* @param {Boolean} isChecked checkbox status
*/
  const handleChangeCheckBox = (isChecked) => {
    setFormState({
      ...formState,
      changes: { ...formState.changes, enabled: isChecked }
    })
  }

  /**
 * Update category photo data
 * @param {File} file Image to change category photo
 */
  const handlechangeImage = (file) => {
    const reader = new window.FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      setFormState({
        ...formState,
        changes: {
          ...formState.changes,
          image: reader.result
        }
      })
    }
    reader.onerror = error => console.log(error)
  }

  /**
  * Method to edit selected category
  */
  const handleButtonUpdateClick = async () => {
    if (loading) return
    try {
      setFormState({
        ...formState,
        loading: true
      })
      const { content } = await ordering.businesses(business?.id).categories(parseInt(category?.id)).save(formState.changes)
      if (!content.error) {
        setFormState({
          ...formState,
          changes: {},
          result: {
            error: false,
            result: content.result
          },
          loading: false
        })
        if (handleUpdateBusinessState) {
          const _categories = business?.categories?.map(item => {
            if (item.id === parseInt(category?.id)) {
              return {
                ...item,
                name: content?.result?.name,
                enabled: content?.result?.enabled,
                image: content?.result?.image
              }
            }
            return item
          })
          handleUpdateBusinessState({ ...business, categories: _categories })
        }
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

  useEffect(() => {
    if (category) {
      setFormState({
        ...formState,
        changes: {}
      })
    }
  }, [category])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          formState={formState}
          setFormState={setFormState}
          handlechangeImage={handlechangeImage}
          handleChangeInput={handleChangeInput}
          handleButtonUpdateClick={handleButtonUpdateClick}
          handleChangeCheckBox={handleChangeCheckBox}
        />
      )}
    </>
  )
}

BusinessCategoryEdit.propTypes = {
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

BusinessCategoryEdit.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
