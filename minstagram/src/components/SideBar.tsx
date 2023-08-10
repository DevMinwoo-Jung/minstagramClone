import { User } from "@/types/model/user";
import Avatar from "./ui/Avatar";


type Props = {
  user: User;
}
export default function SideBar({user: {name, username, image}}: Props) {
  return (
    <>
      <div>
        {image && <Avatar image={image}/>}
        <p>{username}</p>
        <p>{name}</p>
      </div>-
      <p>About - Help - Press - API - Jobs - Privacy - Tearms - Locations</p>
      <p>@Copyright Minstagram Minwoo</p>
    </>
  )
}
