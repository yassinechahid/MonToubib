"use client";
import React, { useState } from "react";
import Image from "next/image";
import blogs from "@/data/blog";
import Link from "next/link";
const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("Santé générale");

  // Filter blogs by selected category
  const filteredBlogs = blogs.filter(
    (blog) => blog.category === selectedCategory
  );

  return (
    <div
      style={{ minHeight: "100vh" }}
      className="bg-light-background pt-28 w-full flex flex-col px-4 sm:px-6 lg:px-[200px]"
    >
      {/* Title & Intro */}
      <div className="w-full">
        <h1 className="text-headline-medium font-normal text-light-primary text-left">
          Blog
        </h1>
        <p className="pb-8 mt-3 text-gray-700 text-left">
          Découvrez nos derniers articles sur une variété de sujets dans notre
          blog !
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex gap-4 mb-6">
        {["Santé générale", "Santé mentale", "Télémédecine"].map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-lg border ${
              selectedCategory === cat
                ? "bg-light-primary text-white"
                : "bg-white text-gray-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Blog Card */}
      <div className="grid gap-6">
        {filteredBlogs.map((blog) => (
          <div
            key={blog.id}
            className="border rounded-lg shadow p-4 bg-white flex flex-col"
          >
            <Image
            width={200}
            height={200}
              src={blog.image}
              alt={blog.title}
              className="object-cover rounded-lg"
            />
            <p className="mt-3 text-sm text-gray-500">{blog.date}</p>
            <h2 className="text-lg font-semibold mt-1">{blog.title}</h2>
            <p className="mt-2 text-gray-700">{blog.excerpt}</p>

<Link href={`/blog/${blog.id}`}>
  <button
    className="mt-4 px-4 py-2 bg-light-primary text-white rounded-lg hover:bg-blue-700"
  >
    Lire plus
  </button>
</Link>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
