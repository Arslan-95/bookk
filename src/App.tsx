import { Suspense } from 'react';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { appRouter } from './app/router';
import { CssBaseline, CssVarsProvider } from '@mui/joy';

function App() {
  return (
    <CssVarsProvider defaultMode="dark">
      <CssBaseline />

      <Suspense fallback="Loading...">
        <RouterProvider router={appRouter} />
      </Suspense>
    </CssVarsProvider>
  );
}

export default App;
