const Contact = () => {

    return (

        <div name="contact" className="w-full h-screen bg-[#001219] flex justify-center items-center p-4 text-gray-300">
            <form
                action="https://getform.io/f/b5483c81-dc6a-4c54-968c-1e4d77d772ad"
                className="flex flex-col max-w-[600px] w-full border-t"
                method="POST"
            >
                <div className="py-8">
                    <h2 className="text-5xl">Contact</h2>
                    <p className="text-lg font-[Montserrat] pt-2"> Submit the form below or write me an email at: viktorija.qun@gmail.com</p>
                </div>

                <input
                    className="p-2 bg-[#ccd6f6] text-black"
                    type="text"
                    required
                    name="name"
                    placeholder="name" />

                <input
                    className="my-4 p-2 bg-[#ccd6f6] text-black"
                    type="email"
                    required
                    name="email"
                    placeholder="email" />

                <textarea
                    name="message"
                    required
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="message"
                    className="text-black p-2"
                >

                </textarea>

                <button
                    type="submit"
                    className="border-2 border-gray-400 hover:bg-[#00c4cc] hover:border-[#00c4cc] hover:text-white px-4 py-3 mx-auto my-8 flex items-center"
                > Get in Touch! </button>
            </form>

        </div>
    )
}

export default Contact;