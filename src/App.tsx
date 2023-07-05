import Habilidades from "./containers/Habilidades"
import Header from "./containers/Header"
import Projetos from "./containers/Projetos"
import QuemSou from "./containers/QuemSou"
import EstiloGlobal, { Container } from "./styles"

function App() {

  return (
    <>
      <EstiloGlobal />
      <Container>
        <Header />
        <QuemSou />
        <Projetos />
        <Habilidades />
      </Container>
    </>
  )
}

export default App
