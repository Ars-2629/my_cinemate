import { useEffect,useState } from 'react';
import { useParams } from "react-router-dom"

export function VideoPlayer() {
    const [videos,setVideos]=useState({});
    const params = useParams();
    const url = `https://api.themoviedb.org/3/movie/${params.id}/videos?api_key=1f7eafdd88f2e511c6a046c409ccfb0c`;
    const videokey = `https://www.youtube.com/embed/${videos.key}`

    useEffect(()=>{
        const fetchVideoDetails=async ()=>{
            const response = await fetch(url);
            const vdata = await response.json();
            setVideos(vdata.results[0]);
           }
        fetchVideoDetails();
    },[url]);

    

  return (
    <main>
    <div>
    <iframe className="w-full h-screen rounded-lg border-8 border-yellow-400" src={videokey} title="YouTube video player"></iframe>
 </div>
    </main>
    
  )
} 