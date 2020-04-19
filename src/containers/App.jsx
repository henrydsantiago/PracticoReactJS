import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'
import Footer from '../components/Footer'
import useInitialState from '../hooks/useInitialState'
import '../assets/styles/App.scss'

const API = 'http://localhost:3000/initalState'

const App = () => {
    const initalState = useInitialState(API)

    return (
        <div className="App"> 
        <Header/>
        <Search/>

        {initalState.mylist.length > 0 &&        
            <Categories title="Mi Lista">
                <Carousel>
                    <CarouselItem/>
                </Carousel> 
            </Categories>
        }

        <Categories title="Tendencia">
            <Carousel>
                {
                    initalState.trends.map( item => 
                        <CarouselItem key={item.id}{...item} />)
                }
            </Carousel> 
        </Categories>

        <Categories title="Películas de Acción">
            <Carousel>
                <CarouselItem/>
            </Carousel> 
        </Categories>


        <Footer/>
    </div>
    )
}

export default App