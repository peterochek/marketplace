import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {ProfileNftsTab} from "../../../state/profile/nfts/slice";
import {fetchMyNfts} from "../../../state/profile/nfts/tokens/thunk";
import CardGrid from "../../../components/CardList/CardGrid";
import CardListLoader from "../../../components/CardList/CardListLoader";
import EmptyCardList from "../../../components/CardList/EmptyCardList";
import {profileTokensSlice} from "../../../state/profile/nfts/tokens/slice";
import {SignedInProps} from "../../../hoc/withAuthData";
import BlueToggle from "../../../components/Common/Form/Toggle/BlueToggle";
import {WhitelistedContracts} from "../../../business-logic/whitelisted.contracts";
import {ContractVerificationStatus} from "../../../business-logic/models/contract";

interface PropTypes extends SignedInProps {
}

const ProfileNftsFetch: React.FC<PropTypes> = ({accountId}) => {
    const activeTab = useAppSelector(state => state.profile.nfts.tabs.activeTab)
    const {nfts, contracts, fetching} = useAppSelector(state => state.profile.nfts.tokens)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchMyNfts(accountId))
        return () => {
            dispatch(profileTokensSlice.actions.reset())
        }
    }, [accountId])

    const [filters, setFilters] = useState({
        mjolNear: false,
        supported: true
    })

    const filteredNfts = (activeTab === ProfileNftsTab.Listed
            ? nfts.filter(nft => nft.price !== null)
            : nfts
    ).map(nft => ({
            ...nft,
            mintedInfo: {
                ...nft.mintedInfo,
                verification: contracts[nft.contractId]?.verification || nft.mintedInfo.verification
            }
        })
    ).filter(nft => {
        if (filters.mjolNear) {
            return nft.contractId === WhitelistedContracts.MjolNear
        }
        if (filters.supported) {
            return nft.mintedInfo.verification !== ContractVerificationStatus.NotSupported
        }
        return true
    })

    return (
        <>
            <div className="w-full inline-flex justify-center gap-10 mb-10">
                <BlueToggle text="Supported"
                            handleToggle={checked => setFilters({...filters, supported: checked})}
                            defaultChecked={filters.supported}/>
                <BlueToggle text="MjolNear"
                            handleToggle={checked => setFilters({...filters, mjolNear: checked})}
                            defaultChecked={filters.mjolNear}/>
            </div>
            {fetching
                ? <CardListLoader/>
                : nfts.length === 0
                    ? <EmptyCardList/>
                    : <CardGrid fetching={fetching} nfts={filteredNfts}/>
            }
        </>
    );
};

export default ProfileNftsFetch;