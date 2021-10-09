import styled from 'styled-components'

export const Wrapper = styled.div`
    padding: 10px;
    background-color: #cfcfcf;
    text-align: center;
    
`

export const CartItem = styled.div`
    display: grid;
    gap: 10px;
    grid-template-columns: 20px 1fr 40px;
    align-items: center;
    font-size: 12px;
    text-align: left;
    padding: 10px 0;
    border-bottom: 1px solid #efefff;
`
export const CartList = styled.div`
    height: 350px;
    overflow-y: scroll;
    padding: 5px;
    background-color: #fff;
    margin-top: 10px;
`

export const CartBtn = styled.div`
    padding: 2px 4px;
    text-align: center;
    background-color: #2F4050;
    color: #fff;
    cursor: pointer;
`
export const BarcodeInput = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    background-color: #fff;
    padding: 10px;
    & input{
        outline: none;
        border: none;
        color: #2F4050;
    }
`