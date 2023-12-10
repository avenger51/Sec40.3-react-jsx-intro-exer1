const Tweet = ({ username, name, date, message }) => {
	return (
	  <div className="tweet-container">
		<b>{name} (@{username})</b>
		<p>{message}</p>
		<small>{date}</small>
	  </div>
	);
  };

  const App = () => {
	return (
	  <div>
		<Tweet 
		  username="Jim69" 
		  name="Jim" 
		  date="August 22nd" 
		  message="Here is Jim's tweet" 
		/>
		<Tweet 
		  username="Patrick69" 
		  name="Pat Murph" 
		  date="Jan 1st" 
		  message="Here is Pat's tweet" 
		/>
		<Tweet 
		  username="Jack69" 
		  name="Jack Olsen" 
		  date="August 2nd" 
		  message="Here is Jack's tweet" 
		/>
	  </div>
	);
  };

ReactDOM.render(<App />, document.getElementById('root'));

//<li>Tweet Author Username : { props.username } </li>,
//	<li>Tweet Author Name: { props.name } </li>,
//	<li>Tweet Date: { props.date }</li>,
//	<li>Twee Message: { props.message } </li>
	