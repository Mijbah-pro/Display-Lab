import Image from "next/image";
import Link from "next/link";

function BlogCard() {
    return ( <>
    <div className="w-full md:w-[400px] overflow-hidden transition-all hover:bg-gray-200 px-4 py-3 rounded-2xl">
        <Link href={""} >
        <div className="mb-5">
            <Image src={"/images/blog/example.jpg"} className="rounded-3xl w-full" width={400} height={200} alt="blog-1" />
        </div>
        <h3 className="font-semibold text-xl mb-5 text-gray-900">Blog Title</h3>
        <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sunt voluptates quos, voluptatibus voluptatum, quia perferendis illo similique provident dicta quod recusandae eos distinctio quam ut! Repellendus ipsa perspiciatis dignissimos.</p>
        </Link>
    </div>
    </> );
}

export default BlogCard;