import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
// import { useSession } from '../../contexts/SessionContext'
// import { useApi } from '../../contexts/ApiContext'
import { useSession, useApi } from 'ordering-components-admin'

/**
 * Component to manage Checkout page behavior without UI component
 */
export const SingleBusinessProduct = (props) => {
  const {
    UIComponent,
    business,
    handleUpdateBusinessState,
    product
  } = props

  const [{ loading }] = useSession()
  const [ordering] = useApi()
  const [formState, setFormState] = useState({ loading: false, changes: {}, result: { error: false }, status: null })
  const [isEditMode, setIsEditMode] = useState(false)

  /**
   * Set enabled property of a product
   * @param {Boolean} isChecked
   */
  const handleChangeProductActive = (isChecked) => {
    const params = { enabled: isChecked }
    editProduct(params)
  }

  /**
   * Set properties of a product
   * @param {EventTarget} evt Related Html element
   */
  const handleChangeInput = (evt) => {
    setFormState({
      ...formState,
      changes: { ...formState.changes, [evt.target.name]: evt.target.value }
    })
    setIsEditMode(true)
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
    setIsEditMode(true)
  }

  /**
   * Set name property of a product
   * @param {String} value
   */
  const handleUpdateClick = () => {
    const prarms = {
      images: formState?.changes?.images,
      name: formState?.changes?.name,
      description: formState?.changes?.description,
      price: formState?.changes?.price
    }
    editProduct(prarms)
  }

  /**
   * Method to edit a product
   */
  const editProduct = async (params) => {
    if (loading) return
    try {
      setFormState({
        ...formState,
        loading: true
      })
      const { content: { error, result } } = await ordering.businesses(parseInt(business?.id)).categories(parseInt(product?.category_id)).products(product?.id).save(params)
      if (!error) {
        setFormState({
          ...formState,
          loading: false,
          result: {
            error: false,
            result: result
          }
        })
        if (handleUpdateBusinessState) {
          const _categories = business?.categories.map(item => {
            if (item.id === product?.category_id) {
              const _products = item.products.map(prod => {
                if (prod.id === product.id) {
                  return {
                    ...prod,
                    ...params
                  }
                }
                return prod
              })
              return {
                ...item,
                products: _products
              }
            }
            return item
          })
          handleUpdateBusinessState({ ...business, categories: _categories })
        }
        setIsEditMode(false)
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
 * Method to edit a product
 */
  const deleteProduct = async () => {
    if (loading) return
    try {
      setFormState({
        ...formState,
        loading: true
      })
      const { content: { error, result } } = await ordering.businesses(parseInt(business?.id)).categories(parseInt(product?.category_id)).products(product?.id).delete()
      if (!error) {
        setFormState({
          ...formState,
          loading: false,
          result: {
            error: false,
            result: result
          }
        })
        if (handleUpdateBusinessState) {
          const _categories = business?.categories.map(item => {
            if (item.id === product?.category_id) {
              const _products = [...item.products]
              const filterItem = item.products.filter(prod => prod.id === product.id)[0]
              const index = item.products.indexOf(filterItem)
              if (index > -1) _products.splice(index, 1)
              return {
                ...item,
                products: _products
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

  useEffect(() => {
    if (product) {
      setFormState({
        ...formState,
        changes: { ...product }
      })
    }
  }, [product])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          handleChangeProductActive={handleChangeProductActive}
          handleUpdateClick={handleUpdateClick}
          deleteProduct={deleteProduct}
          productFormState={formState}
          handleChangeInput={handleChangeInput}
          handlechangeImage={handlechangeImage}
          isEditMode={isEditMode}
        />
      )}
    </>
  )
}

SingleBusinessProduct.propTypes = {
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
  product: PropTypes.object,
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

SingleBusinessProduct.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
