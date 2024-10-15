import { configureStore } from '@reduxjs/toolkit'
import contatosReducer from './reducer/contactsSlice'

const store = configureStore({
  reducer: {
    contatos: contatosReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
