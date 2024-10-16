import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type exibirState = {
  status?: boolean
  id: number
  name: string
  email: string
  phone: string
}

const initialState: exibirState = {
  status: false,
  id: 0,
  name: '',
  email: '',
  phone: ''
}

const exibeFormularioSlice = createSlice({
  name: 'exibeFormulario',
  initialState,
  reducers: {
    exibir: (state, action: PayloadAction<boolean>) => {
      state.status = action.payload
    },
    editar: (state, action: PayloadAction<exibirState>) => {
      state.status = action.payload.status
      state.id = action.payload.id
      state.name = action.payload.name
      state.email = action.payload.email
      state.phone = action.payload.phone
    }
  }
})

export const { exibir, editar } = exibeFormularioSlice.actions
export default exibeFormularioSlice.reducer
