"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import { useState } from "react";

function CreateBlog() {
  const router = useRouter();

  const [form, setForm] = useState({
    blogName: "",
    blogDescription: "",
    blogImage: "",
  });
  const [selectedFile, setSelectedFile] = useState(null);
  console.log(selectedFile, "selectedFile");

  const [uploading, setUploading] = useState(false);

  // Upload local file to public folder
  const handleImageUpload = async () => {
    if (!selectedFile) return form.blogImage;

    setUploading(true);
    const fileData = new FormData();
    fileData.append("file", selectedFile);

    const res = await fetch("/api/blogs/upload", {
      method: "POST",
      body: fileData,
    });

    // Check if response is JSON before parsing
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

  const handleSubmit = async (e) => {
    e.preventDefault();
  


    try {
      // Handle image upload first
      const imageUrl = await handleImageUpload();

      const payload = {
        ...form,
        blogImage: imageUrl,
      };

      // CREATE
      await fetch("/api/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      setForm({ blogName: "", blogDescription: "", blogImage: "" });
      setSelectedFile(null);
      router.push("/admin/blogs");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="flex flex-col min-h-svh w-full items-center justify-center p-6 md:p-10">
      <h2 className="mb-10 text-3xl font-bold">Blog Create</h2>
      <div className="w-full max-w-md">
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <Card>
          <CardContent>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="blog_title">Blog Title</FieldLabel>
                <Input
                  id="blog_title"
                  type="text"
                  placeholder="Blog Title"
                  value={form.blogName}
                  onChange={(e) =>
                    setForm({ ...form, blogName: e.target.value })
                  }
                  required
                />
              </Field>

              {/* Blog Content Textarea */}
              <Field>
                <FieldLabel htmlFor="blog_content">Blog Content</FieldLabel>

                <Textarea
                  id="blog_content"
                  placeholder="Blog Content"
                  rows={8}
                  value={form.blogDescription}
                  onChange={(e) =>
                    setForm({ ...form, blogDescription: e.target.value })
                  }
                  required
                />
              </Field>

              {/* Upload Image Field */}

              <Field >
                <FieldLabel htmlFor="upload_image" className={"cursor-pointer"}>Upload Image:</FieldLabel>
                <Input
                  id="upload_image"
                  type="file"
                  accept="image/*"
                  placeholder="Blog Title"
                  onChange={(e) => setSelectedFile(e.target.files[0])}
                  required
                  className={"cursor-pointer"}
                />
              </Field>

              {form.blogImage && !selectedFile && (
                <p className="text-sm text-gray-500">
                  Current Image: {form.blogImage}
                </p>
              )}

              <Field>
                <Button
                  className="cursor-pointer w-full"
                  type="submit"
                  disabled={uploading}
                >
                  {uploading ? "Create in..." : "Create"}
                </Button>
              </Field>
            </FieldGroup>
          </CardContent>
        </Card>
      </form>
      </div>

    </div>
  );
}

export default CreateBlog;
