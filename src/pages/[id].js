import { revalidatePath } from "next/cache";
import posts from "../../public/posts.json";
import { Note } from "@phosphor-icons/react";
const PostId = ({ post }) => {
  return (
    <div className="post-container">
      <h5>شرمنده وقت نداشتم استایلش کنم</h5>
      <h1>نمایش {post.title}</h1>
      <div className="thumbnail">
        <Note />
      </div>
      <h3>{post.title}</h3>
      <p>{post.description}</p>
      <p>{post.date}</p>
    </div>
  );
};

export default PostId;

export function getStaticPaths() {
  const paths = posts.map((post) => ({
    params: { id: post.id },
  }));
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps = (context) => {
  const { id } = context.params;
  const post = posts.find((post) => post.id === parseInt(id).toString());
  return {
    props: {
      post: post,
    },
  };
};
