
import './App.css';
import Weather from "./weather";

function App() {
  return (
		<div className="App">
			<header className="App-header">
				<p>Hello World from React</p>
				<p>
					<Weather city="tunapuna"/>
				</p>
			</header>
		</div>
	);
}

export default App;
