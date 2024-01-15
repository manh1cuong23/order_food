import React from 'react';
import classNames from 'classnames/bind';
import style from './Blog.module.scss';
import Crumb from '~/components/Crumb/Crumb';
import Filter from '~/components/Filter/Filter';
import BlogCard from '~/layouts/components/BlogCard/BlogCard';
import blog from '~/pages/API/Blog.json';

const cx = classNames.bind(style);

function Blog() {
    return (
        <div className={cx('wrapper')}>
            <Crumb title="Blog" />
            <div className={cx('contents')}>
                <div className={cx('filter')}>
                    <Filter isSearch isRecent isTags />
                </div>
                <div className={cx('content')}>
                    {blog.map((d, i) => (
                        <BlogCard data={d} key={i} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Blog;
