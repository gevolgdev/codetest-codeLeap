import {useState, useEffect} from 'react';
import { PostsContainer } from './style';
import api from '../../actions/api';
import { DataProps } from '../../types/types';
import UserPost from '../UserPost';

const AllPosts = () => {

  const [listPosts, setListPosts] = useState<DataProps[]>([]);

  useEffect(() => {
    api.get('/careers/')
      .then(res => (setListPosts(res.data.results), console.log(res.data.results)))
      .catch(err => console.log(err))
  }, []);


  return (
    <PostsContainer>
      {listPosts.map((post) => (
        <UserPost
          key={post.id}
          title={post.title}
          content={post.content}
          userName={post.username}
        />
      ))}
    </PostsContainer>
  )
}

export default AllPosts;