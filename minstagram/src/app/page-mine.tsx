import SideBar from "@/components/SideBar";

export default function Home() {
  return (
    <section>
      <div className="w-full mx-auto flex grid-cols-2 gap-4">
        <div className="flex-1">
          <div>
            FollowingBar
            PostList
          </div>
        </div>
        <div className="w-1/3 mw-1/3">
          <SideBar/>
        </div>
      </div>
    </section>
  )
}
