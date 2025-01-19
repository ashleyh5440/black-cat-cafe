import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

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
            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <div id="home-bio" style={{height: "80vh", marginTop: "20%", padding: "0% 8%"}}>
                        <p>At Black Cat Café and Bookstore, every taste of our delicious concoctions tells a story, and every page holds magic. We have been crafting magic and stories since the first word was spoken, honoring our people from all around the world.</p>
                    </div>
                    {/* <div style={{width: "40%", marginTop: "10px"}}>
                        some pic here
                    </div> */}
                    <Row style={{marginTop: "30px"}}>
                        <div style={{width: "35%"}}><img src="../../images/coffee-cup.png" alt="" /></div>
                        <div style={{width: "60%"}}>
                            <h2>Food and Drink</h2>
                            <p style={{fontSize: "20px"}}>Enjoy freshly brewed coffee, imported teas, and pastries from local bakeries. Our menu also features breakfast favorites, sandwiches, salads, and seasonal specials made with locally sourced ingredients.</p>
                            <p>View full café menu</p>
                        </div>
                    </Row>
                    <Row style={{marginTop: "17%"}}>
                        <div style={{width: "60%"}}>
                            <h2>Books and Artwork</h2>
                            <p style={{fontSize: "20px"}}>As you peruse shelves filled with a curated selection of books — ranging from timeless classics to works by emerging authors — you will also experience the creations of talented local artists. Whether you’re seeking your next literary escape or a one-of-a-kind artwork, each purchase supports the vibrant creativity of our community.</p>
                        </div>
                        <div style={{width: "40%"}}><img src="../../images/book-stack.png" /></div>
                    </Row>
                </div>
        </section>
    )
}

export default Home;

{/* <img src= "/images/inside.png" /> */}