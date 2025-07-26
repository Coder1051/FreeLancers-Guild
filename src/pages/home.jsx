import Carousel from '../components/carousel'
import Header from '../components/header'
import AdminTeam from '../components/adminteam';
import Services from '../components/services';
import Community from '../components/community';



const Home = () => {

    return (
        <>
            <Header />
            <Carousel />
            <Services />
            <Community />
            <AdminTeam />
        </>
    )
}

export default Home
