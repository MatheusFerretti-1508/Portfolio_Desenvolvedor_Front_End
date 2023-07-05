import { styled } from "styled-components";

export const ContainerHabilidades = styled.div`
    margin-top: 80px;
    margin-bottom: 40px;
    max-width: 70%; 
    width: 100%;
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
