import Rim from "./Rim";

const Door = (props) => {
  return ( (
    <div>
      {props.name}
      <Rim name="Shiny" />
    </div>
  ) )
}

export default Door;