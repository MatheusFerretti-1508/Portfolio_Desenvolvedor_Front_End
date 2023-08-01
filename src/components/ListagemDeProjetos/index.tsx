import { ContainerListagemPr, ImagemProjeto, Link, NomeProjeto, ParagrafoLink, ParagrafoLinkRestaurante, ParagrafoLinkSorteador, ParagrafoLinkTech, RecursosUtilizados } from "./styles"
import EbacSportsImg from './images/EbacSports.jpeg'
import ToDoReact from './images/TodoReact.jpeg'
import ToDoVue from './images/TodoVue.jpeg'
import DisneyPlus from './images/DisneyPlus.jpeg'
import EventoTech from './images/Evento.jpeg'
import Sorteador from './images/Sorteador.jpeg'
import Restaurante from './images/Restaurante.jpeg'
import Ajax from './images/Ajax.jpeg'
import GastroSpace from './images/gastrospace.png'

const ListagemProjetos = () => {
    
    return (
        <ContainerListagemPr>
                <li>
                    <ImagemProjeto src={GastroSpace} alt="" />
                    <NomeProjeto>GastroSpace</NomeProjeto>
                    <p><RecursosUtilizados>Utilização de:</RecursosUtilizados> Requisições Ajax, ReactJs, HTML5, CSS, React-router-dom, Yup, Formik, Styled-Components e React-redux</p>
                    <ParagrafoLink><Link href="https://gastrospace.vercel.app/">Clique aqui para acessar.</Link></ParagrafoLink>
                </li>
                <li>
                    <ImagemProjeto src={ToDoReact} alt="" />
                    <NomeProjeto>Lista de Tarefas React</NomeProjeto>
                    <p><RecursosUtilizados>Utilização de:</RecursosUtilizados> React, HTML5, ES6, TypeScript, Redux, Styled-Components e React-Router-Dom.</p>
                    <ParagrafoLink><Link href="https://minhas-tarefas-mf.vercel.app/">Clique aqui para acessar.</Link></ParagrafoLink>
                </li>
                <li>
                    <ImagemProjeto src={DisneyPlus} alt="" />
                    <NomeProjeto>Clone da Disney +</NomeProjeto>
                    <p><RecursosUtilizados>Utilização de:</RecursosUtilizados> HTML5, Gulp, SASS/SCSS e JavaScript.</p>
                    <ParagrafoLink><Link href="https://clone-disney-plus-ovhv.vercel.app/">Clique aqui para acessar.</Link></ParagrafoLink>
                </li>
                <li>
                    <ImagemProjeto src={EventoTech} alt="" />
                    <NomeProjeto>Evento Tech</NomeProjeto>
                    <p><RecursosUtilizados>Utilização de:</RecursosUtilizados> JavaScript, SASS/SCSS e HTML5.</p>
                    <ParagrafoLinkTech><Link href="https://evento-ebac-tech-talks.vercel.app/">Clique aqui para acessar.</Link></ParagrafoLinkTech>
                </li>
                <li>
                    <ImagemProjeto src={EbacSportsImg} alt="" />
                    <NomeProjeto>EBAC Sports</NomeProjeto>
                    <p><RecursosUtilizados>Utilização de:</RecursosUtilizados> React, HTML5, ES6, TypeScript, Redux e Styled-Components.</p>
                    <ParagrafoLink><Link href="https://ebac-sports-mf.vercel.app/">Clique aqui para acessar.</Link></ParagrafoLink>
                </li>
                <li>
                    <ImagemProjeto src={ToDoVue} alt="" />
                    <NomeProjeto>Lista de Tarefas Vue</NomeProjeto>
                    <p><RecursosUtilizados>Utilização de:</RecursosUtilizados> Vue, HTML5, ES6, Bootstrap e JavaScript.</p>
                    <ParagrafoLink><Link href="https://todolist-vue-js.vercel.app/">Clique aqui para acessar.</Link></ParagrafoLink>
                </li>
                <li>
                    <ImagemProjeto src={Sorteador} alt="" />
                    <NomeProjeto>Sorteador</NomeProjeto>
                    <p><RecursosUtilizados>Utilização de:</RecursosUtilizados> LESS, JavaScript, HTML5 e Grunt.</p>
                    <ParagrafoLinkSorteador><Link href="https://sorteador-grunt-matheus.vercel.app/">Clique aqui para acessar.</Link></ParagrafoLinkSorteador>
                </li>
                <li>
                    <ImagemProjeto src={Restaurante} alt="" />
                    <NomeProjeto>Restaurante</NomeProjeto>
                    <p><RecursosUtilizados>Utilização de:</RecursosUtilizados> Bootsrap, HTML e CSS.</p>
                    <ParagrafoLinkRestaurante><Link href="https://restaurant-project-chi.vercel.app/">Clique aqui para acessar.</Link></ParagrafoLinkRestaurante>
                </li>
                <li>
                    <ImagemProjeto src={Ajax} alt="" />
                    <NomeProjeto>Ajax</NomeProjeto>
                    <p><RecursosUtilizados>Utilização de:</RecursosUtilizados> Requisições Ajax, JavaScript, HTML5 e CSS.</p>
                    <ParagrafoLink><Link href="https://github-ajax.vercel.app/">Clique aqui para acessar.</Link></ParagrafoLink>
                </li>
            </ContainerListagemPr>
    )
}

export default ListagemProjetos