"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function BlogPage() {
  const router = useRouter();
  const [blogs, setBlogs] = useState([]);

  // Fetch blogs
  const fetchBlogs = async () => {
    try {
      const res = await fetch('/api/blogs');
      const data = await res.json();
      if (Array.isArray(data)) {
        setBlogs(data);
      }
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };

  useEffect(() => {
    let isMounted = true;

    const loadInitialData = async () => {
      try {
        const res = await fetch('/api/blogs');
        const data = await res.json();
        if (isMounted && Array.isArray(data)) {
          setBlogs(data);
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    loadInitialData();

    return () => {
      isMounted = false;
    };
  }, []);

  // Delete Blog
  const handleDelete = async (e, blogId) => {
    e.preventDefault(); // Stop Link navigation
    e.stopPropagation(); // Stop event bubbling
    
    if (confirm("Are you sure you want to delete this blog?")) {
      try {
        await fetch(`/api/blogs/${blogId}`, { method: "DELETE" });
        await fetchBlogs();
      } catch (error) {
        console.error("Error deleting blog:", error);
      }
    }
  };

  // Edit Blog navigation
  const handleEdit = (e, blogId) => {
    e.preventDefault(); // Stop Link navigation
    e.stopPropagation(); // Stop event bubbling
    router.push(`/admin/single_blog/edit/${blogId}`);
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-slate-800 mb-6">All Blogs</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.blogId}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-slate-100 flex flex-col px-3 py-2"
          >
            {/* Clickable Card Area */}
            <Link href={`/admin/blogs/${blog.blogId}`} className="block flex-grow">
              {/* Blog Cover Image */}
              <div className="h-48 w-full overflow-hidden rounded-2xl">
                <img
                  src={blog.blogImage}
                  alt={blog.blogName}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Card Content */}
              <div className="p-5 flex flex-col flex-grow justify-between">
                <div>
                  <h2 className="text-xl font-bold text-slate-900 leading-snug mb-2">
                    {blog.blogName}
                  </h2>
                  <p className="text-sm text-slate-500 font-normal line-clamp-2 mb-4">
                    {blog.blogDescription}
                  </p>
                </div>
              </div>
            </Link>

            {/* Action Buttons (Outside Link) */}
            <div style={{ display: "flex", gap: "0.5rem" }} className="mt-2">
              <button
                className="bg-green-500 px-3 py-1 rounded-2xl cursor-pointer font-bold hover:bg-green-600 transition-all w-[50%] text-white"
                onClick={(e) => handleEdit(e, blog.blogId)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 px-3 py-1 rounded-2xl cursor-pointer font-bold hover:bg-red-600 transition-all w-[50%] text-white"
                onClick={(e) => handleDelete(e, blog.blogId)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BlogPage;