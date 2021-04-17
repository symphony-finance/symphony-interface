import React from 'react';
import '../../scss/styles.scss';
import { Box } from '@chakra-ui/layout';
import SocialLinks from '../SocialLinks';

export default function Main() {
    return (
        <div>
            {/* Navigation*/}
            <nav className="navbar navbar-expand-lg navbar-light py-3" id="mainNav">
                <div className="container">
                    <a className="navbar-brand js-scroll-trigger" href="#page-top">
                        Symphony Finance
                    </a>
                    <button
                        className="navbar-toggler navbar-toggler-right"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarResponsive"
                        aria-controls="navbarResponsive"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto my-2 my-lg-0">
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" style={{ marginTop: "7px" }} href="#about">
                                    ABOUT
                                </a>
                            </li>
                            <SocialLinks />
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Homepage*/}
            <header className="homepage" id="page-top">
                <div className="container h-100">
                    <div className="row h-100 align-items-center justify-content-center text-center">
                        <div className="col-lg-10 align-self-end">
                            <h1 className="text-uppercase font-weight-bold">
                                COMING SOON
                            </h1>
                            <hr className="divider my-4" />
                        </div>
                        <div className="col-lg-8 align-self-baseline">
                        </div>
                    </div>
                </div>
            </header>


            {/* Footer*/}
            <footer className="bg-light py-5">
                <div className="container">
                    <Box maxW="containerLg" color="white" d="flex" justifyContent="space-between">
                        <div className="small text-muted">
                            Copyright © 2021 - Symphony Finance
                        </div>
                        <SocialLinks />
                    </Box>
                </div>
            </footer>
        </div >
    );
}
