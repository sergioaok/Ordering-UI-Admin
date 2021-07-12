import React, { useState } from 'react'
import PropTypes from 'prop-types'
// import { useSession } from '../../contexts/SessionContext'
// import { useApi } from '../../contexts/ApiContext'
// import { useLanguage } from '../../contexts/LanguageContext'
import { useSession, useApi } from 'ordering-components-admin'

/**
 * Component to manage Checkout page behavior without UI component
 */
export const SingleProductsCategory = (props) => {
  const {
    UIComponent,
    handleUpdateBusinessState,
    business,
    category,
    categorySelected,
    setCategorySelected,
    isAddCategory,
    setIsAddCategory
  } = props

  const [{ loading }] = useSession()
  const [ordering] = useApi()

  const [formState, setFormState] = useState({ changes: {}, loading: false, result: { error: false }, status: null })

  const handelChangeCategoryActive = (isChecked) => {
    const params = { enabled: isChecked }
    editCategory(params)
  }

  const handleUpdateClick = () => {
    if (isAddCategory) addCategory(formState?.changes)
    else editCategory(formState?.changes)
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
   * Set properties of a category
   * @param {EventTarget} evt Related Html element
   */
  const handleInputChange = (evt) => {
    setFormState({
      ...formState,
      changes: { ...formState.changes, [evt.target.name]: evt.target.value }
    })
  }

  const handleDeleteClick = () => {
    if (isAddCategory) {
      setFormState({ changes: {}, loading: false, result: { error: false }, status: null })
      setIsAddCategory(false)
    } else {
      deleteCategory()
    }
  }

  /**
   * Method to edit a category
   */
  const editCategory = async (params) => {
    if (loading) return
    try {
      setFormState({
        ...formState,
        loading: true
      })
      const { content: { error, result } } = await ordering.businesses(parseInt(business?.id)).categories(parseInt(category.id)).save(params)
      if (!error) {
        setFormState({
          ...formState,
          loading: false,
          changes: {},
          result: {
            error: false,
            result: result
          },
          status: 'update'
        })
        if (handleUpdateBusinessState) {
          const _categories = business?.categories.map(item => {
            if (item.id === category.id) {
              return {
                ...item,
                ...params
              }
            }
            return item
          })
          handleUpdateBusinessState({ ...business, categories: _categories })
        }
      } else {
        setFormState({
          ...formState,
          loading: false,
          result: {
            error: true,
            result: result
          }
        })
      }
    } catch (err) {
      setFormState({
        ...formState,
        loading: false,
        result: {
          error: true,
          result: err
        }
      })
    }
  }

  /**
 * Method to edit a category
 */
  const deleteCategory = async () => {
    if (loading) return
    try {
      setFormState({
        ...formState,
        loading: true
      })
      const { content: { error, result } } = await ordering.businesses(parseInt(business?.id)).categories(parseInt(category.id)).delete()
      if (!error) {
        setFormState({
          ...formState,
          changes: {},
          loading: false,
          result: {
            error: false,
            result: result
          },
          status: 'delete'
        })
        if (handleUpdateBusinessState) {
          const _categories = business.categories.map(item => {
            return item
          })
          const filterItem = business.categories.filter(cat => cat.id === category.id)[0]
          const index = business.categories.indexOf(filterItem)
          if (index > -1) _categories.splice(index, 1)
          handleUpdateBusinessState({ ...business, categories: _categories })
          if (category.id === categorySelected.id) setCategorySelected(_categories[0])
        }
      } else {
        setFormState({
          ...formState,
          loading: false,
          result: {
            error: true,
            result: result
          }
        })
      }
    } catch (err) {
      setFormState({
        ...formState,
        loading: false,
        result: {
          error: true,
          result: err
        }
      })
    }
  }

  /**
  * Function to create category
  */
  const addCategory = async (params) => {
    if (loading) return
    try {
      setFormState({
        ...formState,
        loading: true
      })
      const { content } = await ordering.businesses(parseInt(business?.id)).categories().save(params)
      if (!content.error) {
        setFormState({
          ...formState,
          changes: {},
          loading: false,
          result: content,
          status: 'add'
        })
        if (handleUpdateBusinessState) {
          const _categories = business.categories.map(item => {
            return item
          })
          _categories.push(content.result)
          handleUpdateBusinessState({ ...business, categories: _categories })
        }
        setIsAddCategory(false)
      } else {
        setFormState({
          ...formState,
          loading: false,
          result: content
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
          handelChangeCategoryActive={handelChangeCategoryActive}
          categoryFormState={formState}
          handlechangeImage={handlechangeImage}
          handleUpdateClick={handleUpdateClick}
          handleDeleteClick={handleDeleteClick}
          handleInputChange={handleInputChange}
        />
      )}
    </>
  )
}

SingleProductsCategory.propTypes = {
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
   * Object for a product
   */
  category: PropTypes.object,
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

SingleProductsCategory.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
