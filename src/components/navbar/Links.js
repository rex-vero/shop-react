import NavLinks from "./NavLinks";

const links = [
    {
        id: 1,
        text: 'Home',
        href: '/'
    },
    {
        id: 2,
        text: 'Link',
        href: '/admin'

    },
    {
        id: 3,
        text: 'Login',
        href: '/auth/login'

    },
    {
        id: 4,
        text: 'cart',
        href: '/cart'

    }
]
const Links = () => {
    return (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {links.map(item => <NavLinks ali={item} key={item.id} />)}
        </ul>
    );
}
export default Links;