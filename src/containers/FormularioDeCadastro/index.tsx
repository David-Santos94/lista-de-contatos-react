import { useSelector } from 'react-redux'
import Formulario from '../../components/Formulario'
import { RootReducer } from '../../store'

const FormularioDeCadastro = () => {
  const { status, id, name, email, phone } = useSelector(
    (state: RootReducer) => state.exibirFormulario
  )

  return (
    <>
      {status ? (
        <Formulario id={id} name={name} email={email} phone={phone} />
      ) : null}
    </>
  )
}

export default FormularioDeCadastro
