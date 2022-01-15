require('./components/App');
import UserState from './context/user/userState';
import ProblemsState from './context/problems/problemsState';
import UsersState from './context/users/usersState';

import ReactDOM from 'react-dom';
import App from './components/App';


if (document.getElementById('app')) {
    ReactDOM.render(
    
            <UserState>
                <ProblemsState>
                    <UsersState>
                        <App />
                    </UsersState>
                </ProblemsState>
            </UserState>
        , document.getElementById('app'));
}