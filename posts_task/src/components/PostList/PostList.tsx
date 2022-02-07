import { useEffect, useState } from 'react';
import { Post, IPost } from '../Post/Post';

export const PostList = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    Promise.all([
      fetch('https://jsonplaceholder.typicode.com/posts').then((response) =>
        response.json()
      ),
      fetch('https://jsonplaceholder.typicode.com/users').then((response) =>
        response.json()
      ),
    ]).then((res) => {
      const newPosts = res[0].map((post: any) => {
        const auth = res[1].find((auth: any) => auth.id === post.userId);
        return { title: post.title, body: post.body, author: auth.name };
      });
      setPosts(newPosts);
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
