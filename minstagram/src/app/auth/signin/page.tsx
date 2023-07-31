import { getProviders } from "next-auth/react"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { redirect } from "next/navigation";
import Siginin from "@/components/Siginin";

type Props = {
  searchParams: {
    callbackUrl: string;
  }
}

export default async function SignInPage({searchParams: {callbackUrl}}: Props) {

  const session = await getServerSession(authOptions);
  
  // If the user is already logged in, redirect.
  // Note: Make sure not to redirect to the same page
  // To avoid an infinite loop!
  if (session) {
    redirect("/")
  }

  const providers = (await getProviders()) ?? {};
  
  return (
    <section className='flex justify-center mt-24'>
      <Siginin providers={providers} callbackUrl={callbackUrl ?? '/'}/>
    </section>
  )
}