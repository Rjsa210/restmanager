import logo from './logo.svg';
import './App.css';

const newProd = {
  product_name: "Melon, Watermelon",
  category: "Produce",
  pack_size: "ea",
  count_size: "ea",
  pack_price: 5.62,
  count_price: 5.62,
  storage_location: "Cooler"
}

const testInsert = async (e) => {
  const response = await fetch("/api/products", {
    method: "POST",
    body: JSON.stringify(newProd),
    headers: {
      "Content-Type": "application/json",
    }

  });
  if (response.ok) {
    console.log(response);
    alert("Strawberries added");

  } else {
    console.log(response);
    alert("nope");
  }
};

const testFetch = async (e) => {
  e.preventDefault();
  const response = await fetch("/api/products", {
    method: "GET",
    // headers: {
    //   "content/type": "application/json",
    // }
  });
  if (response.ok) {
    console.log(response);
    alert(response.status);
  } else {
    console.log(response);
    alert(response.status);
  }

}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <button className='test-insert' onClick={testInsert}>TEST INSERT</button>
          <button className='test-fetch' onClick={testFetch}>TEST FETCH</button>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
