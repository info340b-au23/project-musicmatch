import React from 'react';
import { Link } from 'react-router-dom';

export default function ContributorList(props) {
    let infoAboutUs = props.infoAboutUs;
    let eachContributorCard = infoAboutUs.map((contributor) => {
        return <ContributorCard key={contributor.name} contributor={contributor} />;
    })

    return (
        <div>
            <h2 className="contributorlist-header">Learn About Each Contributor:</h2>
            <div className="row contributorlist-name">
                {eachContributorCard}
            </div>
        </div>
    );
}

function ContributorCard(props) {
    let contributor = props.contributor;
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 contributor-card">
        <div className="card mb-3 d-flex">
            <img className="card-img-top" src={contributor.images[0]} alt={contributor.name + "'s Image"} />
            <div className="card-body">
                <h3 className="card-title">{contributor.name}</h3>
                <Link className="btn btn-info" to={contributor.name}>Learn more about: {contributor.name}</Link>
            </div>
        </div>
    </div>
    );
}