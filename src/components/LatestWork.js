import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBView, MDBMask } from "mdbreact";


const LatestWork = () => {

    return (
        <div id="latest-work" className="text-white">
            <MDBContainer fluid className="projects-container w-responsive text-center mx-auto flex-center flex-column h-auto" style={{ color: '#fff' }}>
                <h3 className="work-header text-center pb-sm-3 pt-sm-3">Latest Work</h3>
                <MDBRow>
                    <MDBCol md="4" style={{ paddingBottom: '25px' }}>
                        <MDBView hover zoom>
                            <img className="img-fluid"
                                src={require('../img/Employee-Directory.PNG')}
                                alt='Employee-Directory'
                                title='Employee-Directory'
                                style={{ width: '450px' }}
                            />
                            <a href='https://github.com/TomxLi/employee-directory' target="_blank" rel="noopener noreferrer">
                                <MDBMask className="flex-center">
                                    <p
                                        className="white-text text-capitalize"
                                        style={{
                                            backgroundColor: 'rgba(0,0,0,0.6)',
                                            padding: '5px',
                                            textAlign: 'center',
                                            fontSize: '15px',
                                        }}
                                    >
                                        'Employee-Directory'
                                    </p>
                                </MDBMask>
                            </a>
                        </MDBView>
                    </MDBCol>
                    <MDBCol md="4" style={{ paddingBottom: '25px' }}>
                        <MDBView hover zoom>
                            <img className="img-fluid"
                                src={require('../img/workout.PNG')}
                                alt='workout-tracker'
                                title='workout-tracker'
                                style={{ width: '450px' }}
                            />
                            <a href='https://github.com/TomxLi/workout-tracker' target="_blank" rel="noopener noreferrer">
                                <MDBMask className="flex-center">
                                    <p
                                        className="white-text text-capitalize"
                                        style={{
                                            backgroundColor: 'rgba(0,0,0,0.6)',
                                            padding: '5px',
                                            textAlign: 'center',
                                            fontSize: '15px',
                                        }}
                                    >
                                        'workout-tracker'
                                    </p>
                                </MDBMask>
                            </a>
                        </MDBView>
                    </MDBCol>
                    <MDBCol md="4" style={{ paddingBottom: '25px' }}>
                        <MDBView hover zoom>
                            <img className="img-fluid"
                                src={require('../img/budget.PNG')}
                                alt='budget-tracker'
                                title='budget-tracker'
                                style={{ width: '450px' }}
                            />
                            <a href='https://github.com/TomxLi/budget-tracker' target="_blank" rel="noopener noreferrer">
                                <MDBMask className="flex-center">
                                    <p
                                        className="white-text text-capitalize"
                                        style={{
                                            backgroundColor: 'rgba(0,0,0,0.6)',
                                            padding: '5px',
                                            textAlign: 'center',
                                            fontSize: '15px',
                                        }}
                                    >
                                        'budget-tracker'
                                    </p>
                                </MDBMask>
                            </a>
                        </MDBView>
                    </MDBCol>
                    <MDBCol md="4" style={{ paddingBottom: '25px' }}>
                        <MDBView hover zoom>
                            <img className="img-fluid"
                                src={require('../img/burger.PNG')}
                                alt='burger'
                                title='burger'
                                style={{ width: '450px' }}
                            />
                            <a href='https://github.com/TomxLi/burger' target="_blank" rel="noopener noreferrer">
                                <MDBMask className="flex-center">
                                    <p
                                        className="white-text text-capitalize"
                                        style={{
                                            backgroundColor: 'rgba(0,0,0,0.6)',
                                            padding: '5px',
                                            textAlign: 'center',
                                            fontSize: '15px',
                                        }}
                                    >
                                        'burger'
                                    </p>
                                </MDBMask>
                            </a>
                        </MDBView>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    )
}

export default LatestWork;