import React from 'react';
import classNames from 'classnames/bind';
import style from './PartnerLogo.module.scss';

import logo1 from "~/assets/imgs/logo-1.png";
import logo2 from "~/assets/imgs/logo-2.png";
import logo3 from "~/assets/imgs/logo-3.png";
import logo4 from "~/assets/imgs/logo-4.png";
import logo5 from "~/assets/imgs/logo-5.png";

const cx = classNames.bind(style);

function PartnerLogo() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <img className={cx("logo")} src={logo1} alt="logo-1" />
                <img className={cx("logo")} src={logo2} alt="logo-2" />
                <img className={cx("logo")} src={logo3} alt="logo-3" />
                <img className={cx("logo")} src={logo4} alt="logo-4" />
                <img className={cx("logo")} src={logo5} alt="logo-5" />
            </div>

        </div>
    );
}

export default PartnerLogo;
