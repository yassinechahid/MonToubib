"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import blogs from "@/data/blog";

const BlogDetail = () => {
  const { id } = useParams(); // get the id from URL
  const blog = blogs.find((b) => b.id.toString() === id);

  if (!blog) return <p className="text-center mt-20 text-red-500">Blog not found</p>;

  return (
    <div className="pt-28 w-full flex justify-center px-4 py-10">
      <div className=" rounded-2xl shadow-lg flex flex-col w-full max-w-3xl p-6 lg:p-12">
        
        {/* Blog Image */}
        <div className="w-full flex justify-center">
          <Image
            src={blog.image}
            alt={blog.title}
            width={800}
            height={500}
            className="w-full max-h-[400px] object-cover rounded-2xl"
          />
        </div>

        {/* Title + Date */}
        <h1 className="text-3xl font-bold mt-6 text-center">{blog.title}</h1>
        <p className="text-gray-500 text-center mt-2">{blog.date}</p>

        {/* Blog Content */}
        <div className="mt-6 text-gray-800 space-y-4 prose prose-lg max-w-none">
          {blog.content}
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
