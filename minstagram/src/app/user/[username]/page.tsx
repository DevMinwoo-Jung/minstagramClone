
import UserPosts from '@/components/UserPosts';
import UserProfile from '@/components/userProfile';
import { getPosts } from '@/service/posts';
import { getUserForProfile } from '@/service/user';
import { notFound } from 'next/navigation';

type Props = { params: { username: string } };
export default async function UserPage({ params: { username } }: Props) {
  // 상단: 사용자의 프로필 이미지와 정보(username, name, 숫자)
  // 하단: 3개의 탭 (posts, liked, bookmarks)
  const user = await getUserForProfile(username);
  const post = await getPosts(username)

  console.log(user)
  // console.log(post)

  if (!user) {
    notFound();
  }

  return (
    <section className='block w-3/4 h-full'>
      <UserProfile user={user} />
      <UserPosts user={user} />
    </section>
  );
}
