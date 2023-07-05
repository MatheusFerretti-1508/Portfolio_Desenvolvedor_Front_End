import { styled } from "styled-components";

export const ContainerProjetos = styled.div`
    margin-top: 80px;
    display: grid;
    justify-content: flex-end;
    transition: all ease .8s;

    &:hover {
    transform: translateX(-10px);
}
`

export const Titulo = styled.h2`
    font-size: 40px;
    display: flex;
    justify-content: right;
    transition: all ease .8s;
    border-bottom: 2px solid #000;

    @media (max-width: 767px) {
        font-size: 32px;
    }

/* &:hover {
    transform: translateX(-10px);
} */
`