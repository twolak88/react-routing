import { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import classes from './Blog.module.css';
import NewPost from './NewPost/NewPost';
import Posts from './Posts/Posts';

class Blog extends Component {
  state = {
    auth: false
  }

  render() {
    return (
      <div className={classes.Blog}>
        <header>
          <nav>
            <ul>
              <li><NavLink 
                activeClassName={classes.active} 
                activeStyle={{
                  textDecoration: 'underline'
                }} 
                to="/posts/" 
                exact>Posts</NavLink></li>
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
        <Switch>
          {
            this.state.auth ? 
            <Route 
              path="/new-post" 
              component={NewPost}/> : null
          }
          <Route 
            path="/posts" 
            component={Posts}/>
          <Redirect 
            from="/" 
            to="/posts" />
          {/* <Route 
            path="/" 
            component={Posts}/> */}
        </Switch>
      </div>
    );
  }
}

export default Blog;