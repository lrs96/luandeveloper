import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName } from '@fortawesome/fontawesome-svg-core';

interface ISocial {
    href?: string;
    target?: string;
    rel?: string;
    icon: IconName;
}

interface ISocialList {
    icons: Array<ISocial>;
}

const Social: React.FC<ISocialList> = props => {
    const { icons } = props;
    return (
        <div className="social mt-3">
            {icons.map( (item, i) => {
                return (
                    <a key={i} href={item.href} rel={item.rel} data-icon={item.icon} target={item.target} className="social-item">
                    <FontAwesomeIcon icon={["fab", item.icon]} />
                    </a>
                )
            })}      
        </div>
    )
}

export default Social;