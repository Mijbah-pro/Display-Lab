import BlogCard from "./BlogCard";

function BlogContent() {
    return (<>
        <section className="py-16 bg-slate-50/40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl xl:text-5xl font-bold text-gray-900 mb-6 mx-auto lg:mx-0 leading-tight text-center">Blog</h1>
                <BlogCard />
            </div>
        </section>
    </>);
}

export default BlogContent;