function NewPost (props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>by {props.author}</h2>
      <p>{props.body}</p>
      <p>{props.comment}</p>
    </div>
  )
}
export default NewPost;
