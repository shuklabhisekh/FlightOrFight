import ConnectingAirportsIcon from "@mui/icons-material/ConnectingAirports";
import { useNavigate } from "react-router";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        height: "60px",
        display: "grid",
        justifyContent: "center",
        alignContent: "center",
        backgroundColor: "royalblue",
      }}
    >
      <div onClick={() => navigate("/")}>
        <ConnectingAirportsIcon
          style={{
            height: "60px",
            width: "60px",
            color: "white",
            cursor: "pointer",
          }}
        />
      </div>
    </div>
  );
};
