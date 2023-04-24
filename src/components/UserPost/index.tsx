import { useState, useEffect } from 'react';
import { PostProps } from "../../types/types";
import { UserPostContainer, UserPostHeader, UserPostContent } from "./style";
import { MdDeleteForever } from 'react-icons/md';
import { BiEdit } from 'react-icons/bi';


const UserPost: React.FC<PostProps> = (props) => {

  const [time, setTime] = useState(0);
  const minute: number = 60000;
  
  useEffect(() => {
    const id = setInterval(() => {
      setTime(prev => prev + 1);
    }, minute);
  
    return () => clearInterval(id);
  }, []); 
  
  return (
    <UserPostContainer>
      <UserPostHeader>
        <h2>{props.title}</h2>
        
        {props.options && (
          <div className="options">
            <button>
              <MdDeleteForever/>
            </button>
            <button>
              <BiEdit/>
            </button>
          </div>
        )}
      </UserPostHeader>

      <UserPostContent>
        <div className="details">
          <span>@{props.userName}</span>
          <span>
            {`
              Há ${time}
              ${time === 1 ? `minuto` : `minutos`}
            `}
          </span>
        </div>
        <p>{props.content}</p>
      </UserPostContent>

    </UserPostContainer>
  )
};

export default UserPost;