import React, { Fragment } from 'react';
import {Link, withRouter } from 'react-router-dom';
import axiosClient from '../config/axios';
import Swal from 'sweetalert2';

const Dating = (props) => {
    console.log(props.dating);
    const { dating: {_id, name, petOwner, date, time, symptom} } = props;

    if (!props) {
        props.history.push('/');
        return null;
    }

    const deleteDating = id =>{

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {
                Swal.fire(
                    'Deleted!',
                    'Your dating has been deleted.',
                    'success'
                )

                axiosClient.delete(`patients/${id}`)
                .then( res =>{
                    props.saveQueries(true);
                    props.history.push('/');
                })
                .catch( error => console.log(error));

            }
        })

    }
    
    return (
        <Fragment>
            <h1 className='my-5'> Dating name: {name} </h1>

            <div className="container mt-5 py=5">
                <div className="row">
                    <div className="col-12 mb-5 d-flex justify-content-center">
                        <Link to={'/'} className="btn btn-success text-uppercase py-2 px-5 font-weight-bold">Return</Link>
                    </div>
                </div>

                <div className="col-md-8 mx-auto">
                    <div className="list-group">
                        <div className="p-5 list-group-item list-group-item-action flex-column align-items-center">
                            <div className="d-flex w-100 justify-content-between mb-4">
                                <h3 className="mb-3">{name}</h3>
                                <small className="discharge-date">
                                    {date} - {time}
                                </small>
                            </div>
                            <p className="mb-0">
                                {symptom}
                            </p>
                            <div className="contact py-3">
                                <p>Owner: {petOwner}</p>
                            </div>
                            <div className="d-flex">
                                <button 
                                    type="button" 
                                    className="text-uppercase py-2 px-5 font-weight-bold btn btn-danger col"
                                    onClick={ () => deleteDating(_id) }>
                                    Delete &times;
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </Fragment>
        
    );
}

export default withRouter(Dating);