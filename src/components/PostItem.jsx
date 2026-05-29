export default function PostItem({ title, summary, author, date, onClick }) {
  return (
    <article
      onClick={onClick}
      className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
    >
      <h2 className="text-xl font-semibold text-gray-900 mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{summary}</p>
      <div className="flex items-center justify-between text-sm text-gray-500">
        <span>{author}</span>
        <span>{date}</span>
      </div>
    </article>
  );
}
