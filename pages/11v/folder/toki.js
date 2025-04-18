"use client";

import { useEffect } from "react";
import { useRouter } from 'next/navigation';

export default function Toki() {  
  useEffect(() => {
    document.querySelectorAll("[data-scroll-to]").forEach((item) => {
      item.addEventListener("click", () => {
        const targetId = item.getAttribute("data-scroll-to");
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        } else {
          console.error(`Element with ID ${targetId} not found`);
        }
      });
    });
  }, []);
  const router = useRouter();

  return (
    <div id="appbar" className="w-full">

      <div className="bg-white h-[80px] w-full flex items-center justify-between px-4 sm:px-10 md:px-20 sticky top-0 shadow-md z-50">
        <img
          className="w-[120px] sm:w-[100px] hover:scale-105 transition duration-300"
          src="https://www.toki.mn/wp-content/uploads/2022/08/Asset-1@3x.png"
          alt="Toki Logo"
          onClick={() => router.push('/')}
        />
        <div className="hidden sm:flex space-x-5 flex-wrap justify-end text-sm">
          <p className="text-black hover:text-orange-300 cursor-pointer" data-scroll-to="#section1">Үйлчилгээ</p>
          <p className="text-black hover:text-orange-300 cursor-pointer" data-scroll-to="#section2">Давуу тал</p>
          <p className="text-black hover:text-orange-300 cursor-pointer" data-scroll-to="#section3">Мэдээ</p>
          <p className="text-black hover:text-orange-300 cursor-pointer" data-scroll-to="#section4">Хамтран ажиллах</p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center bg-orange-100 w-full py-10 px-4 text-center">
        <p className="font-light text-black text-lg sm:text-xl mb-6">
          ХЭРЭГЦЭЭТ ҮЙЛЧИЛГЭЭ НЭГ ДООРООС...
        </p>
        <img
          className="w-full max-w-[300px] sm:max-w-[500px] mb-6"
          src="https://www.toki.mn/wp-content/uploads/2020/06/Artboard-1-2.png"
          alt="Toki Banner"
        />
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <img
            className="h-[50px] w-[180px] hover:scale-105 transition duration-300"
            src="https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg"
            alt="Download iOS"
          />
          <img
            className="h-[50px] w-[180px] hover:scale-105 transition duration-300"
            src="https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg"
            alt="Download iOS"
          />
        </div>
      </div>

      <div id="section1" className="bg-gray-100 w-full py-16 px-6 md:px-10 flex flex-col md:flex-row justify-center items-center gap-10">
        <img
          className="w-full max-w-[500px] rounded-lg shadow-lg"
          src="https://www.toki.mn/wp-content/uploads/2020/06/Artboard-2.png"
          alt="Toki Service"
        />
        <div className="text-left max-w-md">
          <h2 className="text-[#FBBF24] text-2xl font-semibold mb-4">Toki Service</h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            Та такси дуудах, кофе, хоол захиалах, нэгж дата авах, хэрэглээний
            төлбөрүүдээ төлөх, тоглоом тоглох, цэнэглэх гэх мэт өдөр бүрд хэрэгтэй
            үйлчилгээнүүдээ нэг дороос хялбар, хурдан авах боломжтой.
          </p>
        </div>
      </div>

      <div id="section2" className="bg-orange-100 w-full py-16 px-6 md:px-20 flex flex-col md:flex-row justify-center items-center gap-10">
        <div className="text-left md:text-right max-w-md">
          <h2 className="text-orange-300 text-2xl font-semibold mb-4">Toki Pay</h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            Toki Pay нь таны бодит хэтэвчийг цахимжуулсан цоо шинэ дижитал хэтэвч юм.
            Бүх банкны картаа холбож төлбөрөө төлөөд, лояалти карт болон бичиг
            баримтуудаа нэг дор хадгалаарай.
          </p>
        </div>
        <img
          className="w-full max-w-[500px] rounded-lg shadow-lg"
          src="https://www.toki.mn/wp-content/uploads/2020/06/Artboard-3.png"
          alt="Toki Pay"
        />
      </div>

      <div id="section3" className="bg-gray-100 w-full py-16 px-6 md:px-10 flex flex-col md:flex-row justify-center items-center gap-10">
        <img
          className="w-full max-w-[500px] rounded-lg shadow-md"
          src="https://www.toki.mn/wp-content/uploads/2020/06/Artboard-4.png"
          alt="Toki Shop"
        />
        <div className="text-left max-w-md">
          <h2 className="text-orange-300 text-2xl font-semibold mb-4">Toki Shop</h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            Та өөрийн хүссэн бараагаа албан ёсны дэлгүүрүүдээс сонголт хийж, нэг дороос
            шууд захиалах боломжтой.
          </p>
        </div>
      </div>

      <div id="section4" className="bg-white w-full py-16 px-4 flex flex-col justify-center items-center space-y-4 text-center">
        <p className="text-orange-300 text-xl sm:text-2xl font-semibold">
          Toki апп өдөр бүр танд тусална
        </p>
        <p className="text-gray-700 max-w-xl text-sm">
          Toki апп бол хүн бүрийн өдөр тутамд хэрэгтэй бүх үйлчилгээг нэг дор багтаасан
          таны цаг хугацааг хэмнэх хялбар, хэрэгтэй аппликейшн юм.
        </p>
      </div>

      <div className="bg-orange-100 w-full py-8 flex flex-col justify-center items-center">
        <div className="bg-amber-400 rounded-full px-8 py-2 font-bold cursor-pointer hover:bg-amber-300 transition duration-300 text-sm">
          ДАВУУ ТАЛ
        </div>
      </div>

      <div className="bg-black w-full py-8 px-6 sm:px-12 md:px-20 flex flex-col md:flex-row items-center justify-between text-xs space-y-4 md:space-y-0 text-center md:text-left">
        <img
          className="w-[80px] hover:scale-105 transition duration-300"
          src="https://www.toki.mn/wp-content/uploads/2022/08/Asset-1@3x.png"
          alt="Footer Logo"
        />
        <div className="text-gray-400 space-y-1">
          <p className="hover:text-orange-200 cursor-pointer">Түгээмэл асуулт</p>
          <p>Сүхбаатар дүүрэг, 8-р хороо, Сэнтрал Тауэр, 8-р давхар</p>
          <p>77074477, 4477 info@toki.mn</p>
          <p>Copyright © 2022 | Toki.mn</p>
        </div>
        <p className="text-gray-400 hover:text-orange-200 cursor-pointer">Нууцлал</p>
      </div>
    </div>
  );
}


