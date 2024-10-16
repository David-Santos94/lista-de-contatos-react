import { useDispatch, useSelector } from 'react-redux'
import { AdicionarContato, Legenda } from './styles'
import { exibir } from '../../store/reducer/exibeFormularioSlice'
import { RootReducer } from '../../store'

const BotaoAdicionar = () => {
  const dispatch = useDispatch()
  const { status } = useSelector((state: RootReducer) => state.exibirFormulario)

  return (
    <>
      {status ? null : (
        <>
          <AdicionarContato
            onClick={() => {
              dispatch(exibir(true))
            }}
          >
            +
          </AdicionarContato>
          <Legenda>Novo Contato</Legenda>
        </>
      )}
    </>
  )
}

export default BotaoAdicionar
