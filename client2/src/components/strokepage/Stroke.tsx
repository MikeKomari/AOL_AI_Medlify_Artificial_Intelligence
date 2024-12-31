import React from "react";
import { motion } from "framer-motion";
const Stroke = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="container rounded-xl h-[80vh] mt-20 lg:h-fit"
    >
      <div className="grid grid-cols-2 p-5 h-full mt-10 lg:grid-cols-1">
        <div className="col-span-1 py-10 flex flex-col justify-between">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="text-custom-purple text-[60px] font-bold  text-start"
          >
            Brain Stroke
          </motion.h1>
        </div>
        <div className="flex justify-between flex-col">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="flex  flex-col col-span-1 text-end"
          >
            <p className="text-gray-500">(2) Brain Stroke</p>
            <p className="text-gray-500 mt-10 text-start">
              A stroke occurs when there is a disruption in the blood supply to
              part of the brain, either due to a blockage (ischemic stroke) or a
              rupture of a blood vessel (hemorrhagic stroke). This lack of blood
              flow deprives brain cells of oxygen and nutrients, leading to
              damage or death of brain tissue. The brain functions affected
              depend on the area of the brain that is deprived of oxygen. Common
              symptoms include sudden numbness or weakness, especially on one
              side of the body, confusion, difficulty speaking, and loss of
              coordination. Early intervention is crucial to prevent long-term
              damage or death.
            </p>
            <p className="text-gray-500 mt-5 text-start">
              Stroke is one of the leading causes of death and disability
              worldwide. According to the World Health Organization (WHO),
              stroke accounts for approximately 11% of total deaths globally,
              making it one of the most significant health concerns. The risk of
              stroke increases with factors like age, high blood pressure,
              smoking, and diabetes. In addition to the mortality rate, stroke
              is a major cause of long-term disability, with millions of
              survivors facing challenges such as paralysis, speech
              difficulties, and cognitive impairments. The societal and economic
              burden of stroke is immense, as it often requires long-term care
              and rehabilitation.
            </p>
            <div>
              <a href="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://en.wikipedia.org/wiki/Stroke&ved=2ahUKEwiP6MeNi7yKAxV6yDgGHdRZFp8QFnoECBgQAQ&usg=AOvVaw1HwXMKKz0mi0Yn6FPIiuuA">
                <div className="flex items-center justify-end cursor-pointer mt-5">
                  <div className="px-8 py-2 rounded-full  border-2 text-custom-white  bg-custom-purple">
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
        </div>
      </div>
    </motion.div>
  );
};

export default Stroke;
