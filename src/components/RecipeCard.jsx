import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";

const RecipeCard = ({ data }) => {
  return (
    <article className="card-container">
      <div className="card-image">
        <img src={data.thumbnail_url} alt="img" className="card_img" />
      </div>
      <div className="card-data">
        <h4 className="title">{data.name}</h4>
        <p className="description">{data.description}</p>
        <div className="details">
          <div className="servings">
            <GroupsOutlinedIcon />
            <p>{data.num_servings}</p>
          </div>
          <div className="cooking-time">
            <TimerOutlinedIcon />
            <p>{data.cook_time_minutes}'</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default RecipeCard;
