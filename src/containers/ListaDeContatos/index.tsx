import { useSelector } from 'react-redux'
import Contato from '../../components/Contato'
import { RootReducer } from '../../store'
import { Legenda, Lista, ListaItem } from './styles'

const ListaDeContatos = () => {
  const { list } = useSelector((state: RootReducer) => state.contatos)

  return (
    <>
      <Legenda>
        <h2>Nome</h2>
        <h2>E-mail</h2>
        <h2>Telefone</h2>
      </Legenda>
      <Lista>
        {list.map((l) => (
          <ListaItem key={l.id}>
            <Contato id={l.id} name={l.name} email={l.email} phone={l.phone} />
          </ListaItem>
        ))}
      </Lista>
    </>
  )
}

export default ListaDeContatos
