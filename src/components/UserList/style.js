import styled, { css } from 'styled-components'

export const UserListContainer = styled.table`
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0px 2px 2px #00000029;
  flex-grow: 1;
  border-collapse: collapse;
  width: 100%;
  .email-section {
      display: none;
  }

  @media (min-width: 769px){
    .email-section {
      display: block;
    }
  }
`

export const UserListHeader = styled.thead`
  border-bottom: 1px solid #f5f2f2;
`
export const HeaderTR = styled.tr`
${({ isLoading }) => isLoading && css`
  th > div {
    justify-content: center;
  }
`};
`

export const UserListTR = styled.tr`
&:hover {
  border: 1px solid ${props => props.theme.colors.primary} !important;
}
`
export const UserListHeaderItem = styled.th`
`
export const HeaderItemContent = styled.div`
  padding: 15px 0px;
  display: flex;
  align-items: center;
`

export const HeaderItemEditContent = styled.div`
  padding: 15px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    font-size: 24px;
  }
`
export const HeaderItemActionContent = styled.div`
  padding: 15px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const UserListBody = styled.tbody`
  border: 1px solid transparent;
  border-bottom: 1px solid #fbfafa;
`

export const UserListBodyItem = styled.td`
`

export const BodyItemContent = styled.div`
  padding: 20px 0px;
  display: flex;
  align-items: center;
  font-size: 12px;

  @media (min-width: 769px){
    font-size: 14px;
  };

  .default-user-avatar {
    font-size: 24px;
    margin: ${props => props.theme?.rtl ? '0px 0px 0px 10px' : '0px 10px 0px 0px'};
  }
`

export const BodyCheckSection = styled.div`
  padding: 20px 0px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 20px;
  }

  .pending-check-status {
    display: none;
    color: #38a1f4;
  }
`

export const UserListFooter = styled.tfoot`
`

export const UserAvatarSection = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 3px;
  margin-right: 5px;
  overflow: hidden;
  background-size: cover;
  background-position: center;
`

export const UserListStatusRound = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: ${props => props.theme?.rtl ? '0px 0px 0px 10px' : '0px 10px 0px 0px'};
  background: ${({ active }) => active ? '#0e9b55' : '#da4a54'};
`

export const BodyActionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const BodyActionContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 5px;
  background: #e5e5e5;
  border-radius: 20px;

  .remove-svg,
  .edit-svg{
    font-size: 19px;
    display: none;
  }

  .edit-svg {
    font-size: 22px;
  }

  &: hover {
    .remove-svg, .edit-svg{
      display: block;
    }
    .more-svg {
      display: none;
    }
  }
`

export const UserListFoot = styled.tfoot`
  tr {
    border-top: 1px solid #fbfafa;
  }
`

export const PaginationList = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 10px 5px;

  svg {
    color: #d3d3d3;
    cursor: pointer;
    font-size: 20px;
  }
`

export const PaginationItem = styled.span`
  font-size: 12px;
  margin-right: 10px;
  cursor: pointer;
  color: ${({ active }) => active ? '#38a1f4' : '#d3d3d3'};
`
export const EmptyWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;

  img {
    width: 200px;
  }
`

export const SkeletonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  span {
    display: flex;
    &.item-text {
      margin-left: 10px;
    }
  }
`
export const SpinnerLoadWrapper = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
`
