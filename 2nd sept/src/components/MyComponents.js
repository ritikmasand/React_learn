function MyComponents(props) {
  console.log(props);
  return (
    <>
      <button>{props.caption}</button>
      {/* <h2>Hello</h2> */}
    </>
  );
}
export default MyComponents;
