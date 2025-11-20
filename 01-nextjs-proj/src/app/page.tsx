
import { FC } from "react";
import { SigninForm } from "@/components/auth/signin-form";

const Home: FC = () => {
  const redirect = "/home";
  //test
  // console.log(`Page root - server`);
  return (
    <div className="flex h-screen items-center justify-center bg-zinc-50 p-2 font-sans dark:bg-black">
        <SigninForm redirect={redirect} />
    </div>
  );
};
export default Home;
