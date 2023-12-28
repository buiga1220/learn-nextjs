import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
import List1 from "../../../components/List1";

// Define prop types for the Page component
GamesPage.propTypes = {
    // Define the prop types here, for example:
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    // Add more prop types as needed
};

function GamesPage(props: { title: any; description: any; }) {
    // Access props like title and description inside your component
    const { title, description } = props;

    return (
        <>
            <List1 title={'Game De xuat'}/>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    1
                </Grid>
                <Grid item xs={4}>
                    1
                </Grid>
                <Grid item xs={4}>
                    1
                </Grid>
                <Grid item xs={8}>
                    1
                </Grid>
            </Grid>
        </>
    );
}

export default GamesPage;
