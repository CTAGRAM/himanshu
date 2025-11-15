"use client";

import Image from "next/image";

type VideoData = {
  src: string;
  alt: string;
  fromViews: string;
  toViews: string;
  increasePercent: number;
  comments: string;
  shares: string;
  likes: string;
};

const videoData: VideoData[] = [
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a93d8c77-2901-4b64-8e54-ce6f6469eefe-theclips-agency/assets/images/672b70289a5a99badc0f9951_Dr_20Dunia_20-_20Tourist_-1.gif",
    alt: "Video preview",
    fromViews: "40k",
    toViews: "100k+",
    increasePercent: 150,
    comments: "10k+",
    shares: "50k+",
    likes: "100k+"
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a93d8c77-2901-4b64-8e54-ce6f6469eefe-theclips-agency/assets/images/672b70140a505fc39767c232_Chris_20V_20-_20What_20ar-2.gif",
    alt: "Video preview",
    fromViews: "350k",
    toViews: "1+ Million",
    increasePercent: 185.7,
    comments: "100k+",
    shares: "50k+",
    likes: "267k+"
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a93d8c77-2901-4b64-8e54-ce6f6469eefe-theclips-agency/assets/images/672b7867aba77299709fc7fa_Svenja-3.gif",
    alt: "Video preview",
    fromViews: "2.5m",
    toViews: "10+ Million",
    increasePercent: 300,
    comments: "150k+",
    shares: "121k+",
    likes: "1.5M+"
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a93d8c77-2901-4b64-8e54-ce6f6469eefe-theclips-agency/assets/images/672b6fe0639f18a8d6073fb2_Ajmal_20Perfumes_20-Proce-4.gif",
    alt: "Video preview",
    fromViews: "40k",
    toViews: "100k+",
    increasePercent: 150,
    comments: "10k+",
    shares: "50k+",
    likes: "100k+"
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a93d8c77-2901-4b64-8e54-ce6f6469eefe-theclips-agency/assets/images/672b70a8f013b880e870e41f_Dr_20Vivien_20-_20History-5.gif",
    alt: "Video preview",
    fromViews: "350k",
    toViews: "1+ Million",
    increasePercent: 185.7,
    comments: "100k+",
    shares: "50k+",
    likes: "267k+"
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a93d8c77-2901-4b64-8e54-ce6f6469eefe-theclips-agency/assets/images/672b7149cb7793071bbde701_Mahmood_20Bartawi_20-_20H-6.gif",
    alt: "Video preview",
    fromViews: "2.5m",
    toViews: "10+ Million",
    increasePercent: 300,
    comments: "150k+",
    shares: "121k+",
    likes: "1.5M+"
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a93d8c77-2901-4b64-8e54-ce6f6469eefe-theclips-agency/assets/images/672b781fb59f6f8d368492ac_Rafif-7.gif",
    alt: "Video preview",
    fromViews: "40k",
    toViews: "100k+",
    increasePercent: 150,
    comments: "10k+",
    shares: "50k+",
    likes: "100k+"
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a93d8c77-2901-4b64-8e54-ce6f6469eefe-theclips-agency/assets/images/672b6ff7723d51118aedc820_Carine_20Boury_20-_20_20W-8.gif",
    alt: "Video preview",
    fromViews: "350k",
    toViews: "1+ Million",
    increasePercent: 185.7,
    comments: "100k+",
    shares: "50k+",
    likes: "267k+"
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a93d8c77-2901-4b64-8e54-ce6f6469eefe-theclips-agency/assets/images/672b71a2f2cc4ec8df5236e5_Steve_20Hill_20-_20when_2-9.gif",
    alt: "Video preview",
    fromViews: "2.5m",
    toViews: "10+ Million",
    increasePercent: 300,
    comments: "150k+",
    shares: "121k+",
    likes: "1.5M+"
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a93d8c77-2901-4b64-8e54-ce6f6469eefe-theclips-agency/assets/images/672b782c827be802385c54fb_Rakan-10.gif",
    alt: "Video preview",
    fromViews: "40k",
    toViews: "100k+",
    increasePercent: 150,
    comments: "10k+",
    shares: "50k+",
    likes: "100k+"
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a93d8c77-2901-4b64-8e54-ce6f6469eefe-theclips-agency/assets/images/672b716c424fb491a1b7c8c3_Omnia_20-_20Pitfalls_20in-11.gif",
    alt: "Video preview",
    fromViews: "350k",
    toViews: "1+ Million",
    increasePercent: 185.7,
    comments: "100k+",
    shares: "50k+",
    likes: "267k+"
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a93d8c77-2901-4b64-8e54-ce6f6469eefe-theclips-agency/assets/images/672b7126074b4f4921ec1793_Khaled_20Bartawi_20-_20Hy-12.gif",
    alt: "Video preview",
    fromViews: "2.5m",
    toViews: "10+ Million",
    increasePercent: 300,
    comments: "150k+",
    shares: "121k+",
    likes: "1.5M+"
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a93d8c77-2901-4b64-8e54-ce6f6469eefe-theclips-agency/assets/images/672b70e45a2a42171638021b_Hala_20B_20-_20_20How_20t-13.gif",
    alt: "Video preview",
    fromViews: "40k",
    toViews: "100k+",
    increasePercent: 150,
    comments: "10k+",
    shares: "50k+",
    likes: "100k+"
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a93d8c77-2901-4b64-8e54-ce6f6469eefe-theclips-agency/assets/images/672b70cdee847086dd4abf86_Fondaku_20-_20Challenges_-14.gif",
    alt: "Video preview",
    fromViews: "350k",
    toViews: "1+ Million",
    increasePercent: 185.7,
    comments: "100k+",
    shares: "50k+",
    likes: "267k+"
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a93d8c77-2901-4b64-8e54-ce6f6469eefe-theclips-agency/assets/images/672b70411982de8ef1a7dad9_Dr-Diana_20-_20Treat_20yo-15.gif",
    alt: "Video preview",
    fromViews: "2.5m",
    toViews: "10+ Million",
    increasePercent: 300,
    comments: "150k+",
    shares: "121k+",
    likes: "1.5M+"
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a93d8c77-2901-4b64-8e54-ce6f6469eefe-theclips-agency/assets/images/672b77f6a7debae6b88f6f66_gigi-16.gif",
    alt: "Video preview",
    fromViews: "40k",
    toViews: "100k+",
    increasePercent: 150,
    comments: "10k+",
    shares: "50k+",
    likes: "100k+"
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a93d8c77-2901-4b64-8e54-ce6f6469eefe-theclips-agency/assets/images/672b6fed7a5bd1bbb1b00c0c_Avin_20-_20most_20effecti-17.gif",
    alt: "Video preview",
    fromViews: "350k",
    toViews: "1+ Million",
    increasePercent: 185.7,
    comments: "100k+",
    shares: "50k+",
    likes: "267k+"
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a93d8c77-2901-4b64-8e54-ce6f6469eefe-theclips-agency/assets/images/672b78550b0391b00525da24_Suzan-18.gif",
    alt: "Video preview",
    fromViews: "2.5m",
    toViews: "10+ Million",
    increasePercent: 300,
    comments: "150k+",
    shares: "121k+",
    likes: "1.5M+"
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a93d8c77-2901-4b64-8e54-ce6f6469eefe-theclips-agency/assets/images/672b70343552187b99f54164_Dr_20Medhat-_20Signs_20of-19.gif",
    alt: "Video preview",
    fromViews: "40k",
    toViews: "100k+",
    increasePercent: 150,
    comments: "10k+",
    shares: "50k+",
    likes: "100k+"
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a93d8c77-2901-4b64-8e54-ce6f6469eefe-theclips-agency/assets/images/672b6fcca361098e538030ca_Abe_20Jr_20-_20Power_20of-20.gif",
    alt: "Video preview",
    fromViews: "350k",
    toViews: "1+ Million",
    increasePercent: 185.7,
    comments: "100k+",
    shares: "50k+",
    likes: "267k+"
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a93d8c77-2901-4b64-8e54-ce6f6469eefe-theclips-agency/assets/images/672b71332fb9301d7e51c972_Khalifa_20-_20Tesla_20Adm-21.gif",
    alt: "Video preview",
    fromViews: "2.5m",
    toViews: "10+ Million",
    increasePercent: 300,
    comments: "150k+",
    shares: "121k+",
    likes: "1.5M+"
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a93d8c77-2901-4b64-8e54-ce6f6469eefe-theclips-agency/assets/images/672b783aba0040d26f4364c0_Riham-22.gif",
    alt: "Video preview",
    fromViews: "40k",
    toViews: "100k+",
    increasePercent: 150,
    comments: "10k+",
    shares: "50k+",
    likes: "100k+"
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a93d8c77-2901-4b64-8e54-ce6f6469eefe-theclips-agency/assets/images/672b70033b1fba738fe8290d_Carole-Founder_20of_20Car-23.gif",
    alt: "Video preview",
    fromViews: "350k",
    toViews: "1+ Million",
    increasePercent: 185.7,
    comments: "100k+",
    shares: "50k+",
    likes: "267k+"
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a93d8c77-2901-4b64-8e54-ce6f6469eefe-theclips-agency/assets/images/672b78476188322f33779499_Sumaya-24.gif",
    alt: "Video preview",
    fromViews: "2.5m",
    toViews: "10+ Million",
    increasePercent: 300,
    comments: "150k+",
    shares: "121k+",
    likes: "1.5M+"
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a93d8c77-2901-4b64-8e54-ce6f6469eefe-theclips-agency/assets/images/672b709b018255d1c65d67cf_Dr_20Nail_20Dia-_20Gum_20-25.gif",
    alt: "Video preview",
    fromViews: "40k",
    toViews: "100k+",
    increasePercent: 150,
    comments: "10k+",
    shares: "50k+",
    likes: "100k+"
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a93d8c77-2901-4b64-8e54-ce6f6469eefe-theclips-agency/assets/images/672b780a1bfb8cf857671e03_Lindesy-26.gif",
    alt: "Video preview",
    fromViews: "350k",
    toViews: "1+ Million",
    increasePercent: 185.7,
    comments: "100k+",
    shares: "50k+",
    likes: "267k+"
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a93d8c77-2901-4b64-8e54-ce6f6469eefe-theclips-agency/assets/images/672b713e842917ec483ebf4f_Lamar-Who_20Is_20Your_20I-27.gif",
    alt: "Video preview",
    fromViews: "2.5m",
    toViews: "10+ Million",
    increasePercent: 300,
    comments: "150k+",
    shares: "121k+",
    likes: "1.5M+"
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a93d8c77-2901-4b64-8e54-ce6f6469eefe-theclips-agency/assets/images/672b70c36f3d3594abb26a04_Exquis-Gold_20under_20ton-28.gif",
    alt: "Video preview",
    fromViews: "40k",
    toViews: "100k+",
    increasePercent: 150,
    comments: "10k+",
    shares: "50k+",
    likes: "100k+"
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a93d8c77-2901-4b64-8e54-ce6f6469eefe-theclips-agency/assets/images/672b70b864fa55b3aadadfab_Entropy-Building_20Resili-29.gif",
    alt: "Video preview",
    fromViews: "350k",
    toViews: "1+ Million",
    increasePercent: 185.7,
    comments: "100k+",
    shares: "50k+",
    likes: "267k+"
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a93d8c77-2901-4b64-8e54-ce6f6469eefe-theclips-agency/assets/images/687cfc758f19e6978db06ed7_Ninad_HG_240p-30.gif",
    alt: "Video preview",
    fromViews: "2.5m",
    toViews: "10+ Million",
    increasePercent: 300,
    comments: "150k+",
    shares: "121k+",
    likes: "1.5M+"
  }
];

