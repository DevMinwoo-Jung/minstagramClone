import { client, urlFor } from "./sanity";

export async function getPostDetail(postId: string) {
  return client
    .fetch(
      `*[_type == "post" && _id == "${postId}"][0]{
      ...,
      "username": author->username,
      "userImage": author->image,
      "image": photo,
      "likes": likes[]->username,
      comments[]{comment, "username": author->username, "image": author->image},
      "id":_id,
      "createdAt":_creatdAt
    }`
    )
    .then((post) => ({ ...post, image: urlFor(post.image) }));
}