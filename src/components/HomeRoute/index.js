import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import Header from '../Header'
import Carousel from '../Carousel'
import AllRestaurants from '../AllRestaurants'
import Footer from '../Footer'

import './index.css'

const HomeRoute = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <>
      <Header />
      <div className="bg-container">
        <Carousel />
        <AllRestaurants />
      </div>
      <Footer />
    </>
  )
}

export default HomeRoute
