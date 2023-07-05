import { Listagem, ItemDaListagem, Link } from "./styles"

const ListagemHeader = () => {
    return (
        <Listagem>
            <ItemDaListagem>
                <Link href="#sobre-mim">Sobre mim</Link>
            </ItemDaListagem>
            <ItemDaListagem>
                <Link href="#projetos">Projetos</Link>
            </ItemDaListagem>
            <ItemDaListagem>
                <Link href="#habilidades">Habilidades</Link>
            </ItemDaListagem>
        </Listagem>
    )
}

export default ListagemHeader