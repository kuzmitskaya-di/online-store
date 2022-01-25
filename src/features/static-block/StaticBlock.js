import React from 'react';
import s from './StaticBlock.module.css';
import Static from "./static/Static";
import diamond from "../../static/img/diamond.svg"
import plane from "../../static/img/plane 2.svg"
import share from "../../static/img/share.svg"
import rocket from "../../static/img/rocket.svg"

const StaticBlock = () => {
    const {
        wrapper,
        img_diamond,
        static_elem,
        img_plane,
        img_share,
        img_rocket
    } = s;
    return (
        <section className={wrapper}>
            <article className={static_elem}>
                <img alt=" " src={diamond} className={img_diamond}/>
                <Static text1="SPECIAL OFFERS" text2="Shop Big Save Big"/>
            </article>
            <div className={static_elem}>
                <img alt=" " src={plane} className={img_plane}/>
                <Static text1="FREE DELIVERY" text2="On Orders Above $99"/>
            </div>
            <div className={static_elem}>
                <img alt=" " src={share} className={img_share}/>
                <Static text1="30 DAYS RETURN" text2="Policy We Offers"/>
            </div>
            <div className={static_elem}>
                <img alt=" " src={rocket} className={img_rocket}/>
                <Static text1="FASTEST SHIPPING" text2="2 Days Express"/>
            </div>
        </section>
    );
}

export default StaticBlock;