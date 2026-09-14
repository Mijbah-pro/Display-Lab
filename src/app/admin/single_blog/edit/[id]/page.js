"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";

function BlogEdit() {
  const router = useRouter();
  const params = useParams(); // Extracts ID from URL path: /admin/blogs/edit/[id]
  const blogId = params?.id;

  const [form, setForm] = useState({
    blogName: "",
    blogDescription: "",
    blogImage: "",
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);

  // 1. Fetch single blog data on component mount
  useEffect(() => {
    if (!blogId) return;

    const fetchBlogDetails = async () => {
      try {
        const res = await fetch(`/api/blogs/${blogId}`);
        if (!res.ok) throw new Error("Failed to fetch blog details");
        
        const data = await res.json();
        setForm({
          blogName: data.blogName || "",
          blogDescription: data.blogDescription || "",
          blogImage: data.blogImage || "",
        });
      } catch (error) {
        console.error("Error loading blog:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogDetails();
  }, [blogId]);

  // 2. Upload local image file to backend
  const handleImageUpload = async () => {
    if (!selectedFile) return form.blogImage;

    setUploading(true);
    const fileData = new FormData();
    fileData.append("file", selectedFile);

    const res = await fetch("/api/blogs/upload", {
      method: "POST",
      body: fileData,
    });

    const contentType = res.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      const textError = await res.text();
      setUploading(false);
      throw new Error(`Server Error (${res.status}): ${textError}`);
    }

    const data = await res.json();
    setUploading(false);

    if (res.ok) {
      return data.url;
    } else {
      throw new Error(data.message || "Image upload failed");
    }
  };

  // 3. Update Blog Submittal
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const imageUrl = await handleImageUpload();

      const payload = {
        ...form,
        blogImage: imageUrl,
      };

      const res = await fetch(`/api/blogs/${blogId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        router.push("/admin/blogs"); // Redirect back to list page on success
      } else {
        console.error("Failed to update blog");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  if (loading) {
    return <div className="p-6 text-center text-slate-600">Loading blog details...</div>;
  }

  return (
    <section className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-slate-800">Edit Blog</h1>
      
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Blog Title</label>
          <input
            type="text"
            placeholder="Blog Title"
            value={form.blogName}
            onChange={(e) => setForm({ ...form, blogName: e.target.value })}
            className="w-full border border-slate-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Blog Content</label>
          <textarea
            placeholder="Blog Content"
            rows={6}
            value={form.blogDescription}
            onChange={(e) => setForm({ ...form, blogDescription: e.target.value })}
            className="w-full border border-slate-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Upload New Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setSelectedFile(e.target.files[0])}
            className="w-full border border-slate-300 p-2 rounded-lg"
          />
        </div>

        {form.blogImage && !selectedFile && (
          <div className="text-sm text-slate-500">
            <p className="mb-1 font-medium">Current Image:</p>
            <img 
              src={form.blogImage} 
              alt="Current blog preview" 
              className="h-32 w-48 object-cover rounded-lg border border-slate-200" 
            />
          </div>
        )}

        <div className="flex gap-3 mt-4">
          <button
            type="submit"
            disabled={uploading}
            className="bg-green-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-green-600 transition-all w-1/2 disabled:opacity-50"
          >
            {uploading ? "Uploading..." : "Update Blog"}
          </button>
          
          <button
            type="button"
            className="bg-slate-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-slate-600 transition-all w-1/2"
            onClick={() => router.push("/admin/blogs")}
          >
            Cancel
          </button>
        </div>
      </form>
    </section>
  );
}

export default BlogEdit;