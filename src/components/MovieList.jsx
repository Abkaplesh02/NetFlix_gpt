import MovieCard from "./MovieCard";

const MovieList=({title,movies})=>{
    if(movies==null){
        return;
    }
    return(
        <div className="px-6 ">
             <h1 className="text-xl md:text-3xl py-4 text-white flex justify-center">{title} </h1>
            <div className="flex md:overflow-x-scroll ">
                <div className="flex flex-col mx-auto md:flex-row">
                {
                    movies.map((movie)=><MovieCard key={movie.id} posterPath={movie.poster_path}/>)
                }
                
                </div>
            </div>
            

        </div>
    )
}

export default MovieList;