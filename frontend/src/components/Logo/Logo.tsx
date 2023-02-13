import React, {FC} from 'react';

interface LogoProps {
    mode?: boolean
}

const Logo: FC<LogoProps> = ({mode}) => {
    return (
        mode
            ?
            <img src="/logo2.svg" alt="logo" width={50} height={50}/>
            :
            <img src="/logo.svg" alt="logo" width={50} height={50}/>
    );
};

export default Logo;