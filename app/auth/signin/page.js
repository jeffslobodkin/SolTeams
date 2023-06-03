"use client"
import { getProviders, getSession, signIn } from "next-auth/react";
import GET from "@/lib/auth";

export default function SignIn({ providers }) {
    console.log("Inside Sign");  // Add this line to log session
  return (
    <>
      {providers && Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </>
    
  )

}


// export async function getServerSideProps(context) {
//     console.log("Finished");
//   const session = await getServerSession(context.req, context.res, GET);
  
//   if (session) {
//     return { redirect: { destination: "/" } };
//   }

//   const providers = await getProviders();
  
//   return {
//     props: { providers: providers || [] },
//   }
// }
