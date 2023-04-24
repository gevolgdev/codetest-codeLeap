import styled from 'styled-components';

export const UserPostContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #999999;
  border-radius: 16px;
` 

export const UserPostHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 25px;
  background: #7695EC;
  border-radius: 16px 16px 0px 0px;

  h2 {
    color: white;
    font-weight: 500;
    overflow: auto;
  }

  .options {
    display: flex;
    flex-direction: row;
    gap: 10px;
    button {
      background: transparent;
      border: none;
      color: white;
      font-size: 1.7rem;
    }
  }
` 

export const UserPostContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;

  .details {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    span {
      color: #777777;
    }
  }
  p {
    font-size: 1.2rem;
  }
`