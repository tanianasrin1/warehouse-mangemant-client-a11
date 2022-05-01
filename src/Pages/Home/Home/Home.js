import React from 'react';
import Banner from '../Banner/Banner';
import ExtraPart1 from '../ExtraPart1/ExtraPart1';
import ExtraPart2 from '../ExtraPart2/ExtraPart2';
import InventoryItems from '../InventoryItems/InventoryItems';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <InventoryItems></InventoryItems>
            <ExtraPart1></ExtraPart1>
            <ExtraPart2></ExtraPart2>
        </>
    );
};

export default Home;