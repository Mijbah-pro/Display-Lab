import Footer from "@/components/footer";
import NavberMain from "@/components/NavberMain";
import BlogDetails from "@/components/pages/blog/components/BlogDetails";
import Link from "next/link";

// Helper function to fetch single blog data from API
async function getBlog(details) {
  
  try {
    const res = await fetch(`http://localhost:3000/api/blogs/${details}`, {
      cache: "no-store", // Ensures fresh data on every request
    });

    if (!res.ok) {
      return null;
    }

    return await res.json();
  } catch (error) {
    console.error("Failed to fetch blog details:", error);
    return null;
  }
}


export default async function BlogDescription({ params }) {
// Await params in Next.js App Router
  const resolvedParams = await params;
  console.log(resolvedParams,"singleBlog");
  const blog = await getBlog(resolvedParams.details);
  

  if (!blog) {
    return (
      <div
        style={{
          maxWidth: "800px",
          margin: "3rem auto",
          textAlign: "center",
          fontFamily: "sans-serif",
        }}
      >
        <h1 className="text-3xl font-bold text-red-500">Blog Not Found</h1>
        <p className="mt-4 text-gray-600">
          The blog post you are looking for does not exist.
        </p>
        <Link
          href="/"
          className="inline-block mt-6 bg-green-500 text-white px-4 py-2 rounded-2xl font-bold hover:bg-green-600 transition-all"
        >
          &larr; Back to Home
        </Link>
      </div>
    );
  }

  return (
    <>
    <NavberMain />
    <BlogDetails singleBlogData={blog} />
    <Footer />
    </>
  );
}
