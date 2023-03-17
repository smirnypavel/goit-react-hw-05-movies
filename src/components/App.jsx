import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SearchMovie from './pages/searchMovie';
import NotFound from './pages/notFaund';
import SharedLayout from './pages/SharedLayout';
import MovieDetails from './pages/MovieDetails';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/searchMovie" element={<SearchMovie />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};
