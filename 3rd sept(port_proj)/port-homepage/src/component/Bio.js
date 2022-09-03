import dp from "../assets/profile.jpg";
const Bio = () => {
  const styling = {
    height: "25%",
    margin: "4px",
    width: "25%",
  };
  return (
    <div>
      <img style={styling} src={dp} />
    </div>
  );
};
export default Bio;
