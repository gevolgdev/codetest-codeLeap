import { useState, ChangeEvent } from 'react'
import { Container, Content, Title, Input, Button } from './style'

interface UserProps {
  name: string;
  activeButton: boolean;
}

const SignUp = () => {

  const INITIAL_STATE_USERNAME: UserProps = {name: '', activeButton: false}
  const [userName, setUserName] = useState<UserProps>(INITIAL_STATE_USERNAME)

  const handleSaveUserName = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    setUserName({name: value, activeButton: true})
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
          disabled={userName.activeButton}
          onClick={() => console.log('Clicou!')}
          activeButton={userName.activeButton}
        >
          Enter
        </Button>
      </Content>
    </Container>
  )
}

export default SignUp