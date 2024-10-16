import styled from 'styled-components'

export const AdicionarContato = styled.button`
  width: 60px;
  height: 60px;
  font-size: 30px;
  padding-bottom: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-bottom: 8px;
  border: none;
  background-color: #736f36;
  color: #f2eae4;
  cursor: pointer;

  &&:hover {
    transform: scale(1.1);
  }
`

export const Legenda = styled.span`
  margin-bottom: 60px;
`
