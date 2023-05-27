import ErrorBoundary from '../features/ErrorBoundary';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { PUBLIC_ROUTES } from './routes';

const router = createBrowserRouter(PUBLIC_ROUTES);
function App() {
  return (
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
}

export default App;
