import Door from "./Door"
import Wheel from "./Wheel"
import Light from "./Light"

const Car = (props) => {

  return ( (
    <>
    <div>{props.name}
      <Door name='Driver Side' />
      <Door name='Passenger Side' />
      <Door name='Backseat Driver Side' />
      <Door name='Backseat Passenger Side' />
    </div>
    <div>
      {props.name}
      <Wheel name='Wheel' />
    </div>
    <div>
      {props.name}
      <Light name='Head Lights' />
      <Light name='Tail Lights' />
      <Light name='Fog Lights' />
    </div>

    </>
  ) )
}

export default Car