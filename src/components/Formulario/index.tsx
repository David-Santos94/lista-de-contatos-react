import { FormEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addContato, editContato } from '../../store/reducer/contactsSlice'
import { RootReducer } from '../../store'
import { Cadastro, Campo, Titulo } from './styles'
import { BotaoEditarCadastrar } from '../../styles'
import {
  editar,
  exibirState as Props
} from '../../store/reducer/exibeFormularioSlice'

const Formulario = ({ id, name, email, phone }: Props) => {
  const dispatch = useDispatch()
  const { list } = useSelector((state: RootReducer) => state.contatos)
  const [nomeInput, setNomeInput] = useState(name)
  const [emailInput, setEmailInput] = useState(email)
  const [telefone, setTelefone] = useState(phone)

  const cadastrarOuEditar = (evento: FormEvent) => {
    evento.preventDefault()
    const ultimoContato = list[list.length - 1]
    const novoID = ultimoContato ? ultimoContato.id + 1 : 1

    {
      id
        ? (dispatch(
            editContato({
              id,
              name: nomeInput,
              email: emailInput,
              phone: telefone
            })
          ),
          dispatch(
            editar({
              status: false,
              id: 0,
              name: '',
              email: '',
              phone: ''
            })
          ))
        : dispatch(
            addContato({
              id: novoID,
              name: nomeInput,
              email: emailInput,
              phone: telefone
            }),
            dispatch(
              editar({
                status: false,
                id: 0,
                name: '',
                email: '',
                phone: ''
              })
            )
          )
    }
  }

  return (
    <Cadastro onSubmit={cadastrarOuEditar}>
      <Titulo>{id ? <>Editar Contato</> : <>Novo Contato</>}</Titulo>
      <Campo
        type="text"
        value={nomeInput}
        onChange={(evento) => setNomeInput(evento.target.value)}
        placeholder="Nome"
      />
      <Campo
        type="email"
        value={emailInput}
        onChange={(evento) => setEmailInput(evento.target.value)}
        placeholder="E-mail"
      />
      <Campo
        type="tel"
        value={telefone}
        onChange={(evento) => setTelefone(evento.target.value)}
        placeholder="Telefone"
      />
      <BotaoEditarCadastrar type="submit">
        {id ? <>Editar</> : <>Cadastrar</>}
      </BotaoEditarCadastrar>
    </Cadastro>
  )
}

export default Formulario
