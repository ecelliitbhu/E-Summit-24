"use client";
import React, { FunctionComponent } from "react";
import Image from "next/image";
import Logo from "@/public/logos/esummit.png";
import Particle from "@/components/particle";
import { Parallax } from "react-scroll-parallax";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

interface OwnProps {}

import "@/app/globals.css";

type Props = OwnProps;

const Hero: FunctionComponent<Props> = (props) => {
  return (
    <>
      <div className="min-h-screen flex justify-center items-center relative ">
        <Particle />
        <div className="absolute">
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
          >
            <Image
              src={Logo}
              width={400}
              height={400}
              alt="logo"
              className="flex justify-center"
            />
          </motion.div>
          <h1 className="text-2xl font-semibold  flex justify-center   mt-2">
            <motion.span
              initial={{ x: -60, scale: 0 }}
              animate={{ x: 0, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              0
            </motion.span>
            <motion.span
              initial={{ x: -80, scale: 0 }}
              animate={{ x: 0, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              2
            </motion.span>
            <motion.span
              initial={{ x: -100, scale: 0 }}
              animate={{ x: 0, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              -
            </motion.span>
            <motion.span
              initial={{ x: -100, scale: 0 }}
              animate={{ x: 0, scale: 1 }}
              transition={{ duration: 0.2 }}
            >
              0
            </motion.span>
            <motion.span
              initial={{ x: -100, scale: 0 }}
              animate={{ x: 0, scale: 1 }}
              transition={{ duration: 0.1 }}
            >
              4
            </motion.span>
            &nbsp;
            <motion.span
              initial={{ x: 100, scale: 0 }}
              animate={{ x: 0, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              F
            </motion.span>
            <motion.span
              initial={{ x: 100, scale: 0 }}
              animate={{ x: 0, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              E
            </motion.span>
            <motion.span
              initial={{ x: 100, scale: 0 }}
              animate={{ x: 0, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              B
            </motion.span>
            <motion.span
              initial={{ x: 100, scale: 0 }}
              animate={{ x: 0, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              R
            </motion.span>
            <motion.span
              initial={{ x: 100, scale: 0 }}
              animate={{ x: 0, scale: 1 }}
              transition={{ duration: 0.7 }}
            >
              U
            </motion.span>
            <motion.span
              initial={{ x: 60, scale: 0 }}
              animate={{ x: 0, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              A
            </motion.span>
            <motion.span
              initial={{ x: 60, scale: 0 }}
              animate={{ x: 0, scale: 1 }}
              transition={{ duration: 0.9 }}
            >
              R
            </motion.span>
            <motion.span
              initial={{ x: 60, scale: 0 }}
              animate={{ x: 0, scale: 1 }}
              transition={{ duration: 1 }}
            >
              Y
            </motion.span>
          </h1>
        </div>
        {/*<div*/}
        {/*  className= "text-white h-screen w-full flex md:flex-row flex-col justify-around  pr-20 pl-20 pb-16 items-center "*/}

        {/*>*/}
        {/*  <div className="">*/}
        {/*    <div className="mb-5">*/}
        {/*      <p className="font-semibold text-3xl">*/}
        {/*        Hey, would you like to learn how to create a <span className="text-transparent bg-clip-text bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-green-300 via-blue-500 to-purple-600 mb-2 cursor-pointer"></span>generative UI just*/}
        {/*        like this?*/}
        {/*      </p>*/}
        {/*    </div>*/}
        {/*    <div className="mb-5">*/}
        {/*      <p className=" text-gray-500 text-md pb-2 font-semibold hover:text-transparent bg-clip-text bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-green-300 via-blue-500 to-purple-600 mb-2 cursor-pointer">*/}
        {/*        In this tutorial we will be creating a generative orb animation*/}
        {/*        using pixi.js, picking some lovely random colors and pulling it*/}
        {/*        all together in a nice frosty UI. We are gonna talk accessibility,*/}
        {/*        too.*/}
        {/*      </p>*/}
        {/*    </div>*/}
        {/*    <div className="flex">*/}
        {/*      <Button*/}
        {/*        size="lg"*/}
        {/*        className="bg-gradient-to-r from-[#0A2E8F] via-[#0F498D] to-[#1A8589] mr-5 w-[30%] h-[2.5rem]"*/}
        {/*      >*/}
        {/*        View*/}
        {/*      </Button>*/}
        {/*      <Button*/}

        {/*        size="lg"*/}
        {/*        className="bg-gradient-to-r from-[#0A2E8F] via-[#0F498D] to-[#1A8589] */}
        {/*        */}
        {/*        mr-5 w-[30%]*/}
        {/*        h-[2.5rem]"*/}
        {/*        */}
        {/*      >*/}
        {/*        View*/}
        {/*      </Button>*/}
        {/*      */}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*  <div className="mt-1">*/}
        {/*    <Image*/}
        {/*      src={Logo}*/}
        {/*      width={700}*/}
        {/*      height={200}*/}
        {/*      alt="logo"*/}
        {/*      className="mr--5"*/}
        {/*    />*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
    </>
  );
};

export default Hero;
