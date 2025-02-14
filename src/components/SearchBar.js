import React from 'react';


class SearchBar extends React.Component{
/*uncontrolled Component
    onInputChange(event){
        console.log(event.target.value);

    }*/
state = {term:''};    

onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
    
}
    
render(){
    return(
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Image Search</label>
                    <input type="text" value={this.state.term} onChange={(event) => this.setState({term :event.target.value})}/>
                    
                    </div>
                </form>
        
            </div>
    );
}
    
}


export default SearchBar;
