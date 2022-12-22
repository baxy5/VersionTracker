import Image from "next/image"

const Hero = () => {
    return (
        // TODO: Responsivity
        <div className="flex">
            <div className="hero-text flex justify-center items-center p-20">
                <div>
                    <h1 className='text-5xl text-white pb-5'>
                        Version tracker for developers in one place.
                    </h1>
                    <p className='text-2xl text-white'>Keep up the pace with your favourite techonology changes.</p>
                </div>
            </div>
            <div className="hero-img">
                <Image src="/hero-image.png" width="600" height="600" alt="Hero Image" />
            </div>
        </div>
    )
}

export default Hero