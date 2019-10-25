/* Loads the data and calls the processData function*/ 
function makeplot() {
	
	Plotly.d3.csv("https://raw.githubusercontent.com/plotly/datasets/master/Emissions%20Data.csv", function(data){
		processData(data) } );
};

/* This is the function you will modify. You can add more functions outside of it as well. */ 
function processData(allRows) {
  	console.log(allRows); // log all data to console
	
	/* An example showing how to fetch data from 1 column into an array*/
	var column_year = allRows.map(function(row) { return row["Year"]; })
	console.log(column_year);
	
	/*TODO: Fetch data from the columns you need as arrays/ an array of objects */
	var column_country = allRows.map(function(row){return row["Country"];})
	console.log(column_country);

	var column_emission = allRows.map(function(row){return row["Emission"];})
	
	
	/*TODO: Preprocess the fetched data to get arrays that plotly can take as input*/
	
	var a=[];

	for (i=0; i<column_emission.length; i=i+4){
		a.push(column_emission[i]);
	}

	//var a = column_emission.filter(divisible_by_4)
	

	/*TODO: Use Plotly.js to display the Bar Charts*/
	
	
}

makeplot();