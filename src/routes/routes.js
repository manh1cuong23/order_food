import config from '~/config';

import Home from '~/pages/Home/Home';
import Shop from '~/pages/Shop/Shop';
import Blog from '~/pages/Blog/Blog';
import BlogDetail from '~/pages/BlogDetail/BlogDetail';
import Login from '~/pages/Login/Login';
import Register from '~/pages/Register/Register';
import Cart from '~/pages/Cart/Cart';
import ProductDetail from '~/pages/ProductDetail/ProductDetail';
import CheckOut from '~/pages/CheckOut/CheckOut';
import Contact from '~/pages/Contact/Contact';
import FAQ from '~/pages/FAQ/FAQ';
import Profile from '~/pages/Profile/Profile';
import Collection from '~/pages/Collection/Collection';
import Favourite from '~/pages/Favourite/Favourite';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.shop, component: Shop },
    { path: config.routes.Shop, component: Shop },
    { path: config.routes.blog, component: Blog },
    { path: config.routes.blogDetail, component: BlogDetail },
    { path: config.routes.contact, component: Contact },
    { path: config.routes.login, component: Login },
    { path: config.routes.register, component: Register },
    { path: config.routes.cart, component: Cart },
    { path: config.routes.checkout, component: CheckOut },
    { path: config.routes.checkOut, component: CheckOut },
    { path: config.routes.faq, component: FAQ },
    { path: config.routes.productDetail, component: ProductDetail },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.collection, component: Collection },
    { path: config.routes.favourite, component: Favourite },
];

const privateRoutes = [];

export { privateRoutes, publicRoutes };
