import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getPosts } from "@/service/posts";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if(!user) {
    return new Response('Auth Error', { status: 401 })
  }

  return getPosts(user.username)
    .then((data) => NextResponse.json(data));
  ;
}
