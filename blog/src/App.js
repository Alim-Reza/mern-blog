import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticleListPage from './pages/ArticleListPage';
import ArticlePage from './pages/ArticlePage';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Navbar from './Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route path="/" component={HomePage} exact />
        <Route path="/about" component={AboutPage} />
        <Route path="/article-list" component={ArticleListPage} />
        <Route path="/article" component={ArticlePage} />
      </div>
    </Router>
  );
}

export default App;
