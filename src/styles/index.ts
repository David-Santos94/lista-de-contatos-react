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
  margin: 60px 0;
`

export const Button = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  cursor: pointer;
`

export const Input = styled.input`
  margin: 5px 0;
  padding: 10px;
  width: 100%;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 10px auto;
`

export const List = styled.ul`
  list-style: none;
  padding: 0;
`

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  padding: 10px;
  background-color: #f0f0f0;
`
export default EstiloGlobal
