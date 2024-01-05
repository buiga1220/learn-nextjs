import React from 'react'
import PropTypes from 'prop-types'


type AdsProps = {
    adsCode: string;
};

const Ads = (props: AdsProps) => {
    return (
        <div className='top-ad w-full h-[90px] bg-gray-500 items-center flex justify-center'>ADS</div>
    );
};


Ads.propTypes = { adsCode: PropTypes.string };


export default Ads