import { FormEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addContato } from '../../store/reducer/contactsSlice'
import { RootReducer } from '../../store'

const Formulario = () => {
  const { list } = useSelector((state: RootReducer) => state.contatos)
  const dispatch = useDispatch()
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  const cadastrarOuEditar = (evento: FormEvent) => {
    evento.preventDefault()

    const ultimoContato = list[list.length - 1]
    const novoID = ultimoContato ? ultimoContato.id + 1 : 1

    dispatch(
      addContato({
        id: novoID,
        name: nome,
        email,
        phone: telefone
      })
    )
  }

  return (
    <form onSubmit={cadastrarOuEditar}>
      <input
        type="text"
        value={nome}
        onChange={(evento) => setNome(evento.target.value)}
        placeholder="Nome"
      />
      <input
        type="email"
        value={email}
        onChange={(evento) => setEmail(evento.target.value)}
        placeholder="E-mail"
      />
      <input
        type="tel"
        value={telefone}
        onChange={(evento) => setTelefone(evento.target.value)}
        placeholder="Telefone"
      />
      <button type="submit">Cadastrar</button>
    </form>
  )
}

export default Formulario
