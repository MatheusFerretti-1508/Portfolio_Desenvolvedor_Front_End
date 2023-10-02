import styled from "styled-components";

export const ContainerListagemPr = styled.ul`
    display: grid;
    justify-content: center;
    grid-template-columns: 400px 400px;
    width: 100%;
    gap: 24px;
    margin-top: 40px;

    @media (max-width: 767px) {
        display: grid;
        grid-template-columns: 320px;
        margin: 0 auto;
        margin-top: 40px;

        li {
            font-size: 14px;
        }
    }
`

export const ImagemProjeto = styled.img`
    height: 200px;
    width: 400px;
    border: 2px solid #000;
    border-radius: 8px;
    position: relative;

    @media (max-width: 767px) {
        height: 200px;
        width: 300px;   
    }   
/* 
    &:hover {
        content: 'oiola';
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(0,0,0,0.73);
    } */
`

export const NomeProjeto = styled.h4`
    font-size: 18px;

    @media (max-width: 767px) {
        font-size: 18px ;
    }
`

export const RecursosUtilizados = styled.span`
    text-decoration: underline;
`

export const ParagrafoLink = styled.p`
    display: flex;
    justify-content: center;
    margin-top: 8px;
`

export const ParagrafoLinkRestaurante = styled.p`
    display: flex;
    justify-content: center;
    margin-top: 33px;
`

export const ParagrafoLinkTech = styled.p`
    display: flex;
    justify-content: center;
    margin-top: 35px;
`

export const ParagrafoLinkSorteador = styled.p`
    display: flex;
    justify-content: center;
    margin-top: 33px;
`

export const Link = styled.a`
    text-decoration: none;
    background-color: #000;
    color: #fff;
    border-radius: 16px;
    padding: 6px;
    display: flex;
    justify-content: center;

    &:hover {
        background-color: rgba(0,0,0, 0.8);
    }

    @media (max-width: 767px) {
        margin-bottom: 24px;
    }
`
