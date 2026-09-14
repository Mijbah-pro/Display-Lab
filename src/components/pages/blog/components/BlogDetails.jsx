"use client"
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

function BlogDetails({singleBlogData}) {
  const router = useRouter()
  function handleBack () {
    router.back(1)
  }
    
    return ( <>
    <article
      style={{
         maxWidth: "100%",
        // maxHeight: "100px",
        // margin: "2rem auto",
        padding: "2rem 1rem",
        fontFamily: "sans-serif",
      }}
    >
      <Button
        onClick={handleBack}
        className=" mb-5 cursor-pointer bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-2xl font-bold transition-all"
      >
        &larr;
      </Button>

      {/* Blog Featured Image */}
      {singleBlogData.blogImage && (
        <div className="w-full mb-6 overflow-hidden rounded-xl">
          <img
            src={singleBlogData.blogImage}
            alt={singleBlogData.blogName}
            style={{
              width: "100%",
              // maxHeight: "400px",
              objectFit: "cover",
              borderRadius: "12px",
            }}
          />
        </div>
      )}

      {/* Title */}
      <h1 className="text-4xl font-extrabold mb-4">{singleBlogData.blogName}</h1>

      {/* Date */}
      {singleBlogData.createdAt && (
        <p className="text-sm text-gray-500 mb-6">
          Published on {new Date(singleBlogData.createdAt).toLocaleDateString()}
        </p>
      )}

      <hr className="my-6 border-gray-200" />

      {/* Description / Content */}
      <div className="text-xl leading-relaxed text-gray-800 whitespace-pre-wrap">
        {singleBlogData.blogDescription}
      </div>
    </article>
    </> );
}

export default BlogDetails;