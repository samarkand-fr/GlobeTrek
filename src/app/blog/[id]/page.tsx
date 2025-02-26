
import { notFound } from 'next/navigation';
import BlogPost from '../../../components/BlogPost';
import { blogPosts } from '../../../data/blogData';
import { BlogPost as BlogPostType } from '../../../types';  // Import BlogPost type

const BlogPostPage = ({ params }: { params: { id: string } }) => {
  console.log('params.id:', params.id); // Log the incoming id from the URL

  // Find the post by id
  const post: BlogPostType | undefined = blogPosts.find((p) => p.id === params.id);

  if (!post) {
    console.error(`Post with id ${params.id} not found`); // Log if the post is not found
    return notFound(); // Redirect to 404 if the post doesn't exist
  }

  return <BlogPost post={post} />;
};

export default BlogPostPage;
