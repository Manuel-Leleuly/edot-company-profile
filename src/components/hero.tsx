"use client";

import Image from "next/image";

export const Hero = () => {
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
            <div id="subtitle" className="inline-block">
              <span className="uppercase tracking-[0.2em] text-xs text-gray-500">
                Industry Leader Since 2010
              </span>
            </div>
            <h1
              id="heading"
              className="text-5xl md:text-6xl lg:text-7xl tracking-tight text-gray-900 leading-[1.1]"
            >
              Innovating
              <br />
              <span className="italic">Tomorrow's</span>
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
              <div>
                <div className="text-4xl text-gray-900 mb-1">500+</div>
                <div className="text-sm uppercase tracking-wider text-gray-500">
                  Clients Worldwide
                </div>
              </div>
              <div>
                <div className="text-4xl text-gray-900 mb-1">15+</div>
                <div className="text-sm uppercase tracking-wider text-gray-500">
                  Years Experience
                </div>
              </div>
              <div>
                <div className="text-4xl text-gray-900 mb-1">98%</div>
                <div className="text-sm uppercase tracking-wider text-gray-500">
                  Satisfaction
                </div>
              </div>
            </div>
          </div>
          <div id="image" className="relative lg:ml-auto">
            <div className="relative overflow-hidden">
              <div id="imageInner">
                <Image
                  src="/images/headquarter.jpg"
                  fill
                  alt="TechVision Corporation Headquarters"
                  className="w-full h-auto aspect-[3/4] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
