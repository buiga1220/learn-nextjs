import React from "react";
import PropTypes from "prop-types";
import {Grid} from "@mui/material";
import ListStyle1 from "@/components/ListStyle1";

// Define prop types for the Page component
GamesPage.propTypes = {
    // Define the prop types here, for example:
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    // Add more prop types as needed
};

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}


function GamesPage(props: { title: any; description: any }) {
    // Access props like title and description inside your component
    const {title, description} = props;

    return (
        <>
            <ListStyle1 title="Game Recommend"/>
        </>

    );
}

export default GamesPage;
