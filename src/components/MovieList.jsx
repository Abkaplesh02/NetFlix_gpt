import MovieCard from "./MovieCard";

const MovieList=({title,movies})=>{
    if(movies==null){
        return;
    }
    return(
        <div className="px-6 ">
             <h1 className="text-2xl  md:text-3xl py-4 text-white flex justify-center md:justify-normal">{title} </h1>
            <div className="flex overflow-x-scroll ">
                <div className="flex  mx-auto ">
                {
                    movies.map((movie)=><MovieCard key={movie.id} posterPath={movie.poster_path}/>)
                }
                
                </div>
            </div>
            

        </div>
    )
}

export default MovieList;