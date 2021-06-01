// import logo from './logo.svg';
import './App.css';
import Receipt from './Receipt.js'
import Form from './components/Form.js'


function App() {
  return (
    <body>
        <h1>Korilla - Receipts of Those Who Have Not Paid Below:</h1>
          <Form receiptsearch={}/>
        <div className = "container">
          <Receipt/>
        </div>
    </body>

  );
}

export default App;
