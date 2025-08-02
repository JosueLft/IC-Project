import React from 'react';
import routes from './routes';
import { RoutesProvider } from './routes/RouterProvider';

const App: React.FC = () => {
  return (
    <RoutesProvider routes={routes} />
  );
}

export default App;