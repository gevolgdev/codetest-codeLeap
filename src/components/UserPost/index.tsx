import { PostProps } from "../../types/types";
import { UserPostContainer, UserPostHeader, UserPostContent } from "./style";
import { MdDeleteForever } from 'react-icons/md'
import { BiEdit } from 'react-icons/bi'


const UserPost: React.FC<PostProps> = (props) => {
  return (
    <UserPostContainer>
      <UserPostHeader>
        <h2>{props.title}</h2>
        <div className="options">
          <button>
            <MdDeleteForever/>
          </button>
          <button>
            <BiEdit/>
          </button>
        </div>
      </UserPostHeader>

      <UserPostContent>
        <div className="details">
          <span>@{props.userName}</span>
          <span>Há 0 minutos</span>
        </div>
        <p>{props.content}</p>
      </UserPostContent>

    </UserPostContainer>
  )
};

export default UserPost;