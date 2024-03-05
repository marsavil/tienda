'use client'
import { redirect, useRouter} from "next/navigation";
import { Button } from "../ui/button";
const LandingNavigation = (id: string) => {
  const router = useRouter();
  console.log(id)
  const handleExploreClick = () => {
    router.push("/home");
  }
  const handleLogin = () => {
    router.push("/sign-up");
  };
  return (
    <div className="flex flex-col justify-center gap-8">
      <Button
        onClick={handleExploreClick}
        className="landing_btn primary-500"
      >
        Explorar productos
      </Button>
      { id? null :  (
      <Button className="landing_btn " onClick={handleLogin}>
        Iniciar sesión
      </Button>
      )}
    </div>
  )
}
export default LandingNavigation;