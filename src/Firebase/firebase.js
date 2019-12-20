import React from 'react';

const store = compose(window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore)(MainReducer)


ReactDOM.render(<Provider store={store}>
	<div >{routing}
	<Footer />
	</div></Provider> ,document.getElementById("root"))



const config = {
 	apiKey: "AIzaSyAesQJ1_oc33yh63RfFjxzxY7IoyfCjWhI",
    authDomain: "fir-5b673.firebaseapp.com",
    databaseURL: "https://fir-5b673.firebaseio.com",
    projectId: "fir-5b673",
    storageBucket: "fir-5b673.appspot.com",
    messagingSenderId: "971505986703"
};

