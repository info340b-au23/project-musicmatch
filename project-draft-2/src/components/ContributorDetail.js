// in here, we will have information about each contributor to the project:
import React from 'react';
import { NavLink } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import { useParams } from 'react-router-dom';
import _ from 'lodash';

//importing a data file with information about each on
import INFO_ABOUT_US from '../data/infoAboutus.json';

export default function ContributorDetail(props) {
    const contributorNameString = useParams().contributorName;

    let contributor = _.find(INFO_ABOUT_US, { name: contributorNameString }); //find each contributor in the data

    //make a bootstrap carousel to display each contributor:
    let carouselItems = contributor.images.map(function (img) {
        return (
            <Carousel.Item key={img}>
                <img className="d-block" src={'../' + img} alt={contributor.name + " Image"} />
            </Carousel.Item>
        )
    })

    return (
        <div>
            <h2>About: {contributor.name}</h2>
            <p className="lead">{contributor.description}</p>
            <div>
                <Carousel indicators={false} prevLabel="" nextLabel="">
                    {carouselItems}
                </Carousel>
            </div>
        </div>
    );
}