import React from 'react'

// Memoized to prevent re-renders since this component renders static content
export const Company = React.memo(function Company(){
    return(
        <div className="inline-flex w-full flex-nowrap overflow-hidden bg-white [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] mb-8 py-2">
            <ul className="brands-wrapper">
                <li>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" width="250" height="100" />
                </li>
                <li>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" width="250" height="100" />
                </li>
                <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" width="250" height="100" /></li>
                <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" width="250" height="100" /></li>
                <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" width="250" height="100" /></li>
                <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" width="250" height="100" /></li>
                <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" width="250" height="100" /></li>
            </ul>
            <ul className="brands-wrapper" aria-hidden="true">
                <li>
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" width="250" height="100" />
                </li>
                <li>
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" width="250" height="100" />
                </li>
                <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" width="250" height="100" /></li>
                <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" width="250" height="100" /></li>
                <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" width="250" height="100" /></li>
                <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" width="250" height="100" /></li>
                <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" width="250" height="100" /></li>
            </ul>
        </div>
    )
})

Company.displayName = 'Company'