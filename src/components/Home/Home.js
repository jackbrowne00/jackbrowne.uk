import React from 'react'
import Hero from './hero/hero'
import TextBlock from './TextBlock/TextBlock'

const Home = () => {
    return (
        <div>
            <Hero/>
            <TextBlock header="Jack"/>
            <TextBlock header="Browne"/>
            <TextBlock header="hello there"/>
        </div>
    )
}

export default Home