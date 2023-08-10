import Following from "@/components/Following";
import PostList from "@/components/PostList";
import SideBar from "@/components/SideBar";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";


export default async function Home() {

  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) {
    redirect('/auth/siginin');
  }

  return (
    <section>
      <Following/>
      <PostList/>
      <SideBar user={user}/>
    </section>
  )
}
