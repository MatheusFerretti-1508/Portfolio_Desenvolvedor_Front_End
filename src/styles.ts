import {createGlobalStyle, styled} from 'styled-components'

const EstiloGlobal = createGlobalStyle`
    * {
    padding: 0;
    margin:0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    list-style: none;
    }

    body {
        background-color: #ebebeb;
    }
`

export const Container = styled.div`
    @media (max-width: 767px) {
        width: 90%;
    }
    max-width: 1024px;
    margin: 0 auto;
`

export default EstiloGlobal