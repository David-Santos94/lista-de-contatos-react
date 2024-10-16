import { configureStore } from '@reduxjs/toolkit'
import contatosReducer from './reducer/contactsSlice'
import exibeFormularioReducer from './reducer/exibeFormularioSlice'

const store = configureStore({
  reducer: {
    contatos: contatosReducer,
    exibirFormulario: exibeFormularioReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
