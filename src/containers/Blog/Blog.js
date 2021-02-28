import { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import classes from './Blog.module.css';
import NewPost from './NewPost/NewPost';
import Posts from './Posts/Posts';

class Blog extends Component {

  render() {

    return (
      <div className={classes.Blog}>
        <header>
          <nav>
            <ul>
              <li><NavLink 
                activeClassName={classes.active} 
                activeStyle={{
                  color: 'red',
                  textDecoration: 'underline'
                }} 
                to="/" 
                exact>Home</NavLink></li>
              <li><NavLink 
                activeClassName={classes.active}
                to={{
                  pathname: '/new-post'/*,
                  hash: '#submit',
                  search: '?quick-submit=true'*/ 
                }}
              >New Post</NavLink></li>
            </ul>
          </nav>
        </header>
        {/* <Route path="/" exact render={() => <h1>Home</h1>} />
        <Route path="/" render={() => <h1>Home2</h1>} /> */}
        <Route 
          path="/" 
          exact 
          component={Posts} />
        <Route 
          path="/new-post" 
          component={NewPost} />
      </div>
    );
  }
}

export default Blog;