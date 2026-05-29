import PostList from "../components/PostList";
import Header from "../components/Header";
import Footer from "../components/Footer";

import posts from "../data/posts";

function Home(){
    return (
        <>
            <Header title="Meu Blog" />
            <PostList posts={posts} />
            <Footer text="Direitos reservados" />
        </>
    );
}

export default Home;