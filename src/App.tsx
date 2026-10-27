import AppRoute from "./routes/AppRoute";
import SmoothScroll from "./components/SmoothScroll";

const App: React.FC = () => {
  return (
    <SmoothScroll>
      <AppRoute />
    </SmoothScroll>
  );
};

export default App;
