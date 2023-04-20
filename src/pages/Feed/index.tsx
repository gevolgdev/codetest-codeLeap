import { useState, ChangeEvent } from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/RootState';
import * as S from './style';
import { Header, UserPost } from '../../components';
import { PostProps } from '../../types/types';
import { useDispatch } from 'react-redux';
import { addNewPostReducer } from '../../features/userPostSlice';

const Feed = () => {

  const userName: String = useSelector((state: RootState) => state.userName.name);
  const listUserPosts: PostProps[] = useSelector((state: RootState) => state.newPost);
  const newListUserPosts: PostProps[] = listUserPosts.slice(1)
  const dispatch = useDispatch();

  const INITIAL_STATE_USERPOST: PostProps = { userName: userName, title: '', content: '' };
  const [userPost, setUserPost] = useState<PostProps>(INITIAL_STATE_USERPOST);

  const handleChangePost = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {id, value} = event.target;
    setUserPost(prev => ({...prev, [id]: value, userName: userName}));
  };

  const handleAddPosts = (): void => {
    dispatch(addNewPostReducer(userPost))
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

        <S.PostsContainer>
          {newListUserPosts.map(item => (
              <UserPost {...item}/>
            )).reverse()}
        </S.PostsContainer>

      </S.FeedContainer>
    </>
  )
}

export default Feed;