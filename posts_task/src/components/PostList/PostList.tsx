import { useEffect, useState } from 'react';
import { Post } from '../Post/Post';

export const PostList = () => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    Promise.all([
      fetch('https://jsonplaceholder.typicode.com/posts').then((response) =>
        response.json()
      ),
      fetch('https://jsonplaceholder.typicode.com/users').then((response) =>
        response.json()
      ),
    ]).then((res) => {
      res[0].map((post: any) => {
        const auth = res[1].filter((auth: any) => auth.id === post.userId);
        const newPost = [
          { title: post.title, body: post.body, author: auth[0].name },
        ];
        setPosts((posts) => [...posts, newPost[0]]);
      });
    });
  }, []);

  return (
    <>
      {posts.map((item: any) => (
        <Post item={item} />
      ))}
    </>
  );
};
