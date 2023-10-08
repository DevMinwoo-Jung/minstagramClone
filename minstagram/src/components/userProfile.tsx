import { UserProfile } from "@/types/model/user";
import Avatar from "./ui/Avatar";

type Props = {
  user: UserProfile;
};
export default function UserProfile({ user }: Props) {
  return (
    <section className="flex justify-center w-full pt-6 pb-6 h-32">
      <div className="mr-7 mt-4">
        <Avatar size="large" image={user.image}/>
      </div>
      <div className="block mb-4 mt-4">
        <p>{user.username}</p>
        <div>
          <span className="pr-2">
            <span className="font-semibold">
              {user.posts}
              </span> posts
          </span>
          <span className="pr-2">
            <span className="font-semibold">
              {user.followers}
            </span> followers
          </span>
          <span className="pr-2">
            <span className="font-semibold">{user.following}</span> following
          </span>
        </div>
        <p className="font-bold">{user.username}</p>
      </div>
    </section>
  );
}
