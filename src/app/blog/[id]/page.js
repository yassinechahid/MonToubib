"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import blogs from "@/data/blog";

const BlogDetail = () => {
  const { id } = useParams(); // get the id from URL
  const blog = blogs.find((b) => b.id.toString() === id);

  if (!blog) return <p>Blog not found</p>;

  return (
    <div className="px-6 lg:px-[100px] pt-28">
      <Image
        src={blog.image}
        alt={blog.title}
        width={1}
        height={1}
        className="w-full object-cover rounded-2xl"
      />
      <h1 className="text-2xl font-bold mt-4">{blog.title}</h1>
      <p className="text-gray-500 mt-2">{blog.date}</p>
      <p className="mt-4 text-gray-700">{blog.content}</p>
    </div>
  );
};

export default BlogDetail;
