import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import Forgot from '../components/Forgot';
import Login from '../components/Login';
import Register from '../components/Register';
import Otp from '../components/Otp';


const appSwitch = createSwitchNavigator(
    {
        Forgot: Forgot,
        Login: Login,
        Register: Register,
        Otp: Otp,

    },
    {
        initialRouteName: 'Login',
        headerMode: "none",
        navigationOptions: {
            headerVisible: true,


        }
    }
);

export default createAppContainer(appSwitch);
