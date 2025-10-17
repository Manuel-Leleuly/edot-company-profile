"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import Image from "next/image";
import { useEffect, useState } from "react";

export const Hero = () => {
  useGSAP(() => {
    const subtitleSplit = new SplitText("#subtitle", { type: "chars" });
    const headingSplit = new SplitText("#heading", { type: "lines" });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "top center",
      },
    });

    timeline
      .from(subtitleSplit.chars, {
        opacity: 0,
        yPercent: 100,
        duration: 0.5,
        ease: "expo.out",
        stagger: 0.06,
      })
      .from(
        headingSplit.lines,
        {
          opacity: 0,
          yPercent: 100,
          duration: 1.8,
          ease: "expo.out",
          stagger: 0.06,
        },
        "<"
      )
      .from(
        "#content",
        {
          opacity: 0,
          yPercent: 100,
          duration: 1,
          ease: "expo.out",
        },
        "<"
      )
      .from(
        ".stats",
        {
          opacity: 0,
          yPercent: 100,
          duration: 1,
          ease: "expo.out",
        },
        "<"
      )
      .from(
        "#image",
        {
          opacity: 0,
          x: 200,
          duration: 1,
          ease: "expo.out",
        },
        "<"
      );
  });

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-white py-24 md:py-40"
    >
      <div
        id="background"
        className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-gray-100 to-gray-50 rounded-full opacity-50 blur-3xl pointer-events-none"
        style={{ transform: "translate(30%, -30%)" }}
      />

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
          <div className="space-y-8">
            <div
              id="subtitle"
              className="inline-block uppercase tracking-[0.2em] text-xs text-gray-500"
            >
              Industry Leader Since 2025
            </div>
            <h1
              id="heading"
              className="text-5xl md:text-6xl lg:text-7xl tracking-tight text-gray-900 leading-[1.1]"
            >
              Innovating
              <br />
              <span className="italic">Tomorrow&lsquo;s</span>
              <br />
              Solutions Today
            </h1>
            <div
              id="content"
              className="space-y-6 text-gray-600 leading-relaxed max-w-xl"
            >
              <p className="text-xl">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laboriosam minus, reprehenderit laborum ducimus unde facere
                ipsam, enim, molestias impedit iure et tempore esse harum saepe
                neque sequi. Optio, error ipsum.
              </p>
              <p className="text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita rem veniam, laudantium eveniet laborum eos odio,
                tempore quaerat harum enim asperiores officia adipisci molestias
                officiis similique aspernatur. Excepturi, aliquam nostrum?
              </p>
            </div>
            <div
              id="stats"
              className="flex flex-wrap gap-8 pt-8 border-t border-gray-200"
            >
              <div className="stats">
                <div className="text-4xl text-gray-900 mb-1">
                  <IncrementalNumber value={500} symbol="+" />
                </div>
                <div className="text-sm uppercase tracking-wider text-gray-500">
                  Clients Worldwide
                </div>
              </div>
              <div className="stats">
                <div className="text-4xl text-gray-900 mb-1">
                  <IncrementalNumber value={15} symbol="+" />
                </div>
                <div className="text-sm uppercase tracking-wider text-gray-500">
                  Years Experience
                </div>
              </div>
              <div className="stats">
                <div className="text-4xl text-gray-900 mb-1">
                  <IncrementalNumber value={98} symbol="%" />
                </div>
                <div className="text-sm uppercase tracking-wider text-gray-500">
                  Satisfaction
                </div>
              </div>
            </div>
          </div>
          <div
            id="image"
            className="relative w-full h-full lg:ml-auto overflow-hidden rounded-xl"
          >
            <Image
              src="/images/skyscraper.jpg"
              fill
              alt="TechVision Corporation Headquarters"
              className="w-full h-auto aspect-[3/4] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// helper
const IncrementalNumber = ({
  value,
  symbol,
}: {
  value: number;
  symbol: string;
}) => {
  const [currVal, setCurrVal] = useState(0);

  useEffect(() => {
    const incrementInterval = setInterval(() => {
      setCurrVal((prevVal) => prevVal + 1);
    }, 1000 / value);

    if (currVal >= value) {
      clearInterval(incrementInterval);
      return;
    }

    return () => clearInterval(incrementInterval);
  }, [currVal]);

  return (
    <>
      {currVal}
      {symbol}
    </>
  );
};
