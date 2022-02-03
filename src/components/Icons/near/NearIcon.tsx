import React from 'react';

interface IconProps {
    size: number,
    fill: string
}

const NearIcon: React.FC<IconProps> = ({size, fill}) => {
    return (
        <div style={{
            width: size,
            height: size
        }}>
            <svg viewBox="0 0 288 288" xmlns="http://www.w3.org/2000/svg">
                <linearGradient id="a" gradientUnits="userSpaceOnUse" x1="76.81" x2="211.16" y1="211.17" y2="76.81">
                    <stop offset=".21" stopColor={fill}/>
                    <stop offset=".42" stopColor={fill} stopOpacity="0"/>
                    <stop offset=".59" stopColor={fill} stopOpacity="0"/>
                    <stop offset=".81" stopColor={fill}/>
                </linearGradient>
                <path
                    d="m88.46 216a16.45 16.45 0 0 0 12.46-5.71l112.56-130.57a16.42 16.42 0 0 0 -13.94-7.72 16.46 16.46 0 0 0 -12.41 5.65l-113.13 129.8a16.46 16.46 0 0 0 14.46 8.55z"
                    fill="url(#a)"/>
                <path
                    d="m88.46 216a16.46 16.46 0 0 0 7.54-1.83v-109l87.45 104.94a16.44 16.44 0 0 0 12.64 5.89h3.45a16.46 16.46 0 0 0 16.46-16.46v-111.08a16.46 16.46 0 0 0 -16.46-16.46 16.36 16.36 0 0 0 -7.54 1.81v109.05l-87.45-104.94a16.44 16.44 0 0 0 -12.64-5.92h-3.45a16.46 16.46 0 0 0 -16.46 16.46v111.08a16.46 16.46 0 0 0 16.46 16.46z"
                    fill={fill}/>
            </svg>
        </div>
    );
};

export default NearIcon;