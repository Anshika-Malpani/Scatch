import React from 'react'
import PageOne from '../components/PageOne'
import TopFeatures from '../components/TopFeatures'
import LatestProduct from '../components/LatestProduct'
import Footer from "../components/Footer"


const Home = () => {
    return (
        <>
            <PageOne />
            <TopFeatures />
            <LatestProduct />
            <Footer />
        </>
    )
}

export default Home