import styled from 'styled-components'
import { Botao } from '../../styles'

export const Container = styled.div`
  border: 1px solid #000;
  margin: 8px;
`

export const ContatoItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  margin: 16px 0;
`

export const Item = styled.span`
  background-color: #f2eae4;
  border: 1px solid #000;
  border-radius: 5px;
  width: 90%;
  text-align: center;
`
export const Botoes = styled.div`
  display: flex;
  justify-content: end;
  margin-right: 16px;
`

export const BotaoRemover = styled(Botao)`
  background-color: #a6866a;
  width: 100px;
`
