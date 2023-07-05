import styled from "styled-components";

export const ListagemHabilidades = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 20px;
    font-size: 16px;

    img {
        height: 40px;
        width: auto;
    }

    @media (max-width: 767px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin-top: 20px;
        font-size: 14px;
    }
`

export const ItemListagem = styled.li`
    display: flex;
    align-items: center;
    line-height: 40px;
    margin-bottom: 16px;
`

export const Conhecimento = styled.p`
    width: 100px;
`

export const ImgGrunt = styled.img`
    height: 40px;
    width: auto;
    margin-left: 4px;
`

export const ImgJs = styled.img`
    height: 40px;
    width: auto;
    margin-left: -16px;
`

export const ImgCss = styled.img`
    height: 40px;
    width: auto;
    margin-left: 6px;
`

export const ImgGulp = styled.img`
    height: 40px;
    width: auto;
    margin-left: 10px;
`
