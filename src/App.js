import "./App.css";
import { GetData } from "./Profile/GetData";
import Me from "./Me.jpg";

let fullName = "Safouene Najjar";
let bio =
  "born May 2,1990, Sousse, Tunisia, reliant and ambitious Mecatronics Engineer sepcialised in Mobile Systems and Robotics";
let profession = "Web Developer";
const handleName = (data) => {
  alert(`Your Fullname is ${data}`);
};
function App() {
  return (
    <div className="App">
      <GetData
        Name={fullName}
        Bio={bio}
        Profession={profession}
        handleName={handleName}
      >
        <img
          src={Me}
          alt="./Me.jpg"
          style={{ width: 320, height: 480, borderRadius: 10 }}
        ></img>
      </GetData>
    </div>
  );
}

export default App;
