import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import EstiloGlobal, { Container, TituloPrincipal } from './styles'
import ListaDeContatos from './containers/ListaDeContatos'
import FormularioDeCadastro from './containers/FormularioDeCadastro'
import BotaoAdicionar from './components/BotaoAdicionar'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <TituloPrincipal>Minha Lista de Contatos</TituloPrincipal>{' '}
        <BotaoAdicionar />
        <FormularioDeCadastro />
        <ListaDeContatos />
      </Container>
    </Provider>
  )
}

export default App
