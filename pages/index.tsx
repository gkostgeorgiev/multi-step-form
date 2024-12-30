import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/personal-info");
  }, []);

  return null;
  // return <div>Hello world</div>;
}
