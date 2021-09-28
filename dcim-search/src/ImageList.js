import React from 'react'
import './ImageList.css';
import ImageCard from './ImageCard';

const ImageList = (props) =>{
    const imgs = props.foundImages.map(img => {
        return <ImageCard image={img} />
    })
    console.log (props.foundImages)
     return(<div className="image__list">{imgs}</div>);
 }

 export default ImageList;