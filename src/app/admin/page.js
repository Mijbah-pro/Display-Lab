"use client"

import { useRouter } from "next/navigation";
import { useEffect } from "react";


function page() {
  const router = useRouter();
  useEffect(() => {

      router.push("/admin/blogs");
  } )
  return <>Hello</>;
}

export default page;
