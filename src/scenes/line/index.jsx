import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";

const Line = ({ isCustomLineColors = false, isDashboard = false, data }) => {
  return (
    <Box m="20px">
      <Header title="Temperature Line Chart" subtitle="Graph of temperature variation over time" />
      <Box height="75vh">
        <LineChart data={data}/>
      </Box>
    </Box>
  );
};

export default Line;
