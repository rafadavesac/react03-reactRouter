import Footer from "../components/Footer";
import Header from "../components/Header";

// importar os dados dos posts
import posts from "../data/posts";

function Post() {
    return (
        <>
            <Header title="Meu Blog" />
            <h1>{posts[0].title}</h1>
            <p>{posts[0].author} / {posts[0].date}</p>
            <p>{posts[0].content}</p>
            <Footer text="Todos os direitos reservados" />
        </>
    );
}

export default Post;