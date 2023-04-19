import styled from 'styled-components';

export const FeedContainer = styled.section`
  width: 800px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  background: white;
`

export const PostForm = styled.div`
  display: flex;
  border: 1px solid #999999;
  flex-direction: column;
  border-radius: 16px;
  gap: 20px;
  padding: 30px;
`

export const Forms = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  input {
    font-family: Roboto;
    font-size: 1rem;
    padding: 10px;
    outline: none;
    border: 1px solid #777777;
    border-radius: 8px;
    &::placeholder {
      opacity: 50%;
      font-size: .9rem;
    }
  }
  textarea {
    font-family: Roboto;
    font-size: 1rem;
    padding: 10px;
    outline: none;
    border: 1px solid #777777;
    border-radius: 8px;
    height: 74px;
    &::placeholder {
      opacity: 50%;
      font-size: .9rem;
    }
  }
`

export const Button = styled.button`
  display: flex;
  margin-left: auto;
  background: #7695EC;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  padding: 7px 25px;
`