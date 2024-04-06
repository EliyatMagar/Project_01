import React from 'react';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import image1 from "../image/review-image-1.png";
import image2 from "../image/review-image-2.png";
import image3 from "../image/review-image-3.png";

const Slider_review = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="mx-auto max-w-screen-xl">
            <Slider {...settings}>
                {data.map((d, index) => (
                    <div key={index} className="bg-blue-300 p-3 rounded shadow-xl">
                        <div>
                            <h1 className="text-4xl text-white">
                                <FontAwesomeIcon icon={faQuoteLeft} />
                            </h1>
                        </div>
                        <div>
                            <p className="py-2 m-2 text-white">{d.description}</p>
                        </div>
                        <div className="grid grid-cols-2 items-center">
                            <img src={d.image} alt="" className="max-w-full" />
                            <div className="flex flex-col text-md text-white">
                                <p>{d.name}</p>
                                <p>{d.post}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Slider_review;

const data = [
    {
        image: image1,
        name: 'Eliyat Thapa Magar',
        post: "Engineer",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed rerum obcaecati, provident neque est sint."
    },
    {
        image: image2,
        name: 'Eliyat Thapa Magar',
        post: "Engineer",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed rerum obcaecati, provident neque est sint."
    },
    {
        image: image3,
        name: 'Eliyat Thapa Magar',
        post: "Engineer",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed rerum obcaecati, provident neque est sint."
    },
    {
        image: image1,
        name: 'Eliyat Thapa Magar',
        post: "Engineer",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed rerum obcaecati, provident neque est sint."
    },
    {
        image: image2,
        name: 'Eliyat Thapa Magar',
        post: "Engineer",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed rerum obcaecati, provident neque est sint."
    },
    {
        image: image2,
        name: 'Eliyat Thapa Magar',
        post: "Engineer",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed rerum obcaecati, provident neque est sint."
    },
    {
        image: image2,
        name: 'Eliyat Thapa Magar',
        post: "Engineer",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed rerum obcaecati, provident neque est sint."
    },
    {
        image: image2,
        name: 'Eliyat Thapa Magar',
        post: "Engineer",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed rerum obcaecati, provident neque est sint."
    },
    {
        image: image2,
        name: 'Eliyat Thapa Magar',
        post: "Engineer",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed rerum obcaecati, provident neque est sint."
    }
];
