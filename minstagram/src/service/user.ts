import { client } from "./sanity";

type OAuthUser = {
  id: string;
  email: string;
  name: string;
  username: string;
  image?: string | null;
}

export async function addUser({id, username, email, image, name}: OAuthUser){
  return client.createIfNotExists({
    _id: id,
    _type: 'user',
    username,
    email,
    image,
    name,
    following: [],
    followers: [],
    bookmarks: [],
  })
}

export async function getUserByUsername(userName: string) {
  return client.fetch(`
    *[_type == "user" && username == "${userName}"][0]{
      ...,
      "id":_id,
      following[]->{username, image},
      followers[]->{username, image},
      "bookmarks":bookmarks[]->_id
    }
  `);
}

export async function searchUsers(keyword?: string) {
  const query = keyword
    ? `&& (name match "${keyword}") || (username match "${keyword}")`
    : '';
  return client.fetch(
    `*[_type =="user" ${query}]{
      ...,
      "following": count(following),
      "followers": count(followers),
    }
    `
  );
}
