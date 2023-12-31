import './App.css';
import { RouterProvider } from 'react-router';
import router from './screens/router';
import { Provider } from 'react-redux';
import store from './redux';

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
