import React, {Component} from 'react';

// Custom components
import '../App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

class App extends Component {
    render() {
        return(
            <div id="crypto-platforms">
                <Header />
            	<Content />
                <Footer />
            </div>
        )
    }
}

export default App;