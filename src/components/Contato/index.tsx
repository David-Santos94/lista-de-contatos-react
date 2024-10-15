import { useDispatch } from 'react-redux'
import {
  Contato as Props,
  removeContato
} from '../../store/reducer/contactsSlice'
import {
  BotaoEditar,
  BotaoRemover,
  Botoes,
  Container,
  ContatoItem,
  Item
} from './styles'

const Contato = ({ id, name, email, phone }: Props) => {
  const dispatch = useDispatch()

  return (
    <Container>
      <ContatoItem>
        <Item>{name}</Item>
        <Item>{email}</Item>
        <Item>{phone}</Item>
      </ContatoItem>
      <Botoes>
        <BotaoEditar>Editar</BotaoEditar>
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
