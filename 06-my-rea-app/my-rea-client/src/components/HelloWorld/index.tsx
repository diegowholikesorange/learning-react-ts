import * as React from 'react';
import {useHelloQuery} from "../../generated/graphql";
import HelloWorld from "./HelloWorld";

const HelloWorldContainer = () => {

    const {data, error, loading} = useHelloQuery({
        variables: {
            title: "Dr.",
            surname: "Kenny",
            postcode: "3000"
        },
    });

    if (loading) {
        return <div>Loading...</div>;
    }
    if (error || !data) {
        return <div>ERROR: error</div>;
    }
    return <HelloWorld data={data}/>;
};

export default HelloWorldContainer;
