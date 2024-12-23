import React from "react";
import { motion } from "framer-motion";
const CNN = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="container rounded-xl h-[80vh] mt-20 bg-[#0e0b20]"
    >
      <div className="grid grid-cols-2 p-5 h-full">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="flex justify-between py-10 flex-col col-span-1 "
        >
          <p className="text-gray-500">(1) CNN</p>
          <div>
            <p className="text-gray-500">
              Convolutional Neural Networks (CNNs) are a type of deep learning
              model designed to automatically detect and learn patterns from
              image data through a series of convolutional layers that scan the
              image for features like edges, textures, and shapes. CNNs are
              particularly effective for tasks like detecting brain strokes from
              facial images because they can identify subtle facial asymmetries
              caused by stroke-related symptoms, such as drooping on one side of
              the face. By learning these patterns from large datasets of
              labeled images, CNNs can quickly and accurately identify
              stroke-related abnormalities, making them a powerful tool for
              early detection, even in non-invasive settings.
            </p>
            <a href="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://towardsdatascience.com/convolutional-neural-networks-explained-9cc5188c4939&ved=2ahUKEwiypLiJgbyKAxXlxzgGHc99F7sQFnoECBAQAQ&usg=AOvVaw3aDt7XSsV8UXC4WmYh7IKL">
              <div className="flex items-center justify-start cursor-pointer mt-5">
                <div className="px-8 py-2 rounded-full  border-2 text-custom-white  border-white">
                  Learn More
                </div>
                <div className="p-2 rounded-full bg-custom-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M17 7l-10 10" />

                    <path d="M8 7l9 0l0 9" />
                  </svg>
                </div>
              </div>
            </a>
          </div>
        </motion.div>

        <div className="col-span-1 mt-10">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-gray-300 text-[60px]  text-end"
          >
            Fight <span className="font-bold text-custom-white">Brain</span>{" "}
            Problems Using Artificial{" "}
            <span className="font-bold text-custom-white">Brain</span> With
            Convolutional Neural Networks
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className="flex items-center justify-end cursor-pointer mt-5"
          >
            <div className="px-8 py-2 rounded-full  border-2 text-custom-purple  bg-custom-white">
              Get Started
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default CNN;
