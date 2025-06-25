import Carousel from '../components/carousel'
import Header from '../components/header'
import AdminTeam from '../components/adminteam';
import Services from '../components/services';
import Community from '../components/community';
import Reviews from '../components/reviews';


const Home = () => {

    return (
        <>
            <Header />
            <Carousel />
            <Services />
            <Community />
            <AdminTeam />
            <Reviews />
        </>
    )
}

export default Home
