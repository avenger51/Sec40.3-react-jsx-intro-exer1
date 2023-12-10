const Person = ({ name, age, hobbies }) => {
	const shortName = name.length > 8 ? name.substring(0, 6) : name;
  
	return (
	  <div>
		<p>Learn some information about this person</p>
		<h3>{age >= 18 ? "please go vote!" : "you must be 18"}</h3>
		<p>Name: {shortName}</p>
		<p>Age: {age}</p>
		<ul>
		{hobbies.map(hobby => (
          <li>{hobby}</li>
		  ))}
		</ul>
	  </div>
	);
  };

  const App = () => {
	return (
	  <div>
		<Person 
		  name="George" 
		  age={30} 
		  hobbies={['Reading', 'Gardening', 'Coding']} 
		/>
		<Person 
		  name="James" 
		  age={17} 
		  hobbies={['Skating', 'Painting']} 
		/>
		<Person 
		  name="Melissa" 
		  age={20} 
		  hobbies={['Hiking', 'Traveling', 'Photography']} 
		/>
	  </div>
	);
  };
  

ReactDOM.render(<App />, document.getElementById('root'));

