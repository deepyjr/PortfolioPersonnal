import React from 'react'
import {
    Header, Caroussel,DownPart, Slider
} from '../components/index'
import './MainPage.css'

function MainPage() {
    return (
        <div className="main">
            <Header></Header>
            <div className="homePageContainer">
                <Caroussel></Caroussel>
                <DownPart></DownPart>
            </div>
          
            {/* <Slider></Slider> */}
            <Caroussel></Caroussel>
            <Caroussel></Caroussel>
            <Caroussel></Caroussel>
            
        </div>
    )
}

export default MainPage
