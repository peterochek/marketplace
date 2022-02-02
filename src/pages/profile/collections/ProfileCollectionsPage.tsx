import React from 'react';
import BlueShadowContainer from "../../../components/Common/shadow/BlueShadowContainer";
import DarkBlueTitle from "../../../components/Common/text/DarkBlueTitle";
import ProfileCollectionsFetch from "./ProfileCollectionsFetch";

const ProfileCollectionsPage = () => {
    return (
        <>
            <div className="bg-white">
                <BlueShadowContainer>
                    <div className="pb-10 px-4 space-y-8">
                        <DarkBlueTitle title="My Collections"/>
                    </div>
                </BlueShadowContainer>
            </div>
            <ProfileCollectionsFetch/>
        </>
    );
};

export default ProfileCollectionsPage;