import React from 'react';
import classNames from 'classnames/bind';
import style from './BannerSection.module.scss';

import banner1 from '~/assets/imgs/banner-1.jpg';
import banner2 from '~/assets/imgs/banner-2.jpg';
import banner3 from '~/assets/imgs/banner-3.jpg';

const cx = classNames.bind(style);

function PartnerLogo() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx("container")}>
                <div className={cx("single-banner")}>
                    <img src={banner1} alt="banner-1" />
                    <div className={cx("inner-text")}>
                        <h4>Men’s</h4>
                    </div>
                </div>
                <div className={cx("single-banner")}>
                    <img src={banner2} alt="banner-2" />
                    <div className={cx("inner-text")}>
                        <h4>Women’s</h4>
                    </div>
                </div>
                <div className={cx("single-banner")}>
                    <img src={banner3} alt="banner-3" />
                    <div className={cx("inner-text")}>
                        <h4>Kid’s</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PartnerLogo;
