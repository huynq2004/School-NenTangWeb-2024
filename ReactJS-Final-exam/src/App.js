import './App.css';
import SideBar from './components/Sidebar';
import Footer from './components/Footer/footer';

import DataTable from './components/DataTable';

function App() {
  return (
      <div className="App d-flex align-items-center">
          <SideBar></SideBar>
          <div className="container mt-4">
              <DataTable/>
          </div>
      </div>
  );
}

export default App;
