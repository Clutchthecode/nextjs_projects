//"use client";
import Link from "next/link"
import Image from "next/image"
import { auth, signOut, signIn } from "@/auth";
const Navbar = async() => {
    const session=await auth();
  return (
    <header className="bg-white shadow-sm font-work-sans px-5 py-3">
        <nav className="flex justify-between items-center">
            <Link href="/">
                <Image src="/logo2.png" alt="logo" width={144} height={30} />
            </Link>
         <div className="flex items-cente gap-5 text-black">
         {session && session?.user ? (
            <>
              <Link href="/startup/create">
                <span className="max-sm:hidden">Create</span>
              </Link>

              <form
                action={async () => {
                  "use server";

                  await signOut({ redirectTo: "/" });
                }}
              >
                <button type="submit">
                  <span className="max-sm:hidden">Logout</span>
                </button>
              </form>

              <Link href={`/user/${session?.id}`}>
                <span>{session?.user?.name}</span>
              </Link>
            </>
          ) : (
            <form
              action={async () => {
                "use server";

                await signIn("github");
              }}
            >
              <button type="submit">Login</button>
            </form>
          )}
         </div>
          
        </nav>
    </header>
  )
}

export default Navbar