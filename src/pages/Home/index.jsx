import Container from 'react-bootstrap/Container';

import './style.css';

function Home() {
    return (
        <section id="home-page">
            <div id="home-img-box">
                <Container id="tagline">
                    {/* <p>Good juju in every drop</p> */}
                    <p>Brewing magic and stories since the first.</p>
                </Container>
            </div>
            <Container>
                    <div>
                        <p>At Black Cat Café and Bookstore, every taste of our delicious concoctions tells a story, and every page holds magic. We have been crafting magic and stories since the first word was spoken, honoring our diaspora from around the world. </p>
                    </div>
                </Container>
        </section>
    )
}

export default Home;

{/* <img src= "/images/inside.png" /> */}