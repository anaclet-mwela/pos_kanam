import styled from 'styled-components'

export const Nav = styled.nav`
    height: 100vh;
    background-color: #2F4050;
    color: #fff;
`
export const MenuList = styled.ul`
    padding: 0;
    margin-top: 20px;
    width: 100%;
    height: auto;
    liste-style-type: none;
`


export const MenuItem = styled.li`
    width:100%;
    height:50px;
    margin:0;
    padding: 10px;
    display: flex;
    align-items: center;
    cursor: pointer;
    gap: 10px;

    &:hover{
        background-color: #293046;
    }
`