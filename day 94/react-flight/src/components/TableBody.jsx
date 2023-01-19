import { useState, useEffect } from "react";
import TableRow from './TableRow'

const TableBody = () => {
  const [flights, setFlights] = useState(null);
  const getFlight = () => {
    fetch("http://localhost:8000/flights")
      .then((response) => response.json())
      .then(({data:flights}) => setFlights(Object.values(flights)))
      .catch((error) => console.log(error));
  };
  useEffect(() => getFlight(), []);
  return(
    <tbody>
        {flights?.map((flight,_index)=>(
            <TableRow key={_index} flight={flight} />
        ))}
    </tbody>
  )
};

export default TableBody;
