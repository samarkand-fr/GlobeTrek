
"use client";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { blogPosts } from "../data/blogData";

const BlogPostList = () => {
  const router = useRouter();

  useEffect(() => {
    console.log("BlogPostList mounted. Current router path:", window.location.pathname);
  }, []);

  if (!blogPosts || blogPosts.length === 0) {
    console.warn("Aucun article trouvé dans blogPosts.");
    return <p className="text-gray-600 text-center">Aucun article disponible.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogPosts.map((post, index) => (
        <div
          key={`post-${post.id}-${index}`}
          className="cursor-pointer border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105"
          onClick={() => {
            console.log(`Navigating to: /blog/${post.id}`);
            router.push(`/blog/${post.id}`);
          }}
        >
          {/* ✅ Fixed Image Component */}
          {post.image && (
            <div className="relative w-full h-48">
              <Image
                src={post.image}
                alt={post.title}
                fill // Replaces `layout="fill"`
                className="object-cover w-full h-full"
              />
            </div>
          )}

          <div className="p-4">
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{post.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{post.description}</p>

            {/* Articles recommandés */}
            {post.latestRead && post.latestRead.length > 0 && (
              <div className="mt-4">
               <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200">You might also like</h4>
                <ul className="space-y-2">
                  {post.latestRead.map((relatedPost, relIndex) => (
                    <li
                      key={`related-${relatedPost.id}-${relIndex}`}
                      className="text-sm text-blue-500 hover:underline"
                    >
                      <Link
                        href={`/blog/${relatedPost.id}`}
                        onClick={(e) => e.stopPropagation()} // Prevents parent div click
                      >
                        {relatedPost.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogPostList;
