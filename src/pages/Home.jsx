import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Sections from "../components/Sections";
import Slider from "../components/Slider";
import Video from "../components/Video";
import Counter from "../components/Counter";
import Story from "../components/Story";
import Modal from "../components/Modal";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
    setIsModalOpen(true);
    }, 7000);
return () => clearTimeout(timer);
  }, []);
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Hero />
      <Story />
      <div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
      </div>
      <Modal />
      <Sections />
      <Slider />
      <Counter />
      <Video />
    </div>
  );
}

export default Home;
