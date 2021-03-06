import React from 'react'
import HomeSection from './HomeSection'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Homedata'

function Home() {
    return (
        <>
            <HomeSection {...homeObjOne} />
            <HomeSection {...homeObjTwo} />
            <HomeSection {...homeObjThree} />
            <HomeSection {...homeObjFour} />  
        </>
    )
}

export default Home
