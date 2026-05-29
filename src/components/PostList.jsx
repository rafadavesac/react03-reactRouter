import PostItem from "./PostItem";
import { Link } from "react-router-dom";

export default function PostList({ posts }) {
  return (
    <div className="flex flex-col gap-4">
      {posts.map((post) => (
        <Link to={`/post/${post.id}`} key={post.id} className="block">
        <PostItem
          key={post.id}
          title={post.title}
          summary={post.summary}
          author={post.author}
          date={post.date}
        />
        </Link>
      ))}
    </div>
  );
}
