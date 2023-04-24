import { useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Content, Title, Input, Button } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { userNameReducer } from '../../redux/reducers/userNameSlice';
import { UserProps } from '../../types/types';
import { RootState } from '../../redux/RootState';

const SignUp = () => {

  const INITIAL_STATE_USERNAME: UserProps = {name: '', activeButton: false};
  const [userName, setUserName] = useState<UserProps>(INITIAL_STATE_USERNAME);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  // const userNameSelect: string = useSelector((state: RootState) => state.userName.name);

  const handleSaveUserName = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    setUserName((prev) => ({...prev, name: value}));
  };

  const handleClickUserName = (): void => {
    dispatch(userNameReducer(userName.name));
    setUserName(INITIAL_STATE_USERNAME);
    navigate('/feed')
  };

  return (
    <Container>
      <Content>
        <Title>Welcome to CodeLeap network!</Title>
        <div>
          <label>Please enter your username</label>
          <Input
            value={userName.name}
            onChange={handleSaveUserName}
            type='text' 
            placeholder='Type here...'
          />
        </div>
        <Button
          disabled={!userName.name}
          onClick={handleClickUserName}
          activeButton={!!userName.name}
        >
          Enter
        </Button>
      </Content>
    </Container>
  )
}

export default SignUp