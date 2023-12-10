const FirstComponent = () => {
	return (
        <div>
	<h1>"My very first Component"</h1>
	
    </div>
    
    );
};

const NamedComponent = (props) => {
	return (
        <p>
	<h1>My name is : { props.name }</h1>
	
    </p>
    
    );
};
const App = () => {
	return (
		<div>
			<FirstComponent/>
            <NamedComponent name="name"/>
         
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));


