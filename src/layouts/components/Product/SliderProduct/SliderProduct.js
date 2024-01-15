import { SwiperSlide } from 'swiper/react';

import classNames from 'classnames/bind';
import style from './SliderProduct.module.scss';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import img2 from '~/assets/imgs/women-4.jpg';
import { BsClipboard, BsHeart } from 'react-icons/bs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShuffle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(style);

function SliderProduct({ data }) {
    return (
        <div className={cx('product-item')}>
            <div className={cx('product-img')}>
                <img src={img2} alt="women" />
                <BsHeart className={cx('product-favorite')} />
                {data.sale && data.sale !== '0' && data.sale !== 'null' && (
                    <div className={cx('product-sale')}>SALE</div>
                )}
                <div className={cx('product-option')}>
                    <div className={cx('product-option-inner')}>
                        <div className={cx('option-icon-wrapper')}>
                            <BsClipboard className={cx('option-icon')} />
                        </div>
                        <div className={cx('option-content')}>
                            <span>+ Quick View</span>
                        </div>
                        <div className={cx('option-shuffle-wrapper')}>
                            <FontAwesomeIcon className={cx('option-shuffle')} icon={faShuffle} />
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('product-text')}>
                <span className={cx('product-type')}>{data.type}</span>
                <span className={cx('product-name')}>{data.name}</span>
                <div className={cx('product-price')}>
                    <span className={cx('price-sale')}>
                        {data.sale === "0" ? data.price : (data.price * data.sale) / 100}
                    </span>
                    <span>{data.price}</span>
                </div>
            </div>
        </div>
    );
}

export default SliderProduct;
