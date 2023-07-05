import styled from "styled-components"


export const Listagem = styled.ul`
    display: flex;
    justify-content: space-around;
`

export const ItemDaListagem = styled.li`
    display: flex;
    transition: all ease 0.6s;
    font-size: 16px;
    &:hover {
        transform: scale(1.3);
    }
    @media (max-width: 767px) {
        font-size: 14px;
    }
`

export const Link = styled.a`
    text-decoration: none;
    /* color: #fff; */
    color: #000;
`