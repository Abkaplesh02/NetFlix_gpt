import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {

    useMovieTrailer(movieId);

    const trailer=useSelector((store)=>store.movies?.trailerVideo?.key);


    return (
        <div className="">
            <iframe className="w-[100%] aspect-video" 
             src={"https://www.youtube.com/embed/"+trailer+"?&autoplay=1&mute=1" }  title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" ></iframe>
        </div>
    )
}
export default VideoBackground;