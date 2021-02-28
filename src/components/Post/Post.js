import classes from './Post.module.css';
// import { withRouter } from 'react-router-dom';

const Post = (props) => {
  // console.log(props);
  return (
    <article 
      className={classes.Post}
      onClick={props.clicked}>
      <h1>{props.title}</h1>
      <div className={classes.Info}>
        <div className={classes.Author}>{props.author}</div>
      </div>
    </article>
  );
};

// export default withRouter(Post);
export default Post;