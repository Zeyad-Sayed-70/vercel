import "./App.css";

const TEST_VAR = import.meta.env.VITE_TEST_VAR;
const VITE_ENV_VAR = import.meta.env.VITE_ENV_VAR;

function App() {
  return (
    <>
      <p>value: {JSON.stringify(VITE_ENV_VAR)}</p>
      <p>value: {JSON.stringify(TEST_VAR)}</p>
    </>
  );
}

export default App;
