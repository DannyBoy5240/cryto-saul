"use client";
import Image from "next/image";
import { useRouter } from 'next/router';
import React, {useState, useEffect} from "react";
import ModalVideo from "react-modal-video";

const Banner = () => {
    interface modalCard {
        icon: string;
        title: string;
        content: {
            subtitle: string;
            text: string;
        }[];
        button: { label: string; url: string }[];
    }
    
    // const router = useRouter();

    const [isOpen, setOpen] = useState(false);

    const [modalOpen, setModalOpen] = useState(false);

    const handleAccept = () => {
        // Add logic for when the user accepts
        setModalOpen(false);
    };

    const handleDecline = () => {
        // Add logic for when the user declines
        setModalOpen(false);
    };

    const handleClose = () => {
        setModalOpen(false);
    };

    // useEffect(() => {
    //     // Add or remove the 'overflow-hidden' class based on the modalOpen state
    //     if (modalOpen) {
    //         document.body.classList.add("overflow-hidden");
    //     } else {
    //         document.body.classList.remove("overflow-hidden");
    //     }

    //     // Cleanup the class when the component unmounts
    //     return () => {
    //         document.body.classList.remove("overflow-hidden");
    //     };
    // }, [modalOpen]);

    const modalCard: modalCard[] = [
        {
            icon: "/modal/busd.png",
            title: "Busd",
            content: [
                {
                    subtitle: "Advantages:",
                    text: "Stablecoin is pegged to the value of the dollar\nApproved by the New York State Financial Services\nAuthority (NYDFS)\nFixed profit and fall protection\nInstant transactions",
                },
                {
                    subtitle: "Limitations:",
                    text: "Due to the stable price, it is difficult to make money on growth",
                }
            ],
            button: [{ label: "Registration Busd", url: "/https://busd.forsage.io/registration?_gl=1*3jm4m4*_ga*MTk0NTQzMTg1MS4xNzAzMzQxNzI0*_ga_XTBFEB6MK2*MTcwMzQ4MDMxMy41LjAuMTcwMzQ4MDMyMC41My4wLjA." }],
        },
        {
            icon: "/modal/ethereum.png",
            title: "Ethereum",
            content: [
                {
                    subtitle: "Entry fee 0.05 ETH",
                    text: "3 programs available: x3, x4, xGold\nOver 1 million users\nThe total results of the participants are more than 1 billion dollars",
                },
                {
                    subtitle: "Advantages:",
                    text: "The largest crypto community\nThe second cryptocurrency by capitalization\nThe opportunity to earn on the growth of cryptocurrency capitalization\nReliable and stable network",
                },
                {
                    subtitle: "Limitations:",
                    text: "High network commission\nLow transaction speed\nThe cost of entry is highly dependent on the price of the cryptocurrency",
                }
            ],
            button: [{ label: "Registration Ethereum", url: "/https://lk.forsage.io/auth/new/?_gl=1*2gpqtb*_ga*MTk0NTQzMTg1MS4xNzAzMzQxNzI0*_ga_XTBFEB6MK2*MTcwMzQ4MDMxMy41LjEuMTcwMzQ4MDYyMi42MC4wLjA." }],
        },
        {
            icon: "/modal/tron.png",
            title: "Tron",
            content: [
                {
                    subtitle: "Entry fee 200 TRX",
                    text: "3 programs available: x3, x4, xGold\nOver 400,000 users\nThe total results of the participants are more than 80 million dollars",
                },
                {
                    subtitle: "Advantages:",
                    text: "Instant transactions\nLow network commission\nAffordable and easy start",
                },
                {
                    subtitle: "Limitations:",
                    text: "High TRX volatility",
                }
            ],
            button: [{ label: "Registration Tron", url: "/https://trx.forsage.io/auth/new/?_gl=1*2gpqtb*_ga*MTk0NTQzMTg1MS4xNzAzMzQxNzI0*_ga_XTBFEB6MK2*MTcwMzQ4MDMxMy41LjEuMTcwMzQ4MDYyMi42MC4wLjA." }],
        },
    ];

    const handleButtonClick = (url: string) => {
        // router.push(url);
        console.log(url);
    };

    return (
        <div className="bg-image relative" id="home-section">
            <div className="arrowOne"></div>
            <div className="radial-banner hidden lg:block"></div>
            <ModalVideo channel="youtube" isOpen={isOpen} videoId="1YyAzVmP9xQ" onClose={() => setOpen(false)} />

            <div className="mx-auto max-w-7xl pt-16 lg:pt-40 sm:pb-24 px-6">
                <div className="height-work">
                    <div className="grid grid-cols-1 lg:grid-cols-12 my-16">
                        <div className="arrowTwo"></div>
                        <div className="col-span-7">
                            <h1 className="text-4xl lg:text-7xl font-bold mb-5 text-white md:4px md:text-start text-center">
                                Buy, Sell & Accept <br /> Digital Assets
                            </h1>
                            <p className="text-white md:text-lg font-normal mb-10 md:text-start text-center">
                                Lorem Ipsum is simply dummy text of the printing and <br /> typesetting industry. Lorem
                                Ipsum has been the industry <br /> standard dummy text ever since the 1500s
                            </p>
                            <div className="flex align-middle justify-center md:justify-start">
                                <button
                                    className="text-xl font-semibold text-white py-4 px-6 lg:px-12 navbutton mr-6"
                                    onClick={() => setModalOpen(true)}
                                >
                                    Get Started
                                </button>
                                <button
                                    onClick={() => setOpen(true)}
                                    className="bg-transparent flex justify-center items-center text-white"
                                >
                                    <Image
                                        src={"/images/Banner/playbutton.svg"}
                                        alt="button-image"
                                        className="mr-3"
                                        width={47}
                                        height={47}
                                    />
                                    How it work
                                </button>
                            </div>
                        </div>

                        <div className="col-span-5 lg:-m-48">
                            <div className="arrowThree"></div>
                            <div className="arrowFour"></div>
                            <div className="arrowFive"></div>
                            <Image src="/images/Banner/banner.png" alt="nothing" width={1013} height={760} />
                            <div className="arrowSix"></div>
                            <div className="arrowSeven"></div>
                            <div className="arrowEight"></div>
                        </div>
                    </div>
                </div>
            </div>

            {modalOpen && (
                <div
                    id="static-modal"
                    data-modal-backdrop="static"
                    tabIndex={-1}
                    aria-hidden="true"
                    className="fixed top-0 right-0 left-0 z-50 flex items-center justify-center w-full h-full bg-modal text-white"
                >
                    <div className="relative p-4 w-full h-full overflow-y-auto">
                        <div className="flex items-center justify-between p-4 md:p-5">
                            <button
                                type="button"
                                className="text-white text-sm w-12 h-8 ms-auto inline-flex justify-center items-center navbutton"
                                onClick={handleClose}
                            >
                                Close
                            </button>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-5 mt-20">
                            {modalCard.map((items, i) => (
                                <div className="card-c p-8" key={i}>
                                    <div className="work-img-bg-modal rounded-full flex justify-center items-center absolute p-6">
                                        <Image src={items.icon} alt={items.icon} width={44} height={44} />
                                    </div>
                                    <div>
                                        <Image
                                            src={"/images/Work/bg-arrow.svg"}
                                            alt="arrow-bg"
                                            width={85}
                                            height={35}
                                        />
                                    </div>
                                    <h3 className="text-2xl text-offwhite font-semibold text-center mt-4 mb-6">
                                        {items.title}
                                    </h3>
                                    <div className="mb-16">
                                        {items.content.map((content, contentIndex) => (
                                            <div key={contentIndex}>
                                                <p className="text-base font-bold text-bluish mt-6 ">
                                                    {content.subtitle}
                                                </p>
                                                <p className="text-base font-normal text-bluish mt-2 whitespace-pre-line">
                                                    {content.text}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                    
                                    
                                    <div className="flex justify-center items-center">
                                        <button
                                            className="text-lg font-semibold text-white py-2 px-8 lg:px-12 navbutton mt-6 absolute button-custom"
                                            onClick={() => handleButtonClick(items.button[0].url)}
                                        >
                                            {items.button[0].label}
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
};

export default Banner;
