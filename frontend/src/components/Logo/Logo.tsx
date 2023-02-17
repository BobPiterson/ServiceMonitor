import React, {FC} from 'react';

interface LogoProps {
    classLogo?: string
    mode?: boolean
}

const Logo: FC<LogoProps> = ({mode, classLogo}) => {
    return (
        mode
            ?
            <img className={classLogo} src="/logo.png" alt="logo" width={50} height={50}/>
            :
            <img className={classLogo} src="/logo.png" alt="logo" width={50} height={50}/>
    );
};

export default Logo;