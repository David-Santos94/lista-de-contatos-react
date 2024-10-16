import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const TituloPrincipal = styled.h1`
  text-align: center;
  margin: 16px 0;
`
export const Botao = styled.button`
  padding: 12px 5px;
  width: 100px;
  border: none;
  border-radius: 8px;
  margin-bottom: 16px;
  cursor: pointer;

  &&:hover {
    background-color: #f2eae4;
  }
`

export const BotaoEditarCadastrar = styled(Botao)`
  background-color: #736f36;
  margin-right: 8px;
`
export default EstiloGlobal
