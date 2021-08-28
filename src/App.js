import { Header } from './components/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import blogData from './data/blogs.json';
import { Blog } from './components/blog';

function App() {
  return (
    <div className="App">
      <Header />
      {
        blogData.map((blog) =>
          <Blog className="Blog" key={blog.id} blog={blog} />
        )
      }
    </div>
  );
}

export default App;
