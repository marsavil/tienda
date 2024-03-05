import LandingNavigation from "@/components/shared/LandingNavigation";
import { currentUser } from "@clerk/nextjs";
import Image from "next/image";

export default async function Landing() {
  const user = await currentUser();
  console.log(user);
  return (
    <main className="grid grid-cols-[2fr,1fr] h-screen text-dark-color tracking-wider" >
      <div className="flex justify-end">
        <Image className="w-screen h-screen object-cover h-full mr-[0%] lg:ml-[0]" src="/assets/background.svg" alt="hero" width={600} height={400} />
      </div>
      
      <div className="flex flex-col justify-evenly items-center p-5">
        <h1 className='head-text text-center'>Nombre de la tienda</h1>
        <p className="text-lg font-semibold text-center text-light-1">Bienvenid@ a nuestra tienda</p>
        <LandingNavigation id={user?.id} />
      </div>
    </main>
  );
}
