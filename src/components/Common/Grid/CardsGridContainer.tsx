import React from 'react';

const CardsGridContainer: React.FC = ({children}) => {
    return (
            <div className="grid grid-cols-1 xxs:grid-cols-[repeat(auto-fit,_300px)] justify-center
                            gap-4 md:gap-5 2xl:gap-8 px-8 md:px-[20px]"
            >
                {children}
            </div>
    );
};

export default CardsGridContainer;