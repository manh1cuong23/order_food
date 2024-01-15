import classNames from 'classnames/bind';
import style from './Filter.module.scss';
import { IoSearch } from 'react-icons/io5';
import { VscDebugRestart } from 'react-icons/vsc';
import img1 from '~/assets/imgs/recent-1.jpg';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import blog from '~/pages/API/Blog.json';

const cx = classNames.bind(style);

const listCategory = ['Men', 'Women', 'Kid'];
const listPrice = ['0 - 200.000', '200.001 - 500.000', '500.001 - 1.000.000', '> 1.000.000'];
const listColor = ['Black', 'White', 'Blue', 'Red', 'Beige'];
const listSize = ['S', 'M', 'L', 'XL', 'XXL'];
const listTag = ['Clothing', 'HandBag', 'Skirt', 'Shoes', 'Accessories'];

function Filter({ isSearch, isRecent, isCategory, isPrice, isColor, isSize, isTags, setCategories }) {
    const [activeCategory, setActiveCategory] = useState();
    const [category, setCategory] = useState('');
    const [activePrice, setActivePrice] = useState();
    const [price, setPrice] = useState('');
    const [activeColor, setActiveColor] = useState();
    const [color, setColor] = useState('');
    const [activeSize, setActiveSize] = useState();
    const [size, setSize] = useState('');
    const [activeTag, setActiveTag] = useState();
    const [tag, setTag] = useState('');

    const handleActiveCategory = (index) => {
        setActiveCategory(index);
    };

    const handleActivePrice = (index) => {
        setActivePrice(index);
    };

    const handleActiveColor = (index) => {
        setActiveColor(index);
    };

    const handleActiveSize = (index) => {
        setActiveSize(index);
    };

    const handleActiveTag = (index) => {
        setActiveTag(index);
    };

    return (
        <div className={cx('wrapper')}>
            {isSearch ? (
                <div className={cx('filter')}>
                    <h2 className={cx('filter-type')}>Search</h2>
                    <div className={cx('search')}>
                        <input
                            type="text"
                            className={cx('inputSearch')}
                            placeholder="Search ..."
                            // onChange={(e) => setinput(e.target.value)}
                        />
                        <IoSearch className={cx('icon-search')} />
                    </div>
                </div>
            ) : null}
            {isRecent ? (
                <div className={cx('filter')}>
                    <h2 className={cx('filter-type')}>Recent Post</h2>
                    <Link to={`/blogDetail/${blog[0].id}`} className={cx('recent')}>
                        <div className={cx('img')}>
                            <img src={`${window.location.origin}/${blog[0].img}`} alt="" />
                        </div>
                        <div className={cx('highlights')}>
                            <p className={cx('title')}>{blog[0].title}</p>
                            <div className={cx('time')}>
                                <span>FASHION</span>
                                <p>&nbsp;- {blog[0].date}</p>
                            </div>
                        </div>
                    </Link>
                </div>
            ) : null}
            {isCategory ? (
                <div className={cx('filter')}>
                    <div className={cx('filter-header')}>
                        <h2 className={cx('filter-type')}>Categories</h2>
                        <VscDebugRestart
                            onClick={() => {
                                setActiveCategory(-1);
                                setCategories('');
                            }}
                        />
                    </div>
                    <div className={cx('classify')}>
                        {listCategory.map((d, i) => (
                            <span
                                className={cx('btn', activeCategory === i ? 'active' : null)}
                                onClick={() => {
                                    handleActiveCategory(i);
                                    setCategory(d);
                                }}
                                key={i}
                            >
                                {d}{' '}
                            </span>
                        ))}
                    </div>
                </div>
            ) : null}
            {isPrice ? (
                <div className={cx('filter')}>
                    <div className={cx('filter-header')}>
                        <h2 className={cx('filter-type')}>Price</h2>
                        <VscDebugRestart
                            onClick={() => {
                                setActivePrice(-1);
                            }}
                        />
                    </div>
                    <div className={cx('classify')}>
                        {listPrice.map((d, i) => (
                            <span
                                className={cx('btn', activePrice === i ? 'active' : null)}
                                onClick={() => {
                                    handleActivePrice(i);
                                    setPrice(d);
                                }}
                                key={i}
                            >
                                {d}{' '}
                            </span>
                        ))}
                    </div>
                </div>
            ) : null}
            {isColor ? (
                <div className={cx('filter')}>
                    <div className={cx('filter-header')}>
                        <h2>Color</h2>
                        <VscDebugRestart
                            onClick={() => {
                                setActiveColor(-1);
                            }}
                        />
                    </div>
                    <div className={cx('classify')}>
                        {listColor.map((d, i) => (
                            <span
                                className={cx('btn', activeColor === i ? 'active' : null)}
                                onClick={() => {
                                    handleActiveColor(i);
                                    setColor(d);
                                }}
                                key={i}
                            >
                                {d}{' '}
                            </span>
                        ))}
                    </div>
                </div>
            ) : null}
            {isSize ? (
                <div className={cx('filter')}>
                    <div className={cx('filter-header')}>
                        <h2 className={cx('filter-type')}>Size</h2>
                        <VscDebugRestart
                            onClick={() => {
                                setActiveSize(-1);
                            }}
                        />
                    </div>
                    <div className={cx('classify-size')}>
                        {listSize.map((d, i) => (
                            <div
                                className={cx('st-item', activeSize === i ? 'active' : null)}
                                onClick={() => {
                                    handleActiveSize(i);
                                    setSize(d);
                                }}
                                key={i}
                            >
                                {d}
                            </div>
                        ))}
                    </div>
                </div>
            ) : null}
            {isTags ? (
                <div className={cx('filter')}>
                    <div className={cx('filter-header')}>
                        <h2 className={cx('filter-type')}>Tags</h2>
                        <VscDebugRestart
                            onClick={() => {
                                setActiveTag(-1);
                            }}
                        />
                    </div>
                    <div className={cx('classify-tags')}>
                        {listTag.map((d, i) => (
                            <div
                                className={cx('st-item', activeTag === i ? 'active' : null)}
                                onClick={() => {
                                    handleActiveTag(i);
                                    setTag(d);
                                }}
                                key={i}
                            >
                                {d}
                            </div>
                        ))}
                    </div>
                </div>
            ) : null}
        </div>
    );
}

export default Filter;
