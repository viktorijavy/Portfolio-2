import testimonialJerome from '../assets/testimonial_jerome.png'

const Testimonials = () => {
    return (
        <div name="testimonials" className="bg-[#001219] w-full h-full text-gray-400">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full border-t">
                <div className="md:mx-0 py-[100px]">
                    <p className="text-5xl font-bold">testimonials.</p>
                </div>
                <div className="mb-12">
                    <img src={testimonialJerome} alt="testimonial" className="rounded" />
                </div>

            </div>

        </div>
    )
}

export default Testimonials