import React from 'react';
import HeroBanner from '../../../widget/HeroBanner/HeroBanner';
import IHeroBanner from '../../../widget/HeroBanner/IHeroBanner';
import image1 from '../../../assets/carousel-images/image-01.jpg';
import image2 from '../../../assets/carousel-images/image-02.jpg';


const Home = () => {
    const data: Array<IHeroBanner> = [
        { name: image1 , alt: 'Address' },
        { name: image2 , alt: 'Address' }
    ]
    return (
        <React.Fragment>
            <HeroBanner bannerData={data}></HeroBanner>
        </React.Fragment>
    )
}

export default Home;