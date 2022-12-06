import { Box } from "@mui/system"
import Header from "../../components/Header"
import BarChart from "../../components/BarChart"

const index = () => {
  return (
    <Box>
      <Header title="Bar Chart" subtitle="Simple Bar Chart"/>
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  )
}

export default index