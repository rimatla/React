/**
 Lifting State Up
 - Often, several components need to reflect the same changing data.
 - We recommend lifting the shared state up to their closest common ancestor.
 * */

//create a temperature calculator, that calculates whether the water would boil at a given temperature

//accepts the celsius temperature as a prop, and prints whether it is enough to boil the water
function IsBoiling(props){
   if(props.celsius >=100) {
       return <p>The water would boil.</p>
   }
   return <p>The water would not boil.</p>
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {temperature:''};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({temperature: e.target.value});
    }

    render(){
        const temperature = this.state.temperature;
        return(
            <fieldset>
                <legend>Enter temperature in Celsius:</legend>
                <input
                    value={temperature}
                    onChange={this.handleChange}
                />
                <IsBoiling
                celsius = {parseFloat(temperature)}
                />
            </fieldset>
        )
    }
}


ReactDOM.render (
    <Calculator/>,
    document.getElementById('root')
);
