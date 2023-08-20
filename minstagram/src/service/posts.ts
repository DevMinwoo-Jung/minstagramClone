import { client } from "./sanity";
// import imageUrlBuilder from '@sanity/image-url';

// const builder = imageUrlBuilder(client)

// function urlFor(source:string) {
//   return builder.image(source)
// }

type PostType = {
  author: string;
  photo: string;
  likes: string[];
  comments: string;
}



export async function getPosts(userName: string){
  return client.fetch(`
    *[_type == "posts" && author.ref in *[type=="auhor" && name==${userName}].id ]{...}
  `);
}