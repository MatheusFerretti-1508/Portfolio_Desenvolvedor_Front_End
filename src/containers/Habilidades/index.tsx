import ListagemDeHabilidades from "../../components/ListagemDeHabilidades"
import { ContainerHabilidades, Titulo } from "./styles"

const Habilidades = () => {

    return (
        <ContainerHabilidades id="habilidades">
            <Titulo>Habilidades</Titulo>
            <ListagemDeHabilidades />
        </ContainerHabilidades>
    )
}

export default Habilidades