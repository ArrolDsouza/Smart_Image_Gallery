import React, { useState, useEffect } from "react";
import Modal from "react-modal";

const API_KEY = "49347596-856d7e1af5de7749df1802741";
const BASE_API_URL = `https://pixabay.com/api/?key=${API_KEY}&q=yellow+flowers&image_type=photo&per_page=50`;

Modal.setAppElement("#root");

function ImageGallery(){

        const [loading, setLoading] = useState(true)
        const [images, setImages] = useState([]);
        const [selectedImage, setSelectedImage] = useState(null);
        const [query, setQuery] = useState("landscape");



        useEffect(() => {
            
        fetch(`${BASE_API_URL}&q=${query}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setImages(data.hits);
                setLoading(false)}
            )
            .catch((error) => {
                console.error("Error fetching images:", error)
                setLoading(false)
            });

            
        }, [query]);



        return (
            
            
        <div className="p-6">
            <h1 className="text-3xl font-bold text-center mb-6">Welcome to Image Gallery</h1>
            
            <div className="flex justify-center mb-10">
            <input
                type="text"
                placeholder="Search images..."
                className="p-2 border rounded-xl shadow-lg w-1/2"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            </div>
            
            { loading ? (
                <div className="text-center text-xl font-semibold">Loading...</div>
            ):  images.length === 0 ? (
                <div className="text-center text-xl font-semibold text-gray-500">No images found.</div>
            ) 
            : 
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
            {images.map((image) => (
                <img
                key={image.id}
                src={image.previewURL}
                alt={image.tags}
                className="w-full h-full object-cover rounded-lg hover:opacity-80 cursor-pointer transform hover:scale-105 transition-transform duration-300"
                onClick={() => setSelectedImage(image.largeImageURL)}
                />
            ))}
            </div>
        }

            <Modal
            isOpen={!!selectedImage}
            onRequestClose={() => setSelectedImage(null)}
            className="flex justify-center items-center h-screen"
            overlayClassName="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center"
            >
            <div className="relative">
                <button
                className="absolute top-2 right-2 text-red-700 text-5xl"
                onClick={() => setSelectedImage(null)}
                >
                &times;
                </button>
                <img
                src={selectedImage}
                alt="Selected"
                className="max-w-full max-h-[80vh] rounded-lg"
                />
            </div>
            </Modal>
        </div>
        );
};

export default ImageGallery;
