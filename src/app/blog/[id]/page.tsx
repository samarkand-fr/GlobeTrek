
import { notFound } from "next/navigation";
import Image from "next/image";
import { blogPosts } from "../../../data/blogData"; 

interface BlogPageProps {
  params: Promise<{ id: string }>; //  `params` est traité comme une promesse
}

export default async function BlogPage({ params }: BlogPageProps) {
  const resolvedParams = await params; // Résolution de la promesse
  const post = blogPosts.find((post) => post.id === resolvedParams.id);

  if (!post) {
    return notFound(); 
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-600 mb-4">{post.description}</p>
      <Image
        src={post.image}
        alt={post.title}
        width={800}
        height={500}
        className="rounded-lg"
        priority
      />
      <div className="mt-6 space-y-4">
        {post.content.map((item, index) => {
          if (item.type === "paragraph") {
            return <p key={index}>{item.text}</p>;
          } else if (item.type === "heading") {
            return <h2 key={index} className="text-2xl font-semibold mt-4">{item.text}</h2>;
          } else if (item.type === "image") {
            return (
              <Image
                key={index}
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                className="rounded-lg mx-auto"
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}
