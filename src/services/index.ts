import {IComment, IPost, IUser} from '../interface';

export const handleGetPosts = async (): Promise<IPost[]> => {
  return fetch('https://gorest.co.in/public/v2/posts').then(res => {
    return res.json();
  });
};

export const handleGetUser = async (userId: number): Promise<IUser> => {
  return fetch(`https://gorest.co.in/public/v2/users/${userId}`).then(res => {
    return res.json();
  });
};

export const handleGetComments = async (
  postId: number,
): Promise<IComment[]> => {
  return fetch(`https://gorest.co.in/public/v2/posts/${postId}/comments`).then(
    res => {
      return res.json();
    },
  );
};
