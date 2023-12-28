import RestaurantSharpIcon from "@mui/icons-material/RestaurantSharp";

const IntroPage = () => {
  return (
    <main className="intro">
      <div className="logo">
        <div className="logo-container">
          <div className="logo-box">
            <RestaurantSharpIcon style={{ color: "#ffff", fontSize: "72px" }} />
          </div>
        </div>
        <h1 className="intro-title">Tasty App</h1>
      </div>
    </main>
  );
};

export default IntroPage;
