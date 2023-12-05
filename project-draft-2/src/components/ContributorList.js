import React from 'react';
import { Link } from 'react-router-dom';

export default function ContributorList(props) {
    let infoAboutUs = props.infoAboutUs;
    let eachContributorCard = infoAboutUs.map((contributor) => {
        return <ContributorCard key={contributor.name} contributor={contributor} />;
    })

    return (
        <div>
            <h2>About Each Contributor</h2>
            <div className="row">
                {eachContributorCard}
            </div>
        </div>
    );
}

function ContributorCard(props) {
    let contributor = props.contributor;
    return (
        <div className="col-4 flex-grow-1">
            <div className="card mb-3">
                <img className="card-img-top" src={contributor.images[0]} alt={contributor.name + "Image"} />
                <div className="card-body">
                    <h3 className="card-title">{contributor.name}</h3>
                    <p className="card-text">{contributor.description}</p>
                    <Link className="btn btn-primary" to={contributor.name}>Learn more about: {contributor.name}</Link>
                </div>
            </div>
        </div>
    );
}