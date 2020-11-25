import styled from 'styled-components'

export const WrapperPagination = styled.div`
    display: flex;
    align-items: center;
    column-gap: 7px;
`
export const PageButton = styled.button`
    outline: none;
    border: 1px solid #00000029;
    border-radius: 100%;
    background: transparent;
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &.active {
        background: #1c202e;
        color: #fff;
    }
`