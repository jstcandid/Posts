export interface IPost {
  title: string;
  body: string;
  author: string;
}

interface IProps {
  item: IPost;
}

export const Post = ({ item }: IProps) => {
  return (
    <div className='col'>
      <div className='p-3 border bg-light h-100 d-flex justify flex-column justify-content-between'>
        <h2>{item.title}</h2>
        <p>{item.body}</p>
        <div>
          <p>
            Author: <a href='/'>{item.author}</a>
          </p>
        </div>
      </div>
    </div>
  );
};
