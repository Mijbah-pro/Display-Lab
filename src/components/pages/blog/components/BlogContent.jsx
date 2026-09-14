"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function BlogContent() {
    const [blogs, setBlogs] = useState([]);

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
    return (<>
        <section className="py-16 bg-slate-50/40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl xl:text-5xl font-bold text-gray-900 mb-6 mx-auto lg:mx-0 leading-tight text-center">Blogs</h1>
                <div className="grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                    {
                        blogs.map((blog) => {

                            return (
                                <div
                                    key={blog.blogId}
                                    className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-slate-100 flex flex-col px-3 py-2"
                                >
                                    {/* Clickable Card Area */}
                                    <Link href={`/blog/${blog.blogId}`} className="block flex-grow">
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
                                </div>
                            )
                        })
                    }
                </div>


            </div>
        </section>
    </>);
}

export default BlogContent;