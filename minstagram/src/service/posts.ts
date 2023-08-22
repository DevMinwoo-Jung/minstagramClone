import { client } from "./sanity";
// import imageUrlBuilder from '@sanity/image-url';

// const builder = imageUrlBuilder(client)

// function urlFor(source:string) {
//   return builder.image(source)
// }

export async function getPosts(userName: string) {
  console.log(userName)
  return client.fetch(`
    *[_type == "post"]
  `);
}