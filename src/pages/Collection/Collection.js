import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';
import style from './Collection.module.scss';
import Crumb from '~/components/Crumb/Crumb';
import img from '~/assets/imgs/rectangle.png';

const cx = classNames.bind(style);

function Collection() {
    return (
        <div className={cx('wrapper')}>
            <Crumb title="Collection" />
            <section className={cx('collection-header')}>
                <h2 className={cx('collection-header__title')}>Collection</h2>
                <p className={cx('collection-header__desc')}>
                    Welcome to the Fashi Collection! Check out latest updates and actives here.
                </p>
            </section>
            <section className={cx('collection-intro')}>
                <h3 className={cx('collection-intro__title')}>What to do</h3>
                <div className={cx('collection-intro__list')}>
                    <div className={cx('collection-intro__list-content')}>
                        <img src={img} alt="" />
                        <p>Join our Fashi</p>
                    </div>
                    <div className={cx('collection-intro__list-content')}>
                        <img src={img} alt="" />
                        <p>Get your post to be fav' by the Feelunique</p>
                    </div>
                    <div className={cx('collection-intro__list-content')}>
                        <img src={img} alt="" />
                        <p>Want Free beauty products? Sign up here</p>
                    </div>
                    <div className={cx('collection-intro__list-content')}>
                        <img src={img} alt="" />
                        <p>WIN a free beauty box</p>
                    </div>
                </div>
            </section>
            <section className={cx('collection-list')}>
                <div className={cx('collection-list__header')}>
                    <p>Feed</p>
                    <p>Discover</p>
                </div>

                <div className={cx('collection-list')}>
                    <Link to="/" className={cx('collection-list__content')}>
                        <div className={cx('img')}>
                            <img src={img} alt="blog" />
                        </div>
                        <div className={cx('name')}>
                            <p>Soy pH-Balanced Hydrating Face Wash Jumbo</p>
                        </div>
                        <div className={cx('desc')}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores consequuntur ratione optio
                            iste repudiandae ipsa nam, est voluptatum nisi voluptatibus repellendus suscipit. Fuga
                            suscipit esse pariatur aperiam ducimus enim soluta corrupti assumenda, voluptatibus quis, a,
                            possimus vero quod voluptate. Optio facere eum officia error iste sequi, eaque
                            necessitatibus distinctio nulla.
                        </div>
                        <div className={cx('status')}>
                            <p>2300 likes</p>
                            <p>23 comments</p>
                            <p>2 shares</p>
                        </div>
                    </Link>

                    <Link to="/" className={cx('collection-list__content')}>
                        <div className={cx('img')}>
                            <img src={img} alt="blog" />
                        </div>
                        <div className={cx('name')}>
                            <p>Soy pH-Balanced Hydrating Face Wash Jumbo</p>
                        </div>
                        <div className={cx('desc')}>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores consequuntur ratione
                                optio iste repudiandae ipsa nam, est voluptatum nisi voluptatibus repellendus suscipit.
                                Fuga suscipit esse pariatur aperiam ducimus enim soluta corrupti assumenda, voluptatibus
                                quis, a, possimus vero quod voluptate. Optio facere eum officia error iste sequi, eaque
                                necessitatibus distinctio nulla.
                            </p>
                        </div>
                        <div className={cx('status')}>
                            <p>2300 likes</p>
                            <p>23 comments</p>
                            <p>2 shares</p>
                        </div>
                    </Link>

                    <Link to="/" className={cx('collection-list__content')}>
                        <div className={cx('img')}>
                            <img src={img} alt="blog" />
                        </div>
                        <div className={cx('name')}>
                            <p>Soy pH-Balanced Hydrating Face Wash Jumbo</p>
                        </div>
                        <div className={cx('desc')}>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores consequuntur ratione
                                optio iste repudiandae ipsa nam, est voluptatum nisi voluptatibus repellendus suscipit.
                                Fuga suscipit esse pariatur aperiam ducimus enim soluta corrupti assumenda, voluptatibus
                                quis, a, possimus vero quod voluptate. Optio facere eum officia error iste sequi, eaque
                                necessitatibus distinctio nulla.
                            </p>
                        </div>
                        <div className={cx('status')}>
                            <p>2300 likes</p>
                            <p>23 comments</p>
                            <p>2 shares</p>
                        </div>
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default Collection;
