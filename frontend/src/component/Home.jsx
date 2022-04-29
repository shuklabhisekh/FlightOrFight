import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Home.css";
import { useEffect, useState } from "react";
import { searchFlight } from "../Redux/Flight/flightAction";
import { useDispatch, useSelector } from "react-redux";
export const Home = () => {
  //   const [state, setState] = useState({
  //     from: "",
  //     to: "",
  //   });
  const { flight } = useSelector((store) => store.flight);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  console.log(flight, "flight");
  const dispatch = useDispatch();
  useEffect(() => {
    sendData();
  }, []);
  const sendData = () => {
    //   dispatching value of from and to

    dispatch(searchFlight(from, to));
  };
  return (
    <div>
      <div style={{ margin: "30px 0px" }}>
        <TextField
          id="outlined-name"
          label="FROM"
          onChange={(e) => setFrom(e.target.value)}
        />
        <br />
        <br />
        <TextField
          onChange={(e) => setTo(e.target.value)}
          id="outlined-name"
          label="TO"
        />
        <br />
        <br />
        <Button onClick={sendData} variant="contained">
          SEARCH
        </Button>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              {/* <th>AIRPORT</th> */}
              <th>FROM</th>
              <th>TO</th>
              <th>FROM TIME</th>
              <th>TO TIME</th>
              <th>COST</th>
              <th>PNR</th>
              <th>CAPACITY</th>
            </tr>
          </thead>
          <tbody>
            {flight.map((e) => {
              return (
                <tr key={e._id}>
                  {/* <td>{e.airportId}</td> */}
                  <td>{e.start}</td>
                  <td>{e.end}</td>
                  <td>{e.startTime}</td>
                  <td>{e.endTime}</td>
                  <td>{e.cost}</td>
                  <td>{e.PNR}</td>
                  <td>{e.capacity}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
