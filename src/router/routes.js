import SignUpComponent from '../components/SignUpComponent';
import LoginContainer from '../containers/LoginContainer';
import ContentContainer from '../containers/ContentContainer'
const routes = [
    {
        component: SignUpComponent,
        path: '/signUp'
    },
    {
        component: LoginContainer,
        path: '/signIn'
    },
    {
        component: ContentContainer,
        path: '/'
    }
];

export default routes