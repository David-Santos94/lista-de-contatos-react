import { useDispatch } from 'react-redux'
import {
  Contato as Props,
  removeContato
} from '../../store/reducer/contactsSlice'
import { BotaoRemover, Botoes, Container, ContatoItem, Item } from './styles'

import { BotaoEditarCadastrar } from '../../styles'
import { editar } from '../../store/reducer/exibeFormularioSlice'

const Contato = ({ id, name, email, phone }: Props) => {
  const dispatch = useDispatch()

  function editarContato() {
    const objetoDispatch = {
      status: true,
      id,
      name,
      email,
      phone
    }
    dispatch(editar(objetoDispatch))
  }

  return (
    <Container>
      <ContatoItem>
        <Item>{name}</Item>
        <Item>{email}</Item>
        <Item>{phone}</Item>
      </ContatoItem>
      <Botoes>
        <BotaoEditarCadastrar onClick={() => editarContato()}>
          Editar
        </BotaoEditarCadastrar>
        <BotaoRemover
          onClick={() => {
            dispatch(removeContato(id))
          }}
        >
          Remover
        </BotaoRemover>
      </Botoes>
    </Container>
  )
}

export default Contato
