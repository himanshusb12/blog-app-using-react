import { Header } from './components/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useEffect, useState } from 'react';
import { Home } from './components/home';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { AddBlog } from './components/addBlog';

function App() {
  const [blogData, setBlogData] = useState([]);

  useEffect(async () => {
    await fetch('http://localhost:3001/api/blogs', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
      .then(data => {
        const blogs = getAllBlogs() ? getAllBlogs() : data;
        setBlogData(blogs);
        setAllBlogs(blogs);
      })
      .catch(error => window.alert(`Error occured while reading blog json - ${error}`));
  }, []);

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home blogData={blogData} />
          </Route>
          <Redirect from="/home" to="/" />
          <Route exact path='/add'>
            <AddBlog getAllBlogs={getAllBlogs} setAllBlogs={setAllBlogs}/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

function getAllBlogs() {
  return JSON.parse(localStorage.getItem('blogs'));
}

function setAllBlogs(blogs) {
  localStorage.setItem('blogs', JSON.stringify(blogs));
}

export default App;
