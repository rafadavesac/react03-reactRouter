import Footer from "../components/Footer";
import Header from "../components/Header";
import { useParams } from "react-router-dom";

// importar os dados dos posts
import posts from "../data/posts";

function Post() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id));

  if(!post) {
    return (
      <>
        <Header title="Meu Blog" />
        <h1>Post não encontrado</h1>
        <Footer text="Todos os direitos reservados" />
      </>
    );
  }

    return (
        <>
            <Header title="Meu Blog" />
            <h1>{post.title}</h1>
            <p>{post.author} / {post.date}</p>
            <p>{post.content}</p>
            <Footer text="Todos os direitos reservados" />
        </>
    );
}

export default Post;