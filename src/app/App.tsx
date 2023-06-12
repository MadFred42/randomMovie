import ErrorBoundary from 'widgets/ErrorBoundary';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { PUBLIC_ROUTES } from './routes';
import RootStore from './stores';
import { createContext } from 'react';

const store = RootStore.create({});
export const StoreContext = createContext(store);
const router = createBrowserRouter(PUBLIC_ROUTES);

function App() {
  return (
    <ErrorBoundary>
      <StoreContext.Provider value={store}>
        <RouterProvider router={router} />
      </StoreContext.Provider>
    </ErrorBoundary>
  );
}

export default App;
