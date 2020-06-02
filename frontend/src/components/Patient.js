import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

const Patient = ({datings}) => {

    if (datings.length === 0 ) return null;

    return (
        <Fragment>
            <h1 className="my-5">Clients Handler</h1>
            <div className="container mt-5 py=5">
                <div className="row">
                    <div className="col-12 mb-5 d-flex justify-content-center">
                        <Link to={'/new'} className="btn btn-success text-uppercase py-2 px-5 font-weight-bold">Create Dating</Link>
                    </div>
                </div>

                <div className="col-md-8 mx-auto">
                    <div className="list-group">
                        {datings.map( dating => (
                            <Link to={`/dating/${dating._id}`} key={dating._id} className="p-5 list-group-item list-group-item-action flex-column align-item-start ">
                                <div className="d-flex w-100 justify-content-between mb-4">
                                    <h3 className="mb-3">{dating.name}</h3>
                                    <small className="discharge-date">
                                        {dating.date} - {dating.time}
                                    </small>
                                </div>
                                <p className="mb-0">
                                    {dating.symptom}
                                </p>
                                <div className="contact py-3">
                                    <p>Owner: {dating.petOwner}</p>
                                </div>
                            </Link>
                        ))}
                    </div>

                </div>
            </div>

        </Fragment>
    );
}

export default Patient;