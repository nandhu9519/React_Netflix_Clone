import React, { useEffect,useState } from 'react'
import axios from '../../axios'
import './banner.css'
import { API_KEY, imageUrl } from '../../constants/constants'
import YouTube from 'react-youtube'


function Banner() {
    const opts = {
        height: '500px',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
    }
    const [movie, setMovie] = useState([])
    const [url, setUrl] = useState('')
    const handleMovie = (id )=>{
        axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{ 
            if(response.data.results.lenght!==0){
                setUrl(response.data.results[0])
            }else{
                console.log('data doesnt exist');
            }
        })
    }
    
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
            setMovie(response.data.results[0])
            console.log('state',response.data.results[0])
        })
    },[])
    
    return (
        <div>
        <div style={{ backgroundImage: `url( ${ imageUrl+movie.backdrop_path})`}} className='banner'>
            <div className='content'>
                <h1 className='title'>{movie.title}</h1>
                <div className='banner_buttons'>
                    <button className='button' onClick={()=>handleMovie(movie.id)}>Play</button>
                    <button className='button'>My list</button>
                </div>
                <h1 className='description'>{movie.overview }</h1>
            </div> 
            <div className="fade_bottom">

            </div>           
        </div>
        <div>
        { url && <YouTube opts={opts} videoId={url.key} /> }
        </div>
        </div>
        
    )
}

export default Banner
