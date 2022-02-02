import React from 'react';
import {useAppSelector} from "../../../hooks/redux";


import NftFilters from "./NftFilters";
import CardList from "../../../components/CardList/ExploreCardList";

const ExploreNftsPage = () => {

    const totalItems = useAppSelector(state => state.explore.nfts.total)

    return (
        <>
            <NftFilters/>
            <div className="mb-5 font-mono text-center text-gray-600">
                Total items: {totalItems}
            </div>
            <CardList/>
        </>
    )
};

export default ExploreNftsPage;