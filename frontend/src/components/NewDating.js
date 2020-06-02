import React, { Fragment, useState  } from 'react';
import {Link, withRouter } from 'react-router-dom';
import axiosClient from '../config/axios';

const NewDating = (props) => {

    const [datings, saveDating] = useState({
        name:'',
        petOwner:'',
        date:'',
        time:'',
        symptom:''
    });

    const updateState = e =>{
        saveDating({
            ...datings,
            [e.target.name] : e.target.value
        })
    };

    const addDating = e =>{
        e.preventDefault();
        axiosClient.post('/patients', datings)
            .then(res => {
                props.saveQueries(true);
                props.history.push('/');
            }).catch( error => console.log(error));
    }


    return (
        <Fragment> 
            <h1 className="my-5"> Add new dating</h1>

            <div className="container mt-5 py=5">
                <div className="row">
                    <div className="col-12 mb-5 d-flex justify-content-center">
                        <Link to={'/'} className="btn btn-success text-uppercase py-2 px-5 font-weight-bold">Return</Link>
                    </div>

                    <div className="col-md-8 mx-auto">
                        <form 
                            onSubmit={addDating}
                            className="bg-white p-5 bordered">
                            <div className="form-group">
                                <label htmlFor="nombre">petName</label>
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    id="name" 
                                    name="name" 
                                    placeholder="Pet Name"
                                    onChange={updateState} 
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="propietario">Pet Owner Name</label>
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    id="petOwner" 
                                    name="petOwner" 
                                    placeholder="Pet owner" 
                                    onChange={updateState} 
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="fecha">Discharge Date</label>
                                <input 
                                    type="date" 
                                    className="form-control form-control-lg" 
                                    id="date" 
                                    name="date"  
                                    onChange={updateState} 
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="hora">time</label>
                                <input 
                                    type="time" 
                                    className="form-control form-control-lg" 
                                    id="time" 
                                    name="time"  
                                    onChange={updateState} 
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="sintomas">Symptom</label>
                                <textarea 
                                    className="form-control" 
                                    name="symptom" 
                                    rows="6"
                                    onChange={updateState} 
                                ></textarea>
                            </div>


                            <input type="submit" className="btn btn-primary mt-3 w-100 p-3 text-uppercase font-weight-bold" value="Add date"  />
                        </form>
                    </div>
                </div>
            </div>

        </Fragment>
    );
}

export default withRouter(NewDating);