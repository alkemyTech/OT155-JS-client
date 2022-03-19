import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Inicio from "./pages";
import News from "./pages/news";

function App() {
	return (
		<>
			<div>
				<Link to="/">Home</Link>
				<Link to="/news">News</Link>
			</div>

			<Routes>
				<Route path="/" element={<Inicio />} />
				<Route path="/news" element={<News />} />
			</Routes>
		</>
	);
}

export default App;
