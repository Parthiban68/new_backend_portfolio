import AppRoute from "./routes/AppRoute";
import SmoothScroll from "./components/SmoothScroll";
import CustomScrollbar from "./components/CustomScrollbar";

const App: React.FC = () => {
  return (
    <SmoothScroll>
      <CustomScrollbar />
      <AppRoute />
    </SmoothScroll>
  );
};

export default App;
