import PostItem from "./PostItem";

export default function PostList({ posts, onPostClick }) {
  return (
    <div className="flex flex-col gap-4">
      {posts.map((post) => (
        <PostItem
          key={post.id}
          title={post.title}
          summary={post.summary}
          author={post.author}
          date={post.date}
          onClick={() => onPostClick(post.id)}
        />
      ))}
    </div>
  );
}
