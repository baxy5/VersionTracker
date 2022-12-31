import Image from "next/image"

const Hero = () => {
    return (
        <div className="bg-hero-bg lg:flex lg:items-center lg:justify-around flex-row-reverse lg:pt-20">

            <div className="hero-img flex justify-center items-center py-10">
                <Image src="/hero-image.png" width="600" height="600" alt="Hero Image" />
            </div>

            <div className="hero-text flex justify-center pt-7 lg:pl-5">
                <div className="w-[450px] text-center sm:w-[600px] lg:text-left">
                    <h1>Welcome to VersionVault</h1>
                    <h1 className='text-5xl text-white pb-3 xl:text-7xl'>
                        Version tracker for developers all around the world in one place.
                    </h1>
                    <p className='text-lg text-white italic'>Keep up the pace with your favourite techonology changes.</p>
                </div>
            </div>
        </div>
    )
}

export default Hero