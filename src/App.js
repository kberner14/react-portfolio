import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import About from './components/pages/Projects';
import Projects from './components/pages/About';
import Contact from './components/pages/Contact';

function App() {
	return (
		<Router>
			<div>
				<Navigation />
				<Route exact path="/" component={About} />
				<Route exact path="/about" component={About} />
				<Route exact path="/projects" component={Projects} />
				<Route path="/contact" component={Contact} />
			</div>
		</Router>
	);
}

export default App;
