"use client";

import { useState } from "react";
import Image, { type StaticImageData } from "next/image";

import Logo from "@/media/Logo.png";
import Security from "@/media/Security.png";
import Baker from "@/media/TONE.png";
import Kitchen from "@/media/Kitchen.png";
import KitchenDark from "@/media/kitchendark.png";
import Butchery from "@/media/Butchery.png";
import Cashier from "@/media/Cashier.png";
import MainScene from "@/media/Main.png";
import Warehouse from "@/media/Warehouse.png";
import WarehouseDark from "@/media/warehousedark.png";
import Delivery from "@/media/Delivery.png";
import DayModeToggle from "@/media/WhiteModeLogo.png";
import NightModeToggle from "@/media/DarkModeLogo.png";
import SecurityHover from "@/media/securityhover.png";
import SecurityHoverDark from "@/media/securityhoverdark.png";
import BakerHover from "@/media/tonehover.png";
import BakerHoverDark from "@/media/tonehoverdark.png";
import KitchenHover from "@/media/kitchenhover.png";
import KitchenHoverDark from "@/media/kitchenhoverdark.png";
import ButcheryHover from "@/media/butcheryhover.png";
import ButcheryHoverDark from "@/media/butcheryhoverdark.png";
import CashierHover from "@/media/cashierhover.png";
import CashierHoverDark from "@/media/cashierhoverdark.png";
import MainSceneHover from "@/media/mainhover.png";
import MainSceneHoverDark from "@/media/mainhoverdark.png";
import WarehouseHover from "@/media/warehousehover.png";
import WarehouseHoverDark from "@/media/warehousehoverdark.png";
import DeliveryHover from "@/media/deliveryhover.png";
import DeliveryHoverDark from "@/media/deliveryhoverdark.png";
import SecurityCard from "@/media/SecurityCard.png";
import BakeryCard from "@/media/BakeryCard.png";
import KitchenCard from "@/media/KitchenCard.png";
import ButcheryCard from "@/media/ButcheryCard.png";
import CashierCard from "@/media/CashierCard.png";
import ServiceCard from "@/media/ServiceCard.png";
import WarehouseCard from "@/media/WarehouseCard.png";

const HEADLINE =
  "\u10e0\u10dd\u10db\u10d4\u10da\u0020\u10e1\u10d4\u10e5\u10ea\u10d8\u10d0\u10e8\u10d8\u0020\u10d2\u10e1\u10e3\u10e0\u10e1\u0020\u10d3\u10d0\u10e1\u10d0\u10e5\u10db\u10d4\u10d1\u10d0\u003f";

type HeroItem = {
  id: string;
  lightSrc: StaticImageData;
  darkSrc?: StaticImageData;
  hoverLightSrc: StaticImageData;
  hoverDarkSrc?: StaticImageData;
  alt: string;
  desktopClass: string;
  mobileClass: string;
  card?: {
    image: StaticImageData;
    heading: string;
    points: string[];
  };
};

