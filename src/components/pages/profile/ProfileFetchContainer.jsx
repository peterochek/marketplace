import React, {useEffect} from 'react';
import {getNfts} from "../../../business-logic/near/get-nfts";
import ProfilePage from "./ProfilePage";
import {useFetching} from "../../../hooks/useFetching";

const ProfileFetchContainer = ({profile, changeProfileTab, pushNFT, setFetching, setNfts, setHistory}) => {
    useEffect(() => {
        if (window.walletConnection.isSignedIn()) {
            useFetching(setFetching, (onFetch) =>
                getNfts("turk.near")
                    .then(nfts => nfts
                        .map(nftPromise =>
                            nftPromise
                                .then(pushNFT))
                    )
                    .finally(onFetch))
        }
        return () => {
            setNfts([])
            setHistory([])
        }
    }, [])

    return <ProfilePage profile={profile} changeProfileTab={changeProfileTab}/>
};

export default ProfileFetchContainer;