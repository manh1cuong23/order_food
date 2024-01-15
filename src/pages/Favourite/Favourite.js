import Crumb from '~/components/Crumb/Crumb';
import ProductFavourite from '../ProductFavourite/Product';
import Button from '~/components/Button/Button';
import classNames from 'classnames/bind';
import style from './Favourite.module.scss';

const cx = classNames.bind(style);

function Favourite() {
    return (
        <div className={cx('wrapper')}>
            <Crumb title="Favourite" />
            <section className={cx('favourite-heading')}>
                <div className={cx('heading-left')}>
                    <h2 className={cx('title')}>Wish List</h2>
                    <p className={cx('desc')}>3 items in your wish list</p>
                </div>
                <div className={cx('heading-right')}>
                    <h3 className={cx('right-title')}>$300</h3>
                    <p className={cx('desc')}>Estimated total</p>
                    <Button className={cx('button')} title="ADD ALL TO CART"></Button>
                </div>
            </section>
            <section className={cx('favourite-product')}>
                <ProductFavourite />
                <ProductFavourite />
                <ProductFavourite />
            </section>
        </div>
    );
}

export default Favourite;
