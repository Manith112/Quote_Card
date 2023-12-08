import { useEffect, useState } from 'react'

import './App.css'

function App() {

  const BaseUrl = 'https://api.quotable.io/random';

  const [data, setData] = useState([]);

  const getFetch = () => {
    fetch(BaseUrl)
    .then(resp => resp.json())
    .then(resp => {
        setData(resp)
    })
    .catch(err => console.log(err))
}

// copy 
const copyToClipboard = async () => {
  try {
    const textToCopy = `"${data.content}" - ${data.author}`;
    await navigator.clipboard.writeText(textToCopy);
   alert('Text copied to clipboard:', textToCopy);
  } catch (error) {
    alert('Error copying to clipboard:', error);
  }
};


useEffect(() => {
  console.log("in use effect")
  getFetch();
}, [])
  return (
   
    <div className='container'>
      
      <div className='card'>
        <h1 className='name'>{data.author}</h1>
        
        {data.tags && (
        <div> 
        {data.tags.map((tag, index) => (
        <span className='tag' key={index}>{tag}</span>
        
        ))}
        </div>
        )}
        
        <p className='para'>"{data.content}"</p>
      </div>
      <div className='random'>
        <span onClick={getFetch}><img src="../public/Regroup.svg" alt="" id='link'/></span>
        <span onClick={copyToClipboard}><img src="../public/link.svg" alt="" id='group'/></span>
      </div>
    </div>
     
  )

}

export default App
