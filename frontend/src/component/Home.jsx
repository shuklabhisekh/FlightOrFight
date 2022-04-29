import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Home.css";
export const Home = () => {
  return (
    <div>
      <div style={{ margin: "30px 0px" }}>
        <TextField id="outlined-name" label="FROM" />
        <br />
        <br />
        <TextField id="outlined-name" label="TO" />
        <br />
        <br />
        <Button variant="contained">SEARCH</Button>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>AIRPORT</th>
              <th>FROM</th>
              <th>TO</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};
