import { UserProfile } from "@/types/model/user";
import Avatar from "./ui/Avatar";
import FollowButton from "./FollowButton";

type Props = {
  user: UserProfile;
};
export default function UserProfile({ user }: Props) {
  const { image, username ,name, followers, following, posts } = user;
  const info = [
    {
      title: 'posts', data: posts
    },
    {
      title: 'followers', data: followers
    },
    {
      title: 'following', data: following
    }
  ]
  console.log(user)
  return (
    <section className="flex justify-center w-full pt-6 pb-6 h-32">
      <Avatar image={image} highlight />
      <div>
        <h1>{username}</h1>
        <FollowButton user={user}/>
        <ul>
          {
            info.map(({title, data}, index) => 
            (
            <li key={index}>
              <span>{title}</span>
              <span>{data}</span>
            </li>
            ))
          }
        </ul>
        <p>name</p>
      </div>
    </section>
  );
}
