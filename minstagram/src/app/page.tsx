import SideBar from "@/components/SideBar";

export default function Home() {
  return (
    <section>
      <div className="w-3/4 m-auto flex">
        <div className="flex">
          <div>
            FollowingBar
            PostList
          </div>
        </div>
        <div className="ml-12">
          <SideBar/>
        </div>
      </div>
    </section>
  )
}
