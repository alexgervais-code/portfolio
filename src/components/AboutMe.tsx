"use client";

import Image from "next/image";
import { useState, useRef } from "react";

export default function AboutMe() {
  const [toastPhase, setToastPhase] = useState<"hidden" | "in" | "out">("hidden");
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);

  function copyEmail() {
    navigator.clipboard.writeText("alexgervais.ui@gmail.com").then(() => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setToastPhase("in");
      timeoutRef.current = setTimeout(() => {
        setToastPhase("out");
        timeoutRef.current = setTimeout(() => setToastPhase("hidden"), 400);
      }, 1800);
    });
  }

  return (
    <div className="bg-[#f7faff] border border-[#c8dbff] rounded-[28px] overflow-hidden p-[42px]">
      <div className="grid grid-cols-[55%_45%] gap-8">
        {/* Bio */}
        <div className="flex flex-col gap-[18px]">
          <h2 className="font-semibold text-[#0057f9] text-lg leading-[1.494]">
            About Me 👋
          </h2>
          <p className="text-[#346bed] text-[15px] leading-[1.401]">
            I&apos;ve been a product designer for ~10 years, and have experience
            designing for <em>healthcare</em>, <em>media</em>,{" "}
            <em>wearables</em>, and <em>SaaS</em>. I studied <em>design</em>{" "}
            and <em>full stack web development</em>, was a <em>founder</em> in
            two companies, and briefly taught programming at a college.
          </p>
          <p className="text-[#346bed] text-[15px] leading-[1.401]">
            I think the best way to do great design is by being obsessive about
            the details, being kind, and being open to ideas from anyone.
          </p>
          <div className="flex items-baseline gap-3">
            <p className="text-[#346bed] text-[15px] leading-[1.494] font-semibold">
              Reach out →{" "}
              <span className="font-normal">alexgervais.ui@gmail.com</span>
            </p>
            <div className="relative self-center translate-y-[2px]">
              <button
                onClick={copyEmail}
                aria-label="Copy email address"
                className="shrink-0 hover:opacity-70 transition-opacity text-[#0057f9]"
              >
                <Image
                  src={
                    toastPhase !== "hidden"
                      ? "/images/icons/check_icon.svg"
                      : "/images/icons/copy_icon_for_about_section.svg"
                  }
                  alt=""
                  width={16}
                  height={16}
                />
              </button>
              {toastPhase !== "hidden" && (
                <div
                  className="absolute bottom-full left-1/2 bg-black text-white text-base rounded-xl px-4 py-2 whitespace-nowrap pointer-events-none"
                  style={{
                    animation:
                      toastPhase === "in"
                        ? "toast-pop 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards"
                        : "toast-fade 0.25s ease-in forwards",
                  }}
                >
                  Email copied
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Interests */}
        <div className="pt-[45px]">
          <h3 className="font-semibold text-[#346bed] text-[15px] leading-[1.494] mb-3">
            Some things I love
          </h3>
          <ul className="flex flex-col gap-1">
            <li className="list-disc ml-5 text-[#346bed] text-sm leading-[1.494]">
              Books (
              <a
                href="https://www.goodreads.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium inline-flex items-center gap-[3px] border-b border-dashed border-[#9ab8ff] pb-0 leading-tight"
              >
                My Goodreads
                <span className="relative inline-block size-[12px] shrink-0">
                  <Image
                    src="/images/icons/arrow_pointer_icon_for_links.svg"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </span>
              </a>
              ) 📚
            </li>
            <li className="gordon-line list-disc ml-5 text-[#346bed] text-sm leading-[1.494] cursor-default">
              <span className="inline-flex items-center gap-1">
                <span className="border-b border-dashed border-[#9ab8ff] pb-0 leading-tight">Cooking Competition Shows</span>
                <Image
                  src="/images/gordon.png"
                  alt=""
                  height={14}
                  width={20}
                  className="gordon-img object-contain rounded-sm shrink-0 -translate-y-[2px]"
                />
              </span>
            </li>
            <li className="list-disc ml-5 text-[#346bed] text-sm leading-[1.494]">
              Film 🎥
            </li>
            <li className="list-disc ml-5 text-[#346bed] text-sm leading-[1.494]">
              Sushi 🍣
            </li>
            <li className="list-disc ml-5 text-[#346bed] text-sm leading-[1.494]">
              <span className="inline-flex items-center gap-1">
                One Piece
                <Image
                  src="/images/one_piece_logo_about_section.png"
                  alt=""
                  height={10}
                  width={24}
                  className="object-contain shrink-0"
                />
              </span>
            </li>
            <li className="list-disc ml-5 text-[#346bed] text-sm leading-[1.494]">
              Gaming 🕹️
            </li>
          </ul>
        </div>
      </div>

    </div>
  );
}
