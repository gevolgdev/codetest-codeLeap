export interface DataProps {
  id: number,
  username: string,
  created_datetime: string,
  title: string,
  content: string,
}

export interface StateProps {
  name: string;
  activeButton: boolean;
}

export interface UserProps {
  name: string;
  activeButton: boolean;
}

export interface PostProps {
  userName?: String;
  title: string;
  content: string;
  options?: boolean;
}