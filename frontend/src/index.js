import { createRoot } from "react-dom/client";
import "./css/reset.css";
import "./css/index.css";
import AppRouting from "./routing";
import { BrowserRouter } from "react-router-dom";

// REDUX
import store from "./reduxStore";
import { Provider } from "react-redux";

const RootElement = document.getElementById("root");
const root = createRoot(RootElement);

root.render(
	<Provider store={store}>
		<BrowserRouter>
			<AppRouting />
		</BrowserRouter>
	</Provider>
);
