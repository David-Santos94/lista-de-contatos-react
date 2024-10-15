import styled from 'styled-components'

export const Container = styled.div`
  border: 1px solid #000;
  margin: 8px 0;
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

export const Botao = styled.button`
  padding: 5px;
  border: none;
  border-radius: 8px;
  margin-bottom: 16px;
  cursor: pointer;

  &&:hover {
    background-color: #f2eae4;
  }
`

export const BotaoEditar = styled(Botao)`
  background-color: #736f36;
  margin-right: 8px;
`

export const BotaoRemover = styled(Botao)`
  background-color: #a6866a;
`
