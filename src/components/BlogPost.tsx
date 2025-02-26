
import { BlogPost as BlogPostType } from "../types";
import Image from "next/image";

interface BlogPostProps {
  post: BlogPostType;
}

const BlogPost = ({ post }: BlogPostProps) => {
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      {/* Titre et description */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">{post.title}</h1>
        <p className="mt-4 text-lg text-gray-600">{post.description}</p>
      </div>

      {/* Contenu de l'article */}
      <div className="space-y-6">
        {post.content?.map((item, index) => {
          switch (item.type) {
            case "paragraph":
              return (
                <p key={`paragraph-${index}`} className="text-base text-gray-800">
                  {item.text}
                </p>
              );
            case "image":
              return (
                <div key={`image-${index}`} className="relative">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
                    layout="intrinsic"
                    className="rounded-lg shadow-lg object-cover"
                  />
                </div>
              );
            case "heading":
              return (
                <h2 key={`heading-${index}`} className="text-2xl font-semibold text-gray-800">
                  {item.text}
                </h2>
              );
            default:
              return null;
          }
        })}
      </div>

      {/* Articles recommandés */}
      {post.latestRead && post.latestRead.length > 0 && (
        <div className="mt-10">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Articles to read</h3>
          <ul className="space-y-6">
            {post.latestRead.map((article, index) => (
              <li key={`latest-${index}`} className="flex space-x-4 border-b pb-6">
                <div className="w-32 h-32 relative">
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={100}
                    height={100}
                    layout="intrinsic"
                    className="rounded-lg shadow-md object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-800">{article.title}</h4>
                  <p className="text-sm text-gray-600 mt-1">{article.description}</p>
                  <a
                    href={`/blog/${article.id}`}
                    className="text-cyan-600 mt-2 inline-block text-sm hover:underline"
                  >
                  Read the article
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BlogPost;
