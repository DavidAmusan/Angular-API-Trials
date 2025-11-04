import './App.css';
import Typewriter from 'typewriter-effect';

function App() {
  return (
    <div className="App">
      <div className="heading">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Tamilore you are Gods gift. Follow your soul, you have all the answers and tools you need, dont look around look inside. You already know.")
              .start();
          }}
        />
      </div>
    </div>
  );
}

export default App;
