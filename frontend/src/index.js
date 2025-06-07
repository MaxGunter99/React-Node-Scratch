import { createRoot } from "react-dom/client";
import "./css/reset.css";
import "./css/index.css";
import AppRouting from "./Routing";
import { BrowserRouter } from "react-router-dom";

const RootElement = document.getElementById("root");
const root = createRoot(RootElement);

root.render(
	<BrowserRouter>
		<AppRouting />
	</BrowserRouter>
);
