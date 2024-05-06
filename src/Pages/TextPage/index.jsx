import "../../Styles/TextPage.css"
import styled from 'styled-components'
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../../Components/Card'

const Picture = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 75px;`

function TextPage() {

    // const { id } = useParams();
    // const [images, setImages] = useState(null);
    
    // useEffect(() => {
    //     fetch(`http://localhost:8000/images`)
    //       .then(response => response.json())
    //       .then(data => setImages(data))
    //       .catch(error => console.error('Error fetching image:', error));
    //   }, [id]);
    //   return (
    //     <div>
    //       {images ? <Card src={images.url} alt={images.description}/> : <p>Loading...</p>}
    //     </div>
    //   );
    // }
    const { id: queryId } = useParams()
    const [pictureData, setPictureData] = useState({})
    useEffect(() => {
      fetch(`http://localhost:8000/picture?id=${queryId}`)
        .then((response) => response.json())
        .then((jsonResponse) => {
          setPictureData(jsonResponse?.pictureData)
        })
    }, [queryId])
  
    const {
      
      url,
      description,
    } = pictureData
  
    return (
      <div className="Picture">
          <img src={url} alt={description} height={700} width={1250} />
     </div>
    )
  }
  


export default TextPage 