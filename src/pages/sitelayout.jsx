import Navigation from '../components/navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer'

const SiteLayout = () => {
  return (
    <>
      <Navigation />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default SiteLayout