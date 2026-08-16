function Event01() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <>
      <h1>Sự kiện trong React - 01</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter text..." />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Event01;
