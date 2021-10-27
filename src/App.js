//components
import Messenger from "./components/Messenger";
import AccountProvider from "./contex/AccountProvider";
import TempleProvider from "./theme/TempleProvider";
import UserProvider from "./contex/UserProvider";
import './App.css';

function App() {
  return (
    <div className="App">
      <TempleProvider>
        <UserProvider>
        <AccountProvider>
          <Messenger />
        </AccountProvider>
        </UserProvider>
      </TempleProvider>
    </div>
  );
}

export default App;