const heroItems: HeroItem[] = [
  {
    id: "security",
    lightSrc: Security,
    hoverLightSrc: SecurityHover,
    hoverDarkSrc: SecurityHoverDark,
    alt: "Security guard standing near a store entrance",
    desktopClass: "left-[12%] top-[24%] w-[16%]",
    mobileClass: "left-[6%] top-[18%] w-[46%]",
    card: {
      image: SecurityCard,
      heading: "\u10d3\u10d0\u10ea\u10d5\u10d0",
      points: ["\u10d3\u10d0\u10ea\u10d5\u10d8\u10e1 \u10d7\u10d0\u10dc\u10d0\u10db\u10e9\u10dd\u10e0\u10d4\u10d1\u10da\u10d8"],
    },
  },
  {
    id: "baker",
    lightSrc: Baker,
    hoverLightSrc: BakerHover,
    hoverDarkSrc: BakerHoverDark,
    alt: "Baker preparing fresh bread",
    desktopClass: "left-[33%] top-[20%] w-[14%]",
    mobileClass: "left-[58%] top-[78%] w-[32%]",
    card: {
      image: BakeryCard,
      heading: "\u10e1\u10d0\u10ee\u10d4\u10da\u10d1\u10d8",
      points: [
        "\u10de\u10d0\u10e0-\u10e4\u10d4\u10e0\u10db\u10d4\u10dc\u10e2\u10db\u10d4\u10da\u10d8 \u10db\u10d7\u10e1\u10dd\u10d1\u10d0\u10eb\u10d4",
        "\u10d7\u10dd\u10dc\u10d8\u10e1 \u10de\u10e3\u10e0\u10d8\u10e1 \u10db\u10d7\u10e1\u10dd\u10d1\u10d0\u10eb\u10d4",
        "\u10ee\u10d0\u10d7\u10d0\u10db\u10e0\u10d8\u10e1 \u10db\u10d7\u10e1\u10dd\u10d1\u10d0\u10eb\u10d4",
      ],
    },
  },
  {
    id: "kitchen",
    lightSrc: Kitchen,
    darkSrc: KitchenDark,
    hoverLightSrc: KitchenHover,
    hoverDarkSrc: KitchenHoverDark,
    alt: "Prepared food station inside a kitchen",
    desktopClass: "left-[50%] top-[22%] w-[17%]",
    mobileClass: "left-[44%] top-[26%] w-[48%]",
    card: {
      image: KitchenCard,
      heading: "\u10e1\u10d0\u10db\u10d6\u10d0\u10e0\u10e3\u10da\u10dd",
      points: [
        "\u10e1\u10e2\u10e3\u10db\u10d8 \u10db\u10e3\u10e0\u10d8\u10e1 \u10db\u10e7\u10d0\u10e0\u10d8",
        "\u10ea\u10d8\u10e2\u10d8 \u10d4\u10e0\u10d3\u10d6\u10d8\u10e1 \u10db\u10e7\u10d0\u10e0\u10d8",
        "\u10db\u10e1\u10ee\u10d4\u10d5\u10e0\u10d4\u10e3\u10da\u10d8\u10e1 \u10d3\u10d0\u10e1\u10d0\u10d1\u10d0\u10e0\u10d4",
        "\u10e1\u10d0\u10da\u10d8 \u10db\u10d6\u10d0\u10d0\u10d1\u10e0\u10d0\u10d3\u10d8",
        "\u10d9\u10dd\u10dd\u10e0\u10d3\u10d8\u10dc\u10d0\u10e2\u10dd\u10e0\u10d8",
        "\u10de\u10dd\u10ec\u10dc\u10d8\u10e1 \u10db\u10d6\u10d0\u10d0\u10db\u10d0\u10e0\u10d4\u10d1\u10df\u10d4",
        "\u10d8\u10dc\u10d4\u10e0\u10d7\u10e3\u10da\u10d8 \u10ec\u10dd\u10dc\u10d8\u10e1 \u10e1\u10d4\u10e0\u10d5\u10d8\u10e1\u10d9\u10dd\u10dc\u10e1\u10d8\u10da\u10d8\u10d7\u10d8",
      ],
    },
  },
  {
    id: "butchery",
    lightSrc: Butchery,
    hoverLightSrc: ButcheryHover,
    hoverDarkSrc: ButcheryHoverDark,
    alt: "Butcher working at a meat station",
    desktopClass: "left-[72%] top-[16%] w-[14%]",
    mobileClass: "left-[70%] top-[32%] w-[30%]",
    card: {
      image: ButcheryCard,
      heading: "\u10e1\u10d0\u10ee\u10e8\u10dd\u10d1\u10d8",
      points: [
        "\u10d7\u10d5\u10d8\u10e1\u10d8\u10e1 \u10dc\u10d0\u10e8\u10d0\u10d3\u10d0\u10d1\u10d8",
        "\u10ee\u10dd\u10e0\u10ea\u10d8\u10e1 \u10dc\u10d0\u10e8\u10d0\u10d3\u10d0\u10d1\u10d8",
      ],
    },
  },
  {
    id: "cashier",
    lightSrc: Cashier,
    hoverLightSrc: CashierHover,
    hoverDarkSrc: CashierHoverDark,
    alt: "Cashier operating a point-of-sale terminal",
    desktopClass: "left-[22%] top-[46%] w-[18%]",
    mobileClass: "left-[10%] top-[64%] w-[38%]",
    card: {
      image: CashierCard,
      heading: "\u10e1\u10d0\u10da\u10d0\u10e0\u10d4",
      points: [
        "\u10db\u10da\u10d0\u10e0\u10d8",
        "\u10da\u10d0\u10e1\u10d8\u10e1 \u10ea\u10e7\u10da\u10d8\u10e1 \u10db\u10da\u10d0\u10e0\u10d8",
      ],
    },
  },
  {
    id: "service",
    lightSrc: MainScene,
    hoverLightSrc: MainSceneHover,
    hoverDarkSrc: MainSceneHoverDark,
    alt: "Employee organizing products on shelves",
    desktopClass: "left-[34%] top-[42%] w-[44%]",
    mobileClass: "left-[28%] top-[42%] w-[58%]",
    card: {
      image: ServiceCard,
      heading: "\u10e1\u10d4\u10e0\u10d5\u10d8\u10e1\u10d8",
      points: [
        "\u10d9\u10dd\u10dc\u10e1\u10e3\u10da\u10e2\u10d0\u10dc\u10e2\u10d8",
        "\u10da\u10d0\u10e1\u10d8 \u10ea\u10d5\u10d4\u10da\u10d8\u10e1 \u10d9\u10dd\u10dc\u10e1\u10e3\u10da\u10e2\u10d0\u10dc\u10e2\u10d8",
        "\u10db\u10d8\u10d7\u10d0\u10dc\u10d8\u10e1 \u10e1\u10d4\u10e0\u10d5\u10d8\u10e1\u10d8\u10e1 \u10d9\u10dd\u10dc\u10e1\u10e3\u10da\u10e2\u10d0\u10dc\u10e2\u10d8",
      ],
    },
  },
  {
    id: "warehouse",
    lightSrc: Warehouse,
    darkSrc: WarehouseDark,
    hoverLightSrc: WarehouseHover,
    hoverDarkSrc: WarehouseHoverDark,
    alt: "Warehouse worker moving packaged goods",
    desktopClass: "left-[70%] top-[57%] w-[22%]",
    mobileClass: "left-[64%] top-[56%] w-[32%]",
    card: {
      image: WarehouseCard,
      heading: "\u10e1\u10d0\u10d2\u10e7\u10dd\u10d1\u10d8",
      points: [
        "\u10e1\u10d0\u10ec\u10ee\u10d8\u10e1 \u10d7\u10d0\u10dc\u10d0\u10e8\u10dd\u10db\u10d4\u10da\u10d8",
        "\u10ef\u10e7\u10e3\u10d1\u10d8\u10e1 \u10d3\u10d0\u10db\u10ec\u10db\u10d4\u10d1\u10d4\u10e0\u10d8 \u10d7\u10d0\u10dc\u10d0\u10e8\u10dd\u10db\u10d4\u10da\u10d8",
      ],
    },
  },
  {
    id: "delivery",
    lightSrc: Delivery,
    hoverLightSrc: DeliveryHover,
    hoverDarkSrc: DeliveryHoverDark,
    alt: "Delivery courier arriving on a scooter",
    desktopClass: "left-[10%] top-[62%] w-[18%]",
    mobileClass: "left-[12%] top-[48%] w-[42%]",
  },
];

