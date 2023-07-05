import { styled } from "styled-components";

export const ContainerQuemSou = styled.div`
    margin-top: 80px;
    /* display: grid;
    grid-template-columns: 70% 30%;
    grid-gap: 32px; */
    width: 70%;

    transition: all ease .8s;

&:hover {
    transform: translateX(10px);
}
`

export const Titulo = styled.h2`
    font-size: 40px;
    border-bottom: 2px solid #000;

    @media (max-width: 767px) {
        font-size: 32px;
    }
`

export const Texto = styled.p`
    line-height: 28px;
    text-align: justify;

    @media (max-width: 767px) {
        font-size: 14px;
    }
`

// export const Imagem = styled.img`
//     padding: 8px;
//     width: 100px;
//     height: 250px;
//     width: 100%;
//     border-right: 2px #000 solid;
//     border-bottom: 2px #000 solid;
// `