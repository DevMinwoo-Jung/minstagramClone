import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getPostDetail } from "@/service/postDetail";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";


type Context = {
  params: { id: string };
};

export async function GET(request: Request, context: Context) {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if(!user) {
    return new Response('Auth Error', { status: 401 })
  }

  console.log(context)

  if (!context) {
    return new Response("Missing postId parameter", { status: 400 });
  }

  return getPostDetail(context.params.id)
    .then((data) => NextResponse.json(data));
  ;
}