const duplicatedVideos = [...videoData, ...videoData];

const ResultsCarousel = () => {
  const animationDuration = "100s";

  return (
    <>
      <style>
        {`
          @keyframes scroll-left {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          .animate-scroll-left {
            animation: scroll-left ${animationDuration} linear infinite;
          }
        `}
      </style>
      <section className="bg-background py-8 sm:py-12 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center mb-6 sm:mb-8 md:mb-12">
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6 sm:mb-8 md:mb-12">
            Our Work
          </p>
        </div>

        <div className="relative w-full overflow-hidden px-2 sm:px-4 md:px-8">
          <div className="absolute inset-y-0 left-0 w-12 sm:w-16 md:w-24 lg:w-32 xl:w-40 bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-12 sm:w-16 md:w-24 lg:w-32 xl:w-40 bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none"></div>
          
          <div className="group">
            <div className="flex w-max animate-scroll-left group-hover:[animation-play-state:paused] items-center">
              {duplicatedVideos.map((video, index) => (
                <div
                  key={index}
                  className="relative w-[240px] sm:w-[280px] md:w-[340px] lg:w-[400px] xl:w-[460px] h-[400px] sm:h-[480px] md:h-[580px] lg:h-[680px] xl:h-[780px] shrink-0 mx-1.5 sm:mx-2 md:mx-3 lg:mx-4 rounded-[14px] sm:rounded-[16px] md:rounded-[20px] lg:rounded-[24px] overflow-hidden transition-all duration-300 ease-in-out hover:scale-[1.03] hover:z-10 hover:shadow-2xl"
                >
                  <Image
                    src={video.src}
                    alt={video.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 240px, (max-width: 768px) 280px, (max-width: 1024px) 340px, (max-width: 1280px) 400px, 460px"
                    unoptimized={true} 
                    priority={index < 10}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none"></div>
                  
                  {/* Text Overlay at Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-5 lg:p-6 text-white z-20">
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg font-medium mb-1.5 sm:mb-2 leading-tight">
                      From {video.fromViews} views to {video.toViews} views across all social media
                    </p>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold mb-2 sm:mb-3 text-[#75FB7E]">
                      {video.increasePercent}% increase in Views
                    </p>
                    <p className="text-[10px] sm:text-xs md:text-sm lg:text-base font-medium opacity-90">
                      {video.comments} Comments | {video.shares} Shares | {video.likes} Likes
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResultsCarousel;

