import HeaderNav from "./components/HeaderNav";
import HeaderSlide from "./components/HeaderSlide";
import ContentHome from "./components/ContentHome";
import Footer from "./components/Footer";


function Home() {
    return (
        <div>
            <HeaderNav />
            <HeaderSlide />
            <ContentHome />
            <Footer />
        </div>
    )
}

export default Home