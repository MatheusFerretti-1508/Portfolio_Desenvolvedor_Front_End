import ListagemProjetos from "../../components/ListagemDeProjetos"
import { ContainerProjetos, Titulo } from "./styles"

const Projetos = () => {

    return (
        <ContainerProjetos id="projetos">
            <Titulo>Meus projetos</Titulo>
            <ListagemProjetos />
        </ContainerProjetos>
    )
}

export default Projetos