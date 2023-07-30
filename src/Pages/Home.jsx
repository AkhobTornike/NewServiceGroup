import React from 'react'
import backgroundImage from './picture.png'

function Home() {
    return (
        <>
            {/* 3D BAckground Gif logo */}
            <div className="h-screen flex items-center justify-center bg-center bg-cover"
            style={{ backgroundImage: `url(${backgroundImage})` }}
            >
                
            </div>
        </>
    )
}

export default Home