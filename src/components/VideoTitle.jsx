const VideoTitle=({title,overview})=>{
    return(
        <div className="w-[100%] aspect-video pt-[20%] px-8 md:px-24 absolute bg-gradient-to-r from-black text-white">
            <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
            <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
            <div className="my-4 md:my-0">
                <button className="bg-white  text-black p-2 px-4   md:p-4 md:px-12 md:text-xl font-bold rounded-lg hover:bg-opacity-80">▷ Play</button>
                <button className="hidden md:inline-block mx-2 bg-gray-500  text-white  p-4 px-12 text-xl bg-opacity-50 rounded-lg">More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle;