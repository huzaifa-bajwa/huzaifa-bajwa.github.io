const MyComponent = () => {
	const [arr, setArr] = React.useState([]);
	const [inputVal, setInputVal] = React.useState("");

	const combinedList = []

	for(let i=0; i<arr.length;i++){
		combinedList.push(<li>{arr[i]}<i onClick={crossOut} className="fa-solid fa-xmark"></i></li>);
	}
	
	const addTask = () =>{
	
		const newArr = [...arr, inputVal];
		setArr(newArr);

	};

	const inputUpdater = (e) =>{

		setInputVal(e.target.value);

	};
	
	return(
		<div> 
		
			<div id="background-cover">

			<p className="header">Bucket List <i className="fa-solid fa-bucket"></i></p>

			<input id="task-input" type="text" className="header" value={inputVal} onChange={inputUpdater} placeholder="Enter Text"></input>
			<button type="submit" className="header" onClick={addTask}><i className="fa-solid fa-plus"></i></button> 
			
			</div>

			<div id="tasks">

				<ul id="list">

					{combinedList}

				</ul>

			</div>

		</div>
	);
};

const crossOut = (e) => {
	e.target.parentElement.classList.toggle("crossed")
}

const root = ReactDOM.createRoot(document.getElementById("background-cover"));
root.render(<MyComponent />)