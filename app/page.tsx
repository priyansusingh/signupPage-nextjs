"use client"
import { useRouter } from "next/navigation"
export default function Home() {

  const router = useRouter();
  return <div>
        Hello User got to signup <button onClick={async () => {
                   router.push("user/signup")
}} type="button" className="mt-8 w-30 text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Sign up</button>

     </div>
  
}
