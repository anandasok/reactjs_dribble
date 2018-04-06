import React from 'react';

const FooterCol1 = () => {
    return(
        <div>
            <p className="logo"><a href="/"><img width="80" alt="dribbble" src="https://cdn.dribbble.com/assets/logo-footer-hd-a05db77841b4b27c0bf23ec1378e97c988190dfe7d26e32e1faea7269f9e001b.png" /></a>
            <br />Show and tell for designers</p>
            <p className="about">What are you working on? Dribbble is a community of designers sharing screenshots of their work, process, and projects.</p>
            <p className="follow">
                <a href="/dribbble"><img width="24" src="https://cdn.dribbble.com/assets/icon-team-dribbble-8706862cdb0afa7f43f9e0218b073515f0a2bef19780961d324ae4620ebe249b.png" alt="Icon team dribbble" /></a>
                <a href="http://twitter.com/dribbble"><img width="24" src="https://cdn.dribbble.com/assets/icon-team-twitter-1fa6921d96b16e47f00ad0381ebbab59ba089c22b21f9bce783c9a4a077f40e9.png" alt="Icon team twitter" /></a>
                <a href="http://facebook.com/dribbble"><img width="24" src="https://cdn.dribbble.com/assets/icon-team-facebook-4d63851997b88eb903858057327d93df9f950a55c5104a3a19206f2005682ea3.png" alt="Icon team facebook" /></a>
                <a href="http://instagram.com/dribbble"><img width="24" src="https://cdn.dribbble.com/assets/icon-team-instagram-5dfdcd1478ea4a1c1e109b32adbd3878062aa1eb571da63ac379e0da1d2d5762.png" alt="Icon team instagram" /></a>
                <a href="/stories">
                <img width="24" src="https://cdn.dribbble.com/assets/icon-team-blog-2705adcb7ee6522051e175d10683208f0fa0ad17daa15fdf3f36aca99c540312.png" alt="Icon team blog" />
                </a>
            </p>
        </div>
    )
}

export default FooterCol1;