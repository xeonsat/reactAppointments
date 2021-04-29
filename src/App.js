import { useState, useEffect, useCallback } from 'react'
import { BiHomeSmile } from "react-icons/bi"
import Search from "./components/Search"
import AddAppointment from "./components/AddAppointment"
import AppointmentInfo from "./components/AddAppointment"

function App() {

  let [appointmentList, setAppointmentList] = useState([]);
  let [query, setQuery] = useState("");

  const filterAppointments = appointmentList.filter(
    item => {
      return (
        item.petName.toLowerCase().includes(query.toLowerCase()) ||
        item.ownerName.toLowerCase().includes(query.toLowerCase()) ||
        item.aptNotes.toLowerCase().includes(query.toLowerCase())
      )
    }
  )

  const fetchData = useCallback(() => {
    fetch('./data.json')
      .then(response => response.json())
      .then(data => {
        setAppointmentList(data)
      })
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <div className="App container mx-auto mt-3 font-thin">
      <h1 className="text-5xl mb-3">
        <BiHomeSmile className="inline-block text-blue-400 align-top"/>Appointments App</h1>
    <AddAppointment />
    <Search query={query}
      onQueryChange={myQuery => setQuery(myQuery)} />

    <ul className="divide-y divide-gray-200">
      {filterAppointments
        .map(appointment => (
            <AppointmentInfo key={appointment.id}
            appointment={appointment}
            onDeleteAppointment={
              appointmentId =>
                setAppointmentList.filter(appointment => appointment.id != appointmentId)
            }
            />
        ))
      }
    </ul>

    </div>
  );
}

export default App;
