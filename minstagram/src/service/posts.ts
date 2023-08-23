import { SimplePost } from "@/types/model/post";
import { client, urlFor } from "./sanity";
// import imageUrlBuilder from '@sanity/image-url';

// const builder = imageUrlBuilder(client)

// function urlFor(source:string) {
//   return builder.image(source)
// }

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

export async function getPosts(userName: string) {
  return client
    .fetch(
      `*[_type =="post" && author->username == "${userName}"
          || author._ref in *[_type == "user" && username == "${userName}"].following[]._ref]
          | order(_createdAt desc){
          ${simplePostProjection}
        }`
    )
}
