import axios from '../../axios'
import React from 'react'
import { useEffect,useState } from 'react'
import './rowPost.css' 
import {API_KEY, imageUrl } from '../../constants/constants'
import YouTube from 'react-youtube'
 
function RowPost(props) {
    const [movie, setMovie] = useState([])
    const [url, setUrl] = useState('')

    useEffect(()=>{
        console.log(props.url,'url');
        axios.get(props.url).then(response=>{
            setMovie(response.data.results)
        }).catch(err=>{
            console.log('not found');
        alert('Requested movie not found...!')
    })
},[])
const opts = {
    height: '500px',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
}
const handleMovie = (id )=>{
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{ 
        if(response.data.results.lenght!==0){
            setUrl(response.data.results[0])
        }else{
            console.log('data doesnt exist');
        }
    })
}
    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
                {
                    movie.map((obj)=>{
                         return <img onClick={()=>handleMovie(obj.id)} className = { props.isSmall ? 'smallPoster':'poster'} alt='poster' src={`${ imageUrl+obj.backdrop_path}`} />
                    })
                }
            </div>
           { url && <YouTube opts={opts} videoId={url.key} /> }
        </div>
    )
}

export default RowPost