export default function Home() {
  const [activeCard, setActiveCard] = useState<HeroItem | null>(null);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const activeCardData = activeCard?.card;
  const isDarkTheme = theme === "dark";

  return (
    <div className="flex min-h-screen flex-col bg-[#E4E3E3]">
      <header className="flex flex-wrap items-center justify-evenly gap-4 bg-[#1DA94A] px-8 py-5 text-white shadow-[0_6px_18px_rgba(0,0,0,0.1)]">
        <div className="flex items-center justify-center">
          <Image
            src={Logo}
            alt="Jobs supermarket logo"
            className="h-12 w-auto"
            priority
          />
        </div>
        <h1 className="max-w-[38rem] text-center text-xl font-semibold tracking-wide sm:text-2xl md:text-3xl">
          {HEADLINE}
        </h1>
        <div className="flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => setTheme("light")}
            className={`cursor-pointer rounded-full border-0 bg-transparent p-0 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${isDarkTheme ? "opacity-70" : "opacity-100"}`}
            aria-label="Enabled day mode"
            aria-pressed={!isDarkTheme}
          >
            <Image src={DayModeToggle} alt="" className="h-10 w-auto" priority />
          </button>
          <button
            type="button"
            onClick={() => setTheme("dark")}
            className={`cursor-pointer rounded-full border-0 bg-transparent p-0 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${isDarkTheme ? "opacity-100" : "opacity-70"}`}
            aria-label="Enabled night mode"
            aria-pressed={isDarkTheme}
          >
            <Image src={NightModeToggle} alt="" className="h-10 w-auto" priority />
          </button>
        </div>
      </header>

      <main
        className="flex flex-1 items-start justify-center px-4 pt-0 pb-6 lg:pb-8"
        style={
          isDarkTheme
            ? { background: "linear-gradient(180deg, #363264 0%, #201C49 100%)" }
            : undefined
        }
      >
        <div className="flex w-full max-w-[1280px] flex-col items-center">
          <div
            className={`relative hidden w-full overflow-hidden rounded-[48px] shadow-[0_12px_40px_rgba(0,0,0,0.08)] lg:block ${
              isDarkTheme ? "" : "bg-[#dedddd]"
            }`}
            style={
              isDarkTheme
                ? { background: "linear-gradient(180deg, #363264 0%, #201C49 100%)" }
                : undefined
            }
          >
            <div className="relative aspect-[1365/768] w-full">
              {heroItems.map((item) => {
                const baseImage =
                  isDarkTheme && item.darkSrc ? item.darkSrc : item.lightSrc;
                const hoverImage =
                  isDarkTheme && item.hoverDarkSrc
                    ? item.hoverDarkSrc
                    : item.hoverLightSrc;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => item.card && setActiveCard(item)}
                    className={`group absolute ${item.desktopClass} border-0 bg-transparent p-0 ${item.card ? "cursor-pointer" : "cursor-default"}`}
                    aria-label={
                      item.card
                        ? `${item.card.heading} ვაკანსიის დეტალები`
                        : undefined
                    }
                    disabled={!item.card}
                  >
                    <Image
                      src={baseImage}
                      alt={item.alt}
                      className="h-auto w-full transition-opacity duration-200 group-hover:opacity-0"
                      priority={item.id === "service"}
                    />
                    <Image
                      src={hoverImage}
                      alt=""
                      className="absolute left-0 top-0 h-auto w-full opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                      aria-hidden
                    />
                  </button>
                );
              })}
            </div>
          </div>

          <div
            className="relative mt-2 w-full max-w-[22rem] overflow-hidden rounded-[32px] border border-black/5 aspect-[9/16] lg:hidden"
            style={
              isDarkTheme
                ? { background: "linear-gradient(180deg, #363264 0%, #201C49 100%)" }
                : { background: "#dedddd" }
            }
          >
            {heroItems.map((item) => (
              <button
                key={`${item.id}-mobile`}
                type="button"
                onClick={() => item.card && setActiveCard(item)}
                className={`absolute ${item.mobileClass} border-0 bg-transparent p-0 ${item.card ? "cursor-pointer" : "cursor-default"}`}
                aria-label={
                  item.card
                    ? `${item.card.heading} ვაკანსიის დეტალები`
                    : undefined
                }
                disabled={!item.card}
              >
                <Image
                  src={
                    isDarkTheme && item.darkSrc ? item.darkSrc : item.lightSrc
                  }
                  alt={item.alt}
                  className="h-auto w-full"
                />
              </button>
            ))}
          </div>
        </div>
      </main>
      {activeCardData && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={() => setActiveCard(null)}
        >
          <div
            className="relative w-[min(338px,90vw)]"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={activeCardData.image}
              alt={`${activeCardData.heading} ვაკანსიის ბარათი`}
              className="h-auto w-full"
              priority
            />
            <button
              type="button"
              onClick={() => setActiveCard(null)}
              className="cursor-pointer absolute right-4 top-4 h-8 w-8 rounded-full border border-transparent bg-transparent"
              aria-label="დახურვა"
            />
            <button
              type="button"
              className="absolute bottom-4 left-1/2 w-[50%] -translate-x-1/2 rounded-full bg-[#1DA94A] py-3 text-base font-semibold text-white shadow transition hover:bg-[#17853a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              onClick={() => {}}
            >
              გაგზავნა
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
