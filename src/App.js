// import logo from './logo.svg';
import './App.css';
// import NewPost from './NewPost';

function App(props) {
  // const comments = ['Yes', 'We stan', 'Hell no'];
  // const displayComments = comments.map((eachComment, idx) => {
  //   return <NewPost comment={eachComment} key={idx} />
  // })
  return (
    <div className="App">
      <h1>{props.post.title}</h1>
      <p>by {props.post.author}</p>
      <p>{props.post.body}</p>
      <h2>Comments:</h2>
      <p>{props.post.comments[0]}</p>
    </div>
  );
}

export default App;
