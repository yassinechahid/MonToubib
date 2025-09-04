"use client";
import React, { useState } from "react";
import Image from "next/image";
import blogs from "@/data/blog";
import Link from "next/link";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("Santé générale");

  const filteredBlogs = blogs.filter(
    (blog) => blog.category === selectedCategory
  );

  return (
    <div className="bg-light-background pt-28 w-full flex flex-col items-center px-4 sm:px-6 lg:px-[200px] min-h-screen">
      {/* Title & Intro */}
      <div className="w-full flex flex-col justify-center items-center max-w-6xl mb-8 text-left">
        <h1 className="text-3xl font-bold text-light-primary">Blog</h1>
        <p className="mt-2 text-gray-700">
          Découvrez nos derniers articles sur une variété de sujets dans notre blog !
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-3 mb-8">
        {["Santé générale", "Santé mentale", "Télémédecine"].map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-lg border transition-colors duration-200 ${
              selectedCategory === cat
                ? "bg-light-primary text-white border-light-primary"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Blog Cards using Flex */}
      <div className="flex flex-wrap justify-center gap-8 w-full">
        {filteredBlogs.map((blog) => (
          <div
            key={blog.id}
            className="border rounded-2xl shadow-md bg-white flex flex-col items-center overflow-hidden hover:shadow-lg transition-shadow duration-300 w-80"
          >
            {/* Blog Image */}
            <div className="w-full  flex items-center justify-center bg-gray-100">
              <Image
                src={blog.image}
                alt={blog.title}
                width={300}
                height={192}
                className="object-contain rounded-t-2xl"
              />
            </div>

            {/* Blog Content */}
            <div className="p-4 flex flex-col items-center text-center flex-grow">
              <p className="text-sm text-gray-500">{blog.date}</p>
              <h2 className="text-lg font-semibold mt-1">{blog.title}</h2>
              <p className="mt-2 text-gray-700 flex-grow">{blog.excerpt}</p>

              {/* Lire Plus Button */}
              <Link href={`/blog/${blog.id}`} className="mt-4 w-full">
                <button className="w-full px-4 py-2 bg-light-primary text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                  Lire plus
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
