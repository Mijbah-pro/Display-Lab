import BlogPage from "@/components/pages/BlogPage";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Page() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  

  // If no authentication token exists, redirect to the login page
  if (!token) {
    redirect("/login");
  }

  return <BlogPage />;
}