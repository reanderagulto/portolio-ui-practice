import SvgFacebook from '@assets/svg/icons/icon-facebook.svg';
import SvgTwitter from '@assets/svg/icons/icon-twitter.svg';
import SvgInstagram from '@assets/svg/icons/icon-instagram.svg';
import SvgLinkedin from '@assets/svg/icons/icon-linkedin.svg';

export const menu = [
    {
        slug: 'blog',
        name: 'Blog', 
        uri: '/blog',
    }, 
    {
        slug: 'works',
        name: 'Works',
        uri: '/works',
    }, 
    {
        slug: 'contact',
        name: 'Contact',  
        uri: '/contact'
    }
];

export const socialLinks = [
    {
        name: 'facebook', 
        icon: SvgFacebook, 
        uri: 'https://facebook.com'
    }, 
    {
        name: 'twitter', 
        icon: SvgTwitter, 
        uri: 'https://twitter.com'
    }, 
    {
        name: 'instagram', 
        icon: SvgInstagram, 
        uri: 'https://instagram.com'
    }, 
    {
        name: 'linkedin', 
        icon: SvgLinkedin, 
        uri: 'https://linkedin.com'
    }, 
];