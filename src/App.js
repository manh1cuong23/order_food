import '~/App.css';
import DefaultLayout from './layouts/DefaultLayout/DefaultLayout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes/routes';
import { Fragment, useEffect } from 'react';

import React, { useState } from 'react';
import LoadingSpinner from './layouts/components/LoadingSpinner/LoadingSpinner';
import ScrollToTop from './hooks/scrollToTop';

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        // return setIsLoading(false);
    }, [isLoading]);

    return (
        <Router>
            <div className="App">
                <ScrollToTop />
                {/* {isLoading ? (
                    <LoadingSpinner />
                ) : ( */}
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;

                        let Layout = DefaultLayout;

                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
                {/* )} */}
            </div>
        </Router>
    );
}

export default App;
