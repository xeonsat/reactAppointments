import { BiHomeSmile } from "react-icons/bi"
import Search from "./components/Search"
import AddAppointment from "./components/AddAppointment"

function App() {
  return (
    <div className="App container mx-auto mt-3 font-thin">
      <h1 className="text-5xl mb-3">
        <BiHomeSmile className="inline-block text-blue-400 align-top"/>Appointments App</h1>
    <AddAppointment />
    <Search />
    </div>
  );
}

export default App;
