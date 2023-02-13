import React, {useEffect} from 'react';
import {getAllServices} from "../api/getAllServices";

const TestPage = () => {
    async function getServices() {
        await getAllServices()
    }

    useEffect(() => {
        getServices()
    }, [])
    return (
        <div>Test</div>
    );
};

export default TestPage;