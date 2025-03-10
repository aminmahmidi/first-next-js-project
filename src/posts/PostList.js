import Link from "next/link";
import { Note } from "@phosphor-icons/react/dist/ssr";
const PostList = ({ list }) => {
  return (
    <>
      <div className="list-container">
        <h1>Posts</h1>
        {list.map((e) => {
          const { id, title, description, content, date } = e;
          return (
            <Link href={`${id}`}>
              <div className="list" key={id}>
                <div className="">
                  <Note size={50} weight="light" />
                </div>
                <h2 className="title">{title}</h2>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default PostList;
