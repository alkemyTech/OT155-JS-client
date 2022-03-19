import {Routes, Route} from "react-router-dom"

import "./App.css";
import Register from "./pages/Register/Register";

function App() {


	return (
		<div className="App">
			<Routes>
				<Route path="/register" element={<Register></Register>}></Route>
			</Routes>
		
		</div>
	);
}

export default App;
