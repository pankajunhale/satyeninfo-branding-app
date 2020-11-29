import React from 'react';
import { Carousel, CarouselItem } from 'react-bootstrap';
import IHeroBannerViewModel from './IHeroBannerViewModel';

const HeroBanner: React.FC<IHeroBannerViewModel> = ({
    bannerData
}) =>{    
    return (        
        <React.Fragment>
            <Carousel>
            {bannerData.map((item,index)=>{
                return (
                        <CarouselItem key={index}>
                            <img
                                className="d-block w-100"
                                src={`${item.name}`}
                                alt="First slide"
                            />
                        </CarouselItem>                 
                )               
            })            
            }
            </Carousel>
        </React.Fragment>
    );
}

export default HeroBanner;