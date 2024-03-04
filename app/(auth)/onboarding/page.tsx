import UserProfile from "@/components/forms/UserProfile";
import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function Page() {
  const user = await currentUser();
  const userDB = await fetchUser(user?.id);
  const userData = {
    id: user?.id,
    objectId: userDB?._id,
    username: userDB?.username || user?.username,
    name: userDB?.name || user?.firstName || '',
    lastname: userDB?.lastname || user?.lastName,
    telephone: userDB?.telephone || '',
    address: userDB?.address || '',
    postCode: userDB?.postCode || '',
    city: userDB?.city || '',
    province: userDB?.province || "",
    country: userDB?.country || "",
    image: userDB?.image ||user?.imageUrl || 'https://res.cloudinary.com/dlzp43wz9/image/upload/v1709585844/user-icon-2048x2048-ihoxz4vq_ydc8ku.png' 
  };
  if (userDB?.onboarded ) redirect( '/home')

  return (
    <main className="mx-auto flex max-w-3xl flex-col justify-start px-10 py-20">
      <h1 className="head-text">Onboarding</h1>
      <p className="mt-3 text-base-regular text-light-2">Completa tu perfil para poder continuar</p>
      <section className="mt-9 bg-dark-2 p-10">
        <UserProfile 
          user={ userData }
          btnTitle='Continue'
        />
      </section>
    </main>
  );
}