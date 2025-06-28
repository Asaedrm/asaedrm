export interface CardStylesProps {
  frontend: cardContentProps;
  backend: cardContentProps;
}
export interface cardContentProps {
  card: string;
  title: string;
  titleHover?: string;
  subtitle?: string;
}
export const cardStyles: CardStylesProps = {
  frontend: {
    card: "relative z-10 w-full h-full flex flex-col items-center justify-center text-neutral-400 hover:text-white",
    title: `scroll-m-20 border-b-2 md:border-none  text-center xl:text-7xl lg:text-6xl md:text-5xl
    sm:text-3xl text-3xl font-extrabold tracking-tight text-balance cursor-pointer hover: bg-gradient-to-rhover:from-blue-500 
    hover:to-pink-500 hover:text-transparent hover:bg-clip-text`,
    titleHover: `bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text`,
    subtitle:
      "scroll-m-20 xl:text-2xl lg:text-xl md:text-lg sm:text-base font-semibold tracking-tight",
  },
  backend: {
    card: `relative z-10 w-full h-full bg-transparent border-none flex flex-col items-center justify-center text-neutral-400 hover:text-white`,
    title: `
            scroll-m-20 border-b-2 md:border-none text-center 
              xl:text-7xl lg:text-6xl md:text-5xl sm:text-3xl text-3xl 
              font-extrabold tracking-tight text-balance cursor-pointer 
              hover:bg-gradient-to-r hover:from-emerald-800 hover:to-sky-800 
              hover:text-transparent hover:bg-clip-text`,
    titleHover: `bg-gradient-to-r from-emerald-800 to-sky-800 text-transparent bg-clip-text`,
    subtitle: `scroll-m-20 xl:text-2xl lg:text-xl md:text-lg sm:text-base font-semibold tracking-tight`
  },
};
