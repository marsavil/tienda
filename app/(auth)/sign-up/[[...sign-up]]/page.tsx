import { SignUp } from "@clerk/nextjs";

export default function Page() {
  console.log('empieza a cargar el SignUp')
  return (
    <div className="flex justify-center py-24">
      <SignUp />
    </div>
  );
}