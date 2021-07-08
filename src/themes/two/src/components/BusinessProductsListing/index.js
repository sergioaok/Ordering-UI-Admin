import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useLanguage } from 'ordering-components-admin'
import { BusinessProductListing as BusinessProductListingController } from './naked'
import { BusinessCategoryEdit } from '../BusinessCategoryEdit'
import { SearchBar } from '../SearchBar'
import BsPlusSquare from '@meronex/icons/bs/BsPlusSquare'
import BsViewList from '@meronex/icons/bs/BsViewList'
import BsTable from '@meronex/icons/bs/BsTable'
import { BusinessProductsCategories } from '../BusinessProductsCategories'
import { BusinessProductList } from '../BusinessProductList'

import {
  CategoryProductsContainer,
  HeaderContainer,
  CategoryProductsContent,
  CategoryListContainer,
  ProductListContainer,
  ProductHeader,
  AddButton,
  ActionIconList,
  ViewMethodButton
} from './styles'

const BusinessProductsListingUI = (props) => {
  const {
    categorySelected,
    searchValue,
    handleChangeCategory,
    handleChangeSearch,
    featuredProducts,
    businessState,
    setBusinessState,
    onProductRedirect,
    slug,
    categoryId
  } = props
  const [, t] = useLanguage()

  const [viewMethod, setViewMethod] = useState('list')
  const [isCategoryEdit, setIsCategoryEdit] = useState(false)

  useEffect(() => {
    if (categoryId) {
      setIsCategoryEdit(true)
    }
  }, [categoryId])

  const handleOpenEdit = () => {
    if (categorySelected?.id === null) return
    onProductRedirect && onProductRedirect({
      slug: slug,
      category: categorySelected?.id,
      product: null
    })
    setIsCategoryEdit(true)
  }

  const handleCloseEdit = () => {
    onProductRedirect && onProductRedirect({
      slug: slug,
      category: null,
      product: null
    })
    setIsCategoryEdit(false)
  }

  return (
    <>
      <CategoryProductsContainer>
        <HeaderContainer>
          <div>
            {
              businessState.loading ? (
                <h1><Skeleton width={200} height={30} /></h1>
              ) : (
                businessState?.business?.name && (
                  <h1>{businessState?.business?.name}</h1>
                )
              )
            }
          </div>
          <SearchBar
            isCustomLayout
            search={searchValue}
            onSearch={handleChangeSearch}
            placeholder={t('SEARCH', 'Search')}
          />
        </HeaderContainer>
        <CategoryProductsContent>
          <CategoryListContainer>
            {
              <BusinessProductsCategories
                {...props}
                businessState={businessState}
                categorySelected={categorySelected}
                onClickCategory={handleChangeCategory}
                featured={featuredProducts}
              />
            }
          </CategoryListContainer>
          <ProductListContainer>
            <ProductHeader>
              <div className='d-flex align-items-center'>
                <h1>{categorySelected?.name || t('ALL', 'All')}</h1>
                <AddButton onClick={handleOpenEdit}>
                  <BsPlusSquare />
                </AddButton>
              </div>

              <ActionIconList>
                <ViewMethodButton
                  active={viewMethod === 'list'}
                  onClick={() => setViewMethod('list')}
                >
                  <BsViewList />
                </ViewMethodButton>
                <ViewMethodButton
                  active={viewMethod === 'spreedsheet'}
                  onClick={() => setViewMethod('spreedsheet')}
                >
                  <BsTable />
                </ViewMethodButton>
              </ActionIconList>
            </ProductHeader>
            <BusinessProductList
              {...props}
              viewMethod={viewMethod}
            />
          </ProductListContainer>
        </CategoryProductsContent>
      </CategoryProductsContainer>
      {
        isCategoryEdit && (
          <BusinessCategoryEdit
            {...props}
            open={isCategoryEdit}
            onClose={handleCloseEdit}
            category={categorySelected}
            businessState={businessState}
            setBusinessState={setBusinessState}
          />
        )
      }
    </>
  )
}

export const BusinessProductsListing = (props) => {
  const [isInitialRender, setIsInitialRender] = useState(false)

  const businessProductslistingProps = {
    ...props,
    UIComponent: BusinessProductsListingUI,
    isInitialRender,
    handleUpdateInitialRender: (val) => setIsInitialRender(val)
  }
  return (
    <BusinessProductListingController {...businessProductslistingProps} />
  )
}
