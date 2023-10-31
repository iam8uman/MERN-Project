import "./App.css";
import config from "./config/config";

function App() {
  console.log(config.appwriteDBID);
  console.log(config.appwritePID);

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
}

export default App;
