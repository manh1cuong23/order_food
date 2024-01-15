import classNames from 'classnames/bind';
import style from './Deal.module.scss';

import img1 from '~/assets/imgs/time-bg.jpg';

const cx = classNames.bind(style);

function Deal() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('deal')}>
                <img className={cx("image-wrapper")} src={img1} alt="bg-deal" />
                <div className={cx('content')}>
                    <h1 className={cx('content-title')}>Deal Of The Weak</h1>
                    <p className={cx('content-intro')}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do ipsum dolor sit amet,
                        consectetur adipisicing elit
                    </p>
                    <span className={cx('content-price')}>
                        $35 / <p className={cx('content-product')}>&nbsp;HanBag</p>
                    </span>
                    <div className={cx('content-time')}>
                        <div>
                            <span>27</span>
                            <span>DAYS</span>
                        </div>
                        <div>
                            <span>02</span>
                            <span>HRS</span>
                        </div>
                        <div>
                            <span>37</span>
                            <span>MINS</span>
                        </div>
                        <div>
                            <span>02</span>
                            <span>SECS</span>
                        </div>
                    </div>
                    <button className={cx('content-btn')}>SHOP NOW</button>
                </div>
            </div>
        </div>
    );
}

export default Deal;
