'use client'
import { redirect, useRouter} from "next/navigation";
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
      <button
        onClick={handleExploreClick}
        className="landing_btn"
      >
        Explorar productos
      </button>
      { id? null :  (
      <button className="landing_btn" onClick={handleLogin}>
        Iniciar sesión
      </button>
      )}
    </div>
  )
}
export default LandingNavigation;