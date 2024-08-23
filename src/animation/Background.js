import Particles from "react-particles";
import PartclesConfig from "./particles";

const Background = (props) => {
    return (
      <>
      <Particles
            id="tsparticles"
            options={PartclesConfig()}
        />
        {props.children}
      </>       
    );
};


export default Background;