import { useState, ChangeEvent } from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/RootState';
import * as S from './style';
import { Header } from '../../components';
import { PostProps } from '../../types/types';

const Feed = () => {

  const userName: String = useSelector((state: RootState) => state.userName.name);

  const INITIAL_STATE_USERPOST: PostProps = {
    userName: userName,
    title: '',
    content: '',
  };
  const [userPost, setUserPost] = useState<PostProps>(INITIAL_STATE_USERPOST);
  const [listUserPost, setListUserPost] = useState<PostProps[]>([]);

  console.log(`User posts -> ${userPost}`)
  console.log(`List user posts -> ${listUserPost}`)

  const handleChangePost = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {id, value} = event.target;
    setUserPost(prev => ({...prev, [id]: value}));
  };

  const handleAddPosts = (): void => {
    setListUserPost(prev => ([...prev, userPost]));
    setUserPost(INITIAL_STATE_USERPOST)
  };

  return (
    <>
      <Header/>
      <S.FeedContainer>
        <S.PostForm>
          <h1>What’s on your mind?</h1>
          <S.Forms>
            <S.InputContainer>
              <label>Title</label>
              <input
                value={userPost.title}
                onChange={handleChangePost}
                id='title'
                type='text' placeholder='Hello World'
              />
            </S.InputContainer>

            <S.InputContainer>
              <label>Content</label>
              <textarea
                value={userPost.content}
                onChange={handleChangePost}
                id='content'
                placeholder='Content here'
              />
            </S.InputContainer>
          </S.Forms>

          <S.Button onClick={handleAddPosts}>
            Create
          </S.Button>

        </S.PostForm>

        {
          listUserPost.map(item => (
            <>
              <span>@{item.userName}</span>
              <span>Title:{item.title}</span>
              <span>Content:{item.content}</span>
            </>
          )).reverse()
        }
      </S.FeedContainer>
    </>
  )
}

export default Feed