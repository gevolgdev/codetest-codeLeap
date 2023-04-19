import styled from 'styled-components';


export const Container = styled.section`
  width: 1128px;
  height: 80vh;
  margin: 0 auto;
  display: flex;
  align-items: center; justify-content: center;
`

export const Content = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  background: white;
  width: 500px;
  padding: 35px;
  border-radius: 16px;
  gap: 20px;
  filter: drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08));
  
  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  `

export const Title = styled.h1`
  font-size: 1.5rem;
  `

export const Input = styled.input`
  width: 100%;
  border-radius: 5px;
  font-size: 1rem;
  padding: 8px;
  border: solid 1px #1e1e1e;
  outline: none;
  font-family: Roboto;
  
  &::placeholder{
    opacity: 50%;
  }
  `
interface StyleProps extends React.HTMLAttributes<HTMLButtonElement> {
  activeButton: boolean;
}

export const Button = styled.button<StyleProps>`
  display: flex;
  margin-left: auto;
  background: ${props => props.activeButton ? '#7695EC' : '#8e8e8e'};
  cursor: ${props => props.activeButton && 'pointer'};
  /* background: #7695EC; */
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  padding: 7px 25px;
`