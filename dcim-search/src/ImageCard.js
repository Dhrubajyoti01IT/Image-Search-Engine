import React, {Component} from 'react';

export default class ImageCard extends Component{
    constructor (props)
    {super(props);
    this.state = {spans: 0}
    this.imageRef = React.createRef();}
     
    componentDidMount(){
      this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans=() => {const height = this.imageRef.current.clientHeight;
    const spanRows = Math.ceil(height / 10);
    this.setState({spans: spanRows})}

    render(){return (<div style={{gridRowEnd: `span ${this.state.spans}`}}> <img ref={this.imageRef} key={this.props.image.id} 
        src={this.props.image.urls.regular}
        alt={this.props.image.alt_description}
         />
          </div>)
          }
}
