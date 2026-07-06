const Hero = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen mb-20">
            <img src="/grill.jpg" alt="hero" className=" w-full h-full object-cover opacity-50" />
            <div className="absolute text-center">
                <h1 className="text-9xl pb-10">
                    Pie brāļa
                </h1>
                <h2 className="text-4xl tracking-wide">
                    Nepaskrien garām - iebrauc un izbaudi!
                </h2>
            </div>
        </div>
    )
}
export default Hero
