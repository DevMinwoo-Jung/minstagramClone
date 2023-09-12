import { SimplePost } from "@/types/model/post";
import { client, urlFor } from "./sanity";

const simplePostProjection = `
    ...,
    "username": author->username,
    "userImage": author->image,
    "image": photo,
    "likes": likes[]->username,
    "text": comments[0].comment,
    "comments": count(comments),
    "id":_id,
    "createdAt":_createdAt
`;

export async function getPosts(postId: string) {
  return client
    .fetch(
      `*[_type =="post" && _id == "${postId}"]`
    ).then((posts) =>
    posts.map((post: SimplePost) => ({ ...post, image: urlFor(post.image) }))
  );
}