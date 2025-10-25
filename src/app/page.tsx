"use client";

import { useState } from "react";
import Image, { type StaticImageData } from "next/image";

import Logo from "@/media/Logo.png";
import Security from "@/media/Security.png";
import SecurityMobile from "@/media/SecurityMobile.png";
import Baker from "@/media/TONE.png";
import BakerMobile from "@/media/TONEMobile.png";
import Kitchen from "@/media/Kitchen.png";
import KitchenMobile from "@/media/KitchenMobile.png";
import KitchenDark from "@/media/kitchendark.png";
import Butchery from "@/media/Butchery.png";
import ButcheryMobile from "@/media/ButcheryMobile.png";
import Cashier from "@/media/Cashier.png";
import CashierMobile from "@/media/CashierMobile.png";
import MainScene from "@/media/Main.png";
import MainMobile from "@/media/MainMobile.png";
import Warehouse from "@/media/Warehouse.png";
import WarehouseMobile from "@/media/WarehouseMobile.png";
import WarehouseDark from "@/media/warehousedark.png";
import Delivery from "@/media/Delivery.png";
import CourierMobile from "@/media/CourierMobile.png";
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
import SecurityHoverMobile from "@/media/securityhoverMobile.png";
import BakerHoverMobile from "@/media/tonehoverMobile.png";
import KitchenHoverMobile from "@/media/kitchenhoverMobile.png";
import ButcheryHoverMobile from "@/media/butcheryhoverMobile.png";
import CashierHoverMobile from "@/media/cashierhoverMobile.png";
import MainHoverMobile from "@/media/mainhoverMobile.png";
import WarehouseHoverMobile from "@/media/warehousehoverMobile.png";
import DeliveryHoverMobile from "@/media/deliveryhoverMobile.png";
import SecurityHoverMobileDark from "@/media/securityhoverMobileDark.png";
import BakerHoverMobileDark from "@/media/tonehoverMobileDark.png";
import KitchenHoverMobileDark from "@/media/kitchenhoverMobileDark.png";
import ButcheryHoverMobileDark from "@/media/butcheryhoverMobileDark.png";
import CashierHoverMobileDark from "@/media/cashierhoverMobileDark.png";
import MainHoverMobileDark from "@/media/mainhoverMobileDark.png";
import WarehouseHoverMobileDark from "@/media/warehousehoverMobileDark.png";
import DeliveryHoverMobileDark from "@/media/deliveryhoverMobileDark.png";
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
  mobileLightSrc: StaticImageData;
  mobileDarkSrc?: StaticImageData;
  mobileHoverLightSrc?: StaticImageData;
  mobileHoverDarkSrc?: StaticImageData;
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
    darkSrc: Security,
    hoverLightSrc: SecurityHover,
    hoverDarkSrc: SecurityHoverDark,
    alt: "Security guard standing near a store entrance",
    desktopClass: "left-[12%] top-[24%] w-[16%]",
    mobileLightSrc: SecurityMobile,
    mobileHoverLightSrc: SecurityHoverMobile,
    mobileHoverDarkSrc: SecurityHoverMobileDark,
    mobileClass: "left-[3%] top-[8%] w-[34%]",
    card: {
      image: SecurityCard,
      heading: "\u10d3\u10d0\u10ea\u10d5\u10d0",
      points: ["\u10d3\u10d0\u10ea\u10d5\u10d8\u10e1 \u10d7\u10d0\u10dc\u10d0\u10db\u10e9\u10dd\u10e0\u10d4\u10d1\u10da\u10d8"],
    },
  },
  {
    id: "baker",
    lightSrc: Baker,
    darkSrc: Baker,
    hoverLightSrc: BakerHover,
    hoverDarkSrc: BakerHoverDark,
    alt: "Baker preparing fresh bread",
    desktopClass: "left-[33%] top-[20%] w-[14%]",
    mobileLightSrc: BakerMobile,
    mobileHoverLightSrc: BakerHoverMobile,
    mobileHoverDarkSrc: BakerHoverMobileDark,
    mobileClass: "left-[37%] top-[52%] w-[30%]",
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
    mobileLightSrc: KitchenMobile,
    mobileHoverLightSrc: KitchenHoverMobile,
    mobileHoverDarkSrc: KitchenHoverMobileDark,
    mobileClass: "left-[42%] top-[8%] w-[38%]",
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
    darkSrc: Butchery,
    hoverLightSrc: ButcheryHover,
    hoverDarkSrc: ButcheryHoverDark,
    alt: "Butcher working at a meat station",
    desktopClass: "left-[72%] top-[16%] w-[14%]",
    mobileLightSrc: ButcheryMobile,
    mobileHoverLightSrc: ButcheryHoverMobile,
    mobileHoverDarkSrc: ButcheryHoverMobileDark,
    mobileClass: "left-[75%] top-[14%] w-[23%]",
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
    darkSrc: Cashier,
    hoverLightSrc: CashierHover,
    hoverDarkSrc: CashierHoverDark,
    alt: "Cashier operating a point-of-sale terminal",
    desktopClass: "left-[22%] top-[46%] w-[18%]",
    mobileLightSrc: CashierMobile,
    mobileHoverLightSrc: CashierHoverMobile,
    mobileHoverDarkSrc: CashierHoverMobileDark,
    mobileClass: "left-[4%] top-[50%] w-[32%]",
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
    darkSrc: MainScene,
    hoverLightSrc: MainSceneHover,
    hoverDarkSrc: MainSceneHoverDark,
    alt: "Employee organizing products on shelves",
    desktopClass: "left-[34%] top-[42%] w-[44%]",
    mobileLightSrc: MainMobile,
    mobileHoverLightSrc: MainHoverMobile,
    mobileHoverDarkSrc: MainHoverMobileDark,
    mobileClass: "left-[28%] top-[28%] w-[55%]",
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
    mobileLightSrc: WarehouseMobile,
    mobileHoverLightSrc: WarehouseHoverMobile,
    mobileHoverDarkSrc: WarehouseHoverMobileDark,
    mobileClass: "left-[64%] top-[38%] w-[35%]",
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
    darkSrc: Delivery,
    hoverLightSrc: DeliveryHover,
    hoverDarkSrc: DeliveryHoverDark,
    alt: "Delivery courier arriving on a scooter",
    desktopClass: "left-[10%] top-[62%] w-[18%]",
    mobileLightSrc: CourierMobile,
    mobileHoverLightSrc: DeliveryHoverMobile,
    mobileHoverDarkSrc: DeliveryHoverMobileDark,
    mobileClass: "left-[0%] top-[32%] w-[29%]",
  },
];

export default function Home() {
  const [activeCard, setActiveCard] = useState<HeroItem | null>(null);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const activeCardData = activeCard?.card;
  const isDarkTheme = theme === "dark";

  const logoElement = (
    <Image src={Logo} alt="Jobs supermarket logo" className="h-12 w-auto" priority />
  );

  const mobileThemeToggleButton = (
    <button
      type="button"
      onClick={() => setTheme(isDarkTheme ? "light" : "dark")}
      className="cursor-pointer rounded-full border-0 bg-transparent p-0 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      aria-label={isDarkTheme ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDarkTheme}
    >
      <Image
        src={isDarkTheme ? NightModeToggle : DayModeToggle}
        alt=""
        className="h-10 w-auto"
        priority
      />
    </button>
  );

  return (
    <div className="flex min-h-screen flex-col bg-[#E4E3E3]">
      <header className="bg-[#1DA94A] text-white shadow-[0_6px_18px_rgba(0,0,0,0.1)]">
        <div className="flex items-center justify-between px-4 py-4 lg:hidden">
          <div className="flex items-center">{logoElement}</div>
          {mobileThemeToggleButton}
        </div>
        <div className="hidden items-center justify-evenly gap-4 px-8 py-5 lg:flex">
          <div className="flex items-center justify-center">{logoElement}</div>
          <h1 className="max-w-[38rem] text-center text-3xl font-semibold tracking-wide">
            {HEADLINE}
          </h1>
          <div className="flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => setTheme("light")}
              className={`cursor-pointer rounded-full border-0 bg-transparent p-0 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${isDarkTheme ? "opacity-60" : "opacity-100"}`}
              aria-label="Switch to light mode"
              aria-pressed={!isDarkTheme}
            >
              <Image src={DayModeToggle} alt="" className="h-10 w-auto" priority />
            </button>
            <button
              type="button"
              onClick={() => setTheme("dark")}
              className={`cursor-pointer rounded-full border-0 bg-transparent p-0 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${isDarkTheme ? "opacity-100" : "opacity-60"}`}
              aria-label="Switch to dark mode"
              aria-pressed={isDarkTheme}
            >
              <Image src={NightModeToggle} alt="" className="h-10 w-auto" priority />
            </button>
          </div>
        </div>
      </header>

      <main
        className="flex flex-1 items-start justify-center px-0 pb-6 pt-0 sm:px-4 sm:pt-4 lg:pb-8"
        style={
          isDarkTheme
            ? { background: "linear-gradient(180deg, #363264 0%, #201C49 100%)" }
            : { background: "#dedddd" }
        }
      >
        <div className="flex w-full max-w-[1280px] flex-col items-stretch lg:items-center">
          <div className="px-4 pt-5 pb-3 lg:hidden">
            <h1
              className={`text-center text-2xl font-bold tracking-wide leading-tight sm:text-3xl md:text-4xl ${
                isDarkTheme ? "text-white" : "text-[#1DA94A]"
              }`}
            >
              {HEADLINE}
            </h1>
          </div>
          <div
            className="relative hidden w-full lg:block"
            style={
              isDarkTheme
                ? { background: "linear-gradient(180deg, #363264 0%, #201C49 100%)" }
                : { background: "#dedddd" }
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
            className="relative mt-0 w-full aspect-[9/16] lg:hidden"
            style={
              isDarkTheme
                ? { background: "linear-gradient(180deg, #363264 0%, #201C49 100%)" }
                : { background: "#dedddd" }
            }
          >
            {heroItems.map((item) => {
              const mobileBaseImage =
                isDarkTheme && item.mobileDarkSrc
                  ? item.mobileDarkSrc
                  : item.mobileLightSrc;
              const mobileHoverImage =
                isDarkTheme && item.mobileHoverDarkSrc
                  ? item.mobileHoverDarkSrc
                  : item.mobileHoverLightSrc ??
                    (isDarkTheme && item.hoverDarkSrc
                      ? item.hoverDarkSrc
                      : item.hoverLightSrc);
              const hasHoverImage = Boolean(mobileHoverImage);
              const isActive = activeCard?.id === item.id;
              return (
                <button
                  key={`${item.id}-mobile`}
                  type="button"
                  onClick={() => item.card && setActiveCard(item)}
                  className={`group absolute ${item.mobileClass} border-0 bg-transparent p-0 ${item.card ? "cursor-pointer" : "cursor-default"}`}
                  aria-label={
                    item.card
                      ? `${item.card.heading} ვაკანსიის დეტალები`
                      : undefined
                  }
                  disabled={!item.card}
                >
                  <Image
                    src={mobileBaseImage}
                    alt={item.alt}
                    className={`h-auto w-full transition-opacity duration-200 ${isActive ? "opacity-0" : "opacity-100"} ${hasHoverImage ? "group-hover:opacity-0" : ""}`}
                  />
                  {hasHoverImage && (
                    <Image
                      src={mobileHoverImage}
                      alt=""
                      className={`absolute left-0 top-0 h-auto w-full transition-opacity duration-200 ${isActive ? "opacity-100" : "opacity-0"} group-hover:opacity-100`}
                      aria-hidden
                    />
                  )}
                </button>
              );
            })}
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
