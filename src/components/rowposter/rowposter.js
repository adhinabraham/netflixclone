import React,{useEffect,useState} from 'react'
import './rowposter.css'
import axios from 'axios'
import {imageUrl,API_KEY} from '../../constants/constant'
import YouTube from 'react-youtube'




// function RowPoster( props) {


//     const [movies,setMovies]= useState([])
//     const [urlID, seturlid ]=useState('')



//      useEffect(() => {

//         axios.get(props.url).then((response)=>{
//             setMovies(response.data.results)
  
//       }).catch(err=>{
//           alert('Network Error')
//       })
//          fetchData()
//          console.log('mounted');
//      }, [])

//      const fetchData = async () => {
//         const { data } = await axios.get(props.url)
//         setMovies(data.results)
//         console.log(data.results);
//      }

//      const opts = {
//         height: '390',
//         width: '100%',
//         playerVars: {
//           // https://developers.google.com/youtube/player_parameters
//           autoplay: 0,
//         },
//       };
//       const  handleMovie=(id)=>{(
//           console.log (id)
          
          

          
       

//       )
//            axios.get(`/movie/${id}/?api_key=${API_KEY}&language=en-US`).then(response=>{
//               console.log(response.data)
//               if (response.data.result.length!==0){
//                   seturlid(response.data.result[0])
//               }else{
//                   console.log('array is empty')
//               }

//           })
    
         
//       }
     
//     return (
//         <div className='row'>
//             <h2>{props.title}</h2>
//             <div className="posters">
//                 {movies.map((obj) =>
             
//                      <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ?'smallPoster':'poster'} src={`${imageUrl}${movie.backdrop_path}`} key={index} alt="jdf" />

//                 )}
              
//             </div>
//             { urlID && <YouTube videoId={urlID.key} opts={opts}  /> }
              
//         </div>
//     )

                
// }
// export default RowPoster
function RowPost(props) {
    const [movies, setMovies] = useState([])
    const [urlId,setUrlId]=useState('')
    useEffect(()=>{
    axios.get(props.url).then((response)=>{
          setMovies(response.data.results)

    }).catch(err=>{
        alert('Network Error')
    })
    },[])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
      const handleMovie =(id)=>{
          console.log(id);
          axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
            console.log(response.data);
              if(response.data.results.length!==0){
                  setUrlId(response.data.results[0])
              }else{
                  console.log('Array Empty');
              }
          })
          
      }
    return (
        <div className="row">
           <h2>{props.title}</h2>  
           <div className='posters'>
               {movies.map((obj)=>

           <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? "smallPoster" : "poster"} src={`${imageUrl+obj.backdrop_path}`} />  
               )}
           


           </div>
       { urlId &&  < YouTube opts={opts} videoId={urlId.key}/> }
        </div>
    )
}

export default RowPost

