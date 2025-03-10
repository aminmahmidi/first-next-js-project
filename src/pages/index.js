import posts from "../../public/posts.json";
import PostList from "@/posts/PostLIst";

const Home = ({ list }) => {
  return <PostList list={list} />;
};

export default Home;

export const getStaticProps = () => {
  return {
    props: { list: posts },
    revalidate: 3,
  };
};
