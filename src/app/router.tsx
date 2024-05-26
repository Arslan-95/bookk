import { Suspense, lazy } from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

const ReadPage = lazy(() => import('@/pages/read'));

export const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route
        index
        element={
          <Suspense fallback="Loading...">
            <ReadPage />
          </Suspense>
        }
      />
    </Route>
  )
);
