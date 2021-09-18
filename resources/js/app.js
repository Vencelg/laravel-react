require('./components/App');
import UserState from './context/user/userState';
import ReactDOM from 'react-dom';
import App from './components/App';

if (document.getElementById('app')) {
    ReactDOM.render(<UserState><App /></UserState>, document.getElementById('app'));
}