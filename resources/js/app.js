require('./components/App');
import UserState from './context/user/userState';
import ReactDOM from 'react-dom';
import App from './components/App';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

const queryClient = new QueryClient()

if (document.getElementById('app')) {
    ReactDOM.render(
        <QueryClientProvider client={queryClient}>
            <UserState>
                <App />
            </UserState>
        </QueryClientProvider>
        , document.getElementById('app'));
}