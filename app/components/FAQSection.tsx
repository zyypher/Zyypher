"use client";

import { useState, useRef, useEffect } from "react";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const contentRef = useRef<(HTMLDivElement | null)[]>([]);

  const faqItems = [
    {
      question: "What is Zyypher?",
      answer:
        "Zyypher is a cutting-edge technology company specializing in innovative software solutions, helping businesses and individuals achieve their goals through state-of-the-art tools and platforms.",
    },
    {
      question: "What services does Zyypher offer?",
      answer:
        "Zyypher provides services such as web and mobile app development, AI-driven solutions, UI/UX design, and custom software tailored to meet specific business needs.",
    },
    {
      question: "How can Zyypher help my business?",
      answer:
        "Zyypher leverages the latest technology to streamline processes, enhance user experiences, and drive growth by delivering scalable and efficient solutions.",
    },
    {
      question: "Is Zyypher's support available 24/7?",
      answer:
        "Yes, Zyypher offers round-the-clock support to ensure that your projects and platforms operate seamlessly without any interruptions.",
    },
    {
      question: "How do I get started with Zyypher?",
      answer:
        "Getting started is easy. Simply contact our team through our website, and we'll guide you through every step of the process to bring your vision to life.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    if (openIndex !== null && contentRef.current[openIndex]) {
      contentRef.current[openIndex]!.style.maxHeight = `${contentRef.current[openIndex]?.scrollHeight}px`;
    }

    contentRef.current.forEach((ref, idx) => {
      if (idx !== openIndex && ref) {
        ref.style.maxHeight = "0px";
      }
    });
  }, [openIndex]);

  return (
    <section className="bg-black py-12 px-6">
      {/* Heading */}
      <div className="text-center mb-8">
        <p
          className="text-yellow-400 text-sm font-semibold uppercase tracking-wide"
          style={{
            color: "var(--extracted-r6o4lv, var(--token-9ba5df47-566d-4cce-965a-b909bddf5adc, rgb(221, 255, 0)))",
          }}
        >
          FAQs
        </p>
        <h2
          className="text-3xl font-light"
          style={{
            backgroundImage:
              "linear-gradient(24deg, rgb(255, 255, 247) 0%, rgba(255, 255, 247, 0.34) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          We've got the answers
        </h2>
      </div>

      {/* Accordion */}
      <div className="max-w-4xl mx-auto">
        {faqItems.map((item, index) => (
          <div key={index} className="mb-4">
            {/* Question */}
            <div
              className="flex justify-between items-center px-6 py-4 cursor-pointer"
              onClick={() => toggleAccordion(index)}
              style={{
                color: "var(--extracted-r6o4lv, rgb(204, 204, 204))",
              }}
            >
              <span className="text-[20px] font-normal">{item.question}</span>
              <div
                className={`flex items-center justify-center ${
                  openIndex === index ? "rotate-45" : "rotate-0"
                } transition-transform duration-300`}
              >
                <div
                  className="w-[16px] h-[4px] rounded bg-gray-500"
                  style={{
                    backgroundColor:
                      openIndex === index
                        ? "var(--token-9ba5df47-566d-4cce-965a-b909bddf5adc, rgb(204, 204, 204))"
                        : "var(--token-54c8d112-e98c-4c28-a1c4-62f708e15205, rgb(122, 122, 122))",
                  }}
                ></div>
                <div
                  className="w-[4px] h-[16px] rounded bg-gray-500 absolute"
                  style={{
                    backgroundColor:
                      openIndex === index
                        ? "var(--token-9ba5df47-566d-4cce-965a-b909bddf5adc, rgb(204, 204, 204))"
                        : "var(--token-54c8d112-e98c-4c28-a1c4-62f708e15205, rgb(122, 122, 122))",
                  }}
                ></div>
              </div>
            </div>

            {/* Answer */}
            <div
              ref={el => {
                contentRef.current[index] = el;
              }}
              className="overflow-hidden transition-all duration-500 ease-in-out"
              style={{
                color: "rgba(122, 122, 122, 0.9)",
              }}
            >
              <p className="px-6 text-[16px] font-normal">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
