import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getPostDetail } from "@/service/postDetail";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if(!user) {
    return new Response('Auth Error', { status: 401 })
  }

   // Access URL parameters from the request object
  const urlSearchParams = new URL(request.url).searchParams;
  const postId = urlSearchParams.get("postId"); // Get the postId parameter from the URL

  if (!postId) {
    return new Response("Missing postId parameter", { status: 400 });
  }

  return getPostDetail(postId)
    .then((data) => NextResponse.json(data));
  ;
}
