// in here, we will have information about each contributor to the project:
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useParams } from 'react-router-dom';
import _ from 'lodash';

//importing a data file with information about each on
import INFO_ABOUT_US from '../data/infoAboutus.json';

export default function ContributorDetail(props) {
    const contributorNameString = useParams().contributorName;
    //adding setState and event listener to follow each time a user clicks one of the arrows on the slides 
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    let contributor = _.find(INFO_ABOUT_US, { name: contributorNameString }); //find each contributor in the data

    if (!contributor) return <h2>No such contributor exists</h2>

    //make a bootstrap carousel to display each contributor:
    // let carouselItems = contributor.images.map(function (img, imgIndex) {
    //     return (
    //         <Carousel.Item key={imgIndex} className="carousel-item">
    //             <img className="contributor-image" src={'../' + img} alt={contributor.name + ' Image'} />
    //         </Carousel.Item>
    //     )
    // });


    // return (
    //     <div className="contributor-detail">
    //         <h2>About: {contributor.name}</h2>
    //         <p>{contributor.description}</p>
    //         <div className="carousel-container">
    //             <Carousel activeIndex={index} onSelect={handleSelect} indicators={false} prevLabel="" nextLabel="" interval={null}>
    //                 {carouselItems}
    //             </Carousel>
    //         </div>
    //     </div>
    // );
    return (
        <div className="contributor-detail">
            <h2 className="carousel-heading-style">About: {contributor.name}</h2>
            <p className="carousel-heading-style">{contributor.description}</p>
            <div className="carousel-container">
                <Carousel activeIndex={index} onSelect={handleSelect} indicators={false} prevLabel="" nextLabel="" interval={null}>
                    {contributor.images.map((img, imgIndex) => (
                        <Carousel.Item key={imgIndex} className="carousel-item">
                            <img
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    maxWidth: '600px',
                                    maxHeight: '600px',
                                }}
                                src={'../' + img}
                                alt={contributor.name + ' Image'}
                            />
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        </div>
    );
}