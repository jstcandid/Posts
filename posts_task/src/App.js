import './App.css';
import { PostList } from './components/PostList/PostList';

function App() {
  return (
    <div className='App row row-cols-2 row-cols-lg-5 g-2 g-lg-3'>
      <PostList />
    </div>
  );
}

export default App;
