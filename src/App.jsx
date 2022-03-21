import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Inicio from "./pages";
import News from "./pages/news";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Inicio />} />
				<Route path="/news" element={<News />} />
			</Routes>
		</>
	);
}

export default App;
