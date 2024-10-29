import React from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaQuoteLeft } from "react-icons/fa";
import { IoChevronForwardCircle, IoChevronBackCircleSharp } from "react-icons/io5";

type Image = {
    src: string;
    alt: string;
    name: string;
    title: string;
    description: string;
};

const imageArray: Image[] = [
    { src: '1.jpg', alt: 'First image', title: 'CEO', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', name: 'Peter Griffin' },
    { src: '2.webp', alt: 'Second image', title: 'CEO', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', name: 'Peter Griffin'  },
    { src: '3.jpg', alt: 'Third image', title: 'CEO', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', name: 'Peter Griffin'  },
    { src: '4.webp', alt: 'Fourth image', title: 'CEO', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', name: 'Peter Griffin'  },
    { src: '5.jpg', alt: 'Fifth image', title: 'CEO', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', name: 'Peter Griffin'  },
];

const Staff: React.FC = () => {
    const sliderRef = React.useRef<Slider>(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
    };

    const handleNext = () => {
        sliderRef.current?.slickNext();
    };

    const handlePrev = () => {
        sliderRef.current?.slickPrev();
    };

    return (
        <section className="bg-blue-100 py-6 px-20">
            <h1 className="text-center text-3xl font-bold p-6">Hear From Our Staff</h1>
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
                <div className="w-full md:w-1/2">
                    <Slider ref={sliderRef} {...settings}>
                        {imageArray.map((image, index) => (
                            <div key={index} className="flex items-center justify-center">
                                <img src={image.src} alt={image.alt} className="max-w-[80%] w-[80%] h-auto object-cover rounded-lg" />
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="w-full md:w-1/2 p-4 text-center md:text-left">
                    <FaQuoteLeft className="text-2xl text-gray-600 mb-2" />
                    <p className="text-lg font-semibold">"{imageArray[0].description}"</p>
                    <p className="text-md font-semibold text-gray-500 mt-2">{imageArray[0].name}, {imageArray[0].title}</p>
                    <div className="flex justify-center md:justify-start space-x-4 mt-4">
                        <button onClick={handlePrev} className="text-gray-700 hover:text-gray-900">
                            <IoChevronBackCircleSharp size={30} />
                        </button>
                        <button onClick={handleNext} className="text-gray-700 hover:text-gray-900">
                            <IoChevronForwardCircle size={30} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Staff;
