import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import styles from './BlogDetail.module.scss';
import classNames from 'classnames/bind';
import Crumb from '~/components/Crumb/Crumb';
import blog from '~/pages/API/Blog.json';

import imgBanner from '~/assets/imgs/blog-detail.jpg';
import img2 from '~/assets/imgs/blog-detail-2.jpg';

import { BsFillTagsFill } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { BsTwitter, BsInstagram, BsYoutube } from 'react-icons/bs';
import { FaGooglePlusG } from 'react-icons/fa';
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from 'react-icons/io';

const cx = classNames.bind(styles);

function BlogDetail() {
    const param = useParams();
    const [blogDetail, setBlogDetail] = useState([]);

    useEffect(() => {
        setBlogDetail(blog.find((d) => d.id === parseInt(param.id)));
    }, []);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const [message, setMessage] = useState('');

    return (
        <div className={cx('wrapper')}>
            <Crumb className={cx('crumb-wrapper')} title="Blog Detail" />
            {blogDetail && (
                <div className={cx('container')} key={blogDetail.id}>
                    <div className={cx('blog-detail-title')}>
                        <h2>{blogDetail.title}</h2>
                        <p>
                            travel <span>- {blogDetail.date}</span>
                        </p>
                    </div>
                    <div className={cx('blog-large-pic')}>
                        <img src={`${window.location.origin}/${blogDetail.img}`} alt="banner" />
                    </div>
                    <div className={cx('blog-detail-desc')}>
                        <p>{blogDetail.content_main}</p>
                    </div>
                    <div className={cx('blog-quote')}>
                        <p>
                            “{blogDetail.quote}” <span>- {blogDetail.author}</span>
                        </p>
                    </div>
                    <div className={cx('blog-detail-more')}>
                        {blogDetail.imgs &&
                            blogDetail.imgs.map((d, i) => (
                                <div className={cx('img-detail-wrapper')} key={i}>
                                    <img src={`${window.location.origin}/${d.img_extra}`} alt="blog-detail" />
                                </div>
                            ))}
                    </div>
                    <div className={cx('blog-detail-desc')}>
                        <p>{blogDetail.content_extra}</p>
                    </div>
                    <div className={cx('tag-share')}>
                        <div className={cx('details-tag')}>
                            <span className={cx('tag')}>
                                <BsFillTagsFill className="tag-icon" />
                            </span>
                            {blogDetail.tags &&
                                blogDetail.tags.map((d, i) => (
                                    <span className={cx('tag')} key={i}>
                                        {d.tag}
                                    </span>
                                ))}
                        </div>
                        <div className={cx('blog-share')}>
                            <span>Share:</span>
                            <div className={cx('social-links')}>
                                <Link className={cx('link-share')} to="/">
                                    <FaFacebookF />
                                </Link>
                                <Link className={cx('link-share')} to="/">
                                    <BsTwitter />
                                </Link>
                                <Link className={cx('link-share')} to="/">
                                    <FaGooglePlusG />
                                </Link>
                                <Link className={cx('link-share')} to="/">
                                    <BsInstagram />
                                </Link>
                                <Link className={cx('link-share')} to="/">
                                    <BsYoutube />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={cx('blog-post')}>
                        <Link to="/" className={cx('prev-blog')}>
                            <div className={cx('pb-pic')}>
                                <IoMdArrowRoundBack className={cx('arrow-right-icon')} />
                                <img className={cx('img-blog-other')} src={imgBanner} alt="prev-blog" />
                            </div>
                            <div className={cx('pb-text')}>
                                <span>Previous Post:</span>
                                <h5>The Personality Trait That Makes People Happier</h5>
                            </div>
                        </Link>
                        <Link to="/" className={cx('next-blog')}>
                            <div className={cx('nb-pic')}>
                                <IoMdArrowRoundForward className={cx('arrow-left-icon')} />
                                <img className={cx('img-blog-other')} src={img2} alt="next-blog" />
                            </div>
                            <div className={cx('nb-text')}>
                                <span>Next Post:</span>
                                <h5>The Personality Trait That Makes People Happier</h5>
                            </div>
                        </Link>
                    </div>
                    <div className={cx('posted-by')}>
                        <div className={cx('pb-pic')}>
                            <img className={cx('img-blog-other')} src={img2} alt="next-blog" />
                        </div>
                        <div className={cx('pb-text')}>
                            <a href="#">
                                <h5>Shane Lynch</h5>
                            </a>
                            <p>
                                Aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum bore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                amodo
                            </p>
                        </div>
                    </div>
                    <div className={cx('right-content-wrapper')}>
                        <div className={cx('contact-detail')}>
                            <div className={cx('contact-detail-title')}>Leave A Comment</div>
                        </div>
                        <form action="#" className={cx('form-wrapper')} onSubmit={handleSubmit()}>
                            <div className={cx('form-group')}>
                                <input
                                    className={cx('name')}
                                    type="text"
                                    placeholder="Your name"
                                    {...register('FullName', {
                                        required: true,
                                    })}
                                />
                                {errors.FullName && errors.FullName.type === 'required' && (
                                    <span className={cx('error-message')}>FullName cannot be empty !</span>
                                )}
                            </div>
                            <div className={cx('form-group')}>
                                <input
                                    className={cx('email')}
                                    type="email"
                                    placeholder="Your email"
                                    {...register('Email', {
                                        required: true,
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        },
                                    })}
                                />
                                {errors.Email && errors.Email.type === 'required' && (
                                    <span className={cx('error-message')}>Email cannot be empty !</span>
                                )}
                                {errors.Email && errors.Email.type === 'pattern' && (
                                    <span className={cx('error-message')}>Invalid email !</span>
                                )}
                            </div>
                            <textarea
                                className={cx('message')}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Your message"
                                {...register('Note', {
                                    required: true,
                                })}
                            />
                            {errors.Note && errors.Note.type === 'require' && (
                                <span className={cx('error-message')}>Message cannot be empty !</span>
                            )}
                            <button type="submit" className={cx('send-btn')}>
                                Send message
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default BlogDetail;
