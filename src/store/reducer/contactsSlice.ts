import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Contato = {
  id: number
  name: string
  email: string
  phone: string
}

type ContatosState = {
  list: Contato[]
}

const initialState: ContatosState = {
  list: [
    {
      id: 1,
      name: 'david',
      email: 'david@email',
      phone: '1234567889'
    },
    {
      id: 2,
      name: 'mayara',
      email: 'mayara@email',
      phone: '1234567889'
    },
    {
      id: 3,
      name: 'barry',
      email: 'barry@email',
      phone: '1234567889'
    },
    {
      id: 4,
      name: 'cookie',
      email: 'cookie@email',
      phone: '1234567889'
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    addContato: (state, action: PayloadAction<Contato>) => {
      state.list.push(action.payload)
    },
    removeContato: (state, action: PayloadAction<number>) => {
      state.list = state.list.filter((contato) => contato.id !== action.payload)
    },
    editContato: (state, action: PayloadAction<Contato>) => {
      const index = state.list.findIndex(
        (contato) => contato.id === action.payload.id
      )
      if (index !== -1) {
        state.list[index] = action.payload
      }
    }
  }
})

export const { addContato, removeContato, editContato } = contatosSlice.actions
export default contatosSlice.reducer
