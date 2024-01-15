import classNames from 'classnames/bind';
import style from './ProductItem.module.scss';

import img1 from '~/assets/imgs/women-4.jpg';
import { Link } from 'react-router-dom';

const cx = classNames.bind(style);

function ProductItem({ data = [] }) {
    return (
        <Link to={`/productDetail/${data.id}`} className={cx('result')}>
            <img className={cx('product-img')} src={img1} alt="" />
            <div className={cx('search-result')} key={data.id}>
                <div className={cx('product')}>
                    <span className={cx('product-title')}>{data.name}</span>
                    <p>{data.price}</p>
                </div>
            </div>
        </Link>
    );
}

export default ProductItem;
