import React from 'react';
import walletBackground from '../../../resources/near-wallet.png'

const NearWithText = React.memo(() => {
    return (
        <img src={walletBackground} className="object-contain" alt="near"/>
        // <svg fill="#4391ff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 414 162" className="w-full h-full">
        //     <path
        //         d="M207.21 54.75v52.5a.76.76 0 0 1-.75.75H201a7.49 7.49 0 0 1-6.3-3.43l-24.78-38.3.85 19.13v21.85a.76.76 0 0 1-.75.75h-7.22a.76.76 0 0 1-.75-.75v-52.5a.76.76 0 0 1 .75-.75h5.43a7.52 7.52 0 0 1 6.3 3.42l24.78 38.24-.77-19.06V54.75a.75.75 0 0 1 .75-.75h7.22a.76.76 0 0 1 .7.75ZM281 108h-7.64a.75.75 0 0 1-.7-1l20.24-52.28A1.14 1.14 0 0 1 294 54h9.57a1.14 1.14 0 0 1 1.05.72L324.8 107a.75.75 0 0 1-.7 1h-7.64a.76.76 0 0 1-.71-.48l-16.31-43a.75.75 0 0 0-1.41 0l-16.31 43a.76.76 0 0 1-.72.48ZM377.84 106.79 362.66 87.4c8.57-1.62 13.58-7.4 13.58-16.27 0-10.19-6.63-17.13-18.36-17.13h-21.17a1.12 1.12 0 0 0-1.12 1.12 7.2 7.2 0 0 0 7.2 7.2H357c7.09 0 10.49 3.63 10.49 8.87s-3.32 9-10.49 9h-20.29a1.13 1.13 0 0 0-1.12 1.13v26a.75.75 0 0 0 .75.75h7.22a.76.76 0 0 0 .75-.75V87.87h8.33l13.17 17.19a7.51 7.51 0 0 0 6 2.94h5.48a.75.75 0 0 0 .55-1.21ZM258.17 54h-33.5a1 1 0 0 0-1 1 7.33 7.33 0 0 0 7.33 7.33h27.17a.74.74 0 0 0 .75-.75v-6.83a.75.75 0 0 0-.75-.75Zm0 45.67h-25a.76.76 0 0 1-.75-.75V85.38a.75.75 0 0 1 .75-.75h23.11a.75.75 0 0 0 .75-.75V77a.75.75 0 0 0-.75-.75h-31.49a1.13 1.13 0 0 0-1.12 1.13v29.46a1.12 1.12 0 0 0 1.12 1.12h33.38a.75.75 0 0 0 .75-.75v-6.83a.74.74 0 0 0-.75-.71ZM108.24 40.57 89.42 68.5a2 2 0 0 0 3 2.63l18.52-16a.74.74 0 0 1 1.24.56v50.29a.75.75 0 0 1-1.32.48l-56-67A9.59 9.59 0 0 0 47.54 36h-1.95A9.59 9.59 0 0 0 36 45.59v70.82a9.59 9.59 0 0 0 9.59 9.59 9.59 9.59 0 0 0 8.17-4.57L72.58 93.5a2 2 0 0 0-3-2.63l-18.52 16a.74.74 0 0 1-1.24-.56V56.07a.75.75 0 0 1 1.32-.48l56 67a9.59 9.59 0 0 0 7.33 3.4h2a9.59 9.59 0 0 0 9.59-9.59V45.59a9.59 9.59 0 0 0-9.65-9.59 9.59 9.59 0 0 0-8.17 4.57Z"/>
        // </svg>
    );
});

export default NearWithText;