import { UserProfile } from "@/types/model/user";

type Props = {
  user: UserProfile;
};
export default function UserProfile({ user }: Props) {
  return <p>{user.username}</p>;
}
