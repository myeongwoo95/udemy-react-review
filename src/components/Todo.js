function Todo(props) {
  function deleteHandler() {}

  return (
    <div className="card">
      <h2>{props.title}</h2>
      <div className="actions">
        <span>A Span</span>
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Todo;
