


const Hero = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-slate-300">
                        Welcome to Our Library Management System
                    </h1>
                    <p className="mb-8 leading-relaxed text-slate-800 dark:text-slate-400">
                        Explore our vast collection of books, manage borrowings, and enjoy seamless access to knowledge.
                        Discover the joy of reading with our user-friendly interface.
                    </p>
                <div className="flex justify-center">
                </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img
                    className="object-cover object-center rounded"
                    alt="library"
                    src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                </div>
            </div>
        </section>
    );
};

export default Hero;