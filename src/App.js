import { BiHomeSmile } from "react-icons/bi"
import Search from "./components/Search"

function App() {
  return (
    <div className="App container mx-auto mt-3 font-thin">
      <h1 className="text-5xl"><BiHomeSmile className="inline-block text-blue-400 align-top"/>Appointments App</h1>
    <Search />
    </div>
  );
}

export default App;
