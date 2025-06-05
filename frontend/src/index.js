
import ReactDOM from 'react-dom/client';
import './css/index.css';
import AppRouting from './Routing';
import { BrowserRouter } from "react-router";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<BrowserRouter>
		<AppRouting />
	</BrowserRouter>
);
