import Image from "next/image";

const PurrCoinWarriors = () => {
  return (
    <div className="relative w-full max-w-[1280px] mx-auto h-auto min-h-screen py-10 overflow-hidden">
      {/* Background image container with border radius */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <div className="relative w-full h-full rounded-xl overflow-hidden">
          <Image
            src="/assets/omg-6.svg"
            alt="Omg background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20 rounded-xl" />
        </div>
      </div>

      {/* Main content container */}
      <div className="relative w-full max-w-[1200px] mx-auto h-full px-4">
        {/* Title */}
        <div className="text-center md:text-left mt-10 md:mt-20 mb-10 md:mb-20">
          <h1 className="text-white text-[50px] md:text-[80px] lg:text-[100px] font-['IM_FELL_English_SC'] font-normal leading-tight">
            CLASH OF
          </h1>
          <h2 className="text-white text-[60px] md:text-[90px] lg:text-[118px] font-['IM_FELL_English_SC'] font-normal leading-tight">
            OMG COIN
          </h2>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left content */}
          <div className="space-y-8">
            {/* Description box */}
            <div className="bg-gradient-to-r from-[#131313] via-[#201D1E]/70 to-white/10 rounded-xl backdrop-blur-[25px] p-6">
              <p className="text-white text-[14px] sm:text-[16px] md:text-[18px] font-poppins font-bold leading-relaxed">
                OMG Warriors is your thrilling entry into a multiverse adventure
                like no other, now accessible through a captivating Telegram
                game. This dynamic clicker game offers a unique twist that will
                keep you engaged with quick and engaging tasks designed to
                challenge and entertain. As you explore mysterious dimensions
                and overcome exciting challenges, you&apos;ll have the
                opportunity to earn tokens and collect valuable rewards that
                enhance your journey. The OMG Warriors game on Telegram not only
                promises minimal effort for maximum fun but also features a very
                exciting and attractive airdrop game, allowing players to earn
                more points and receive exclusive OMG prizes. Get ready to
                launch and prepare for an unforgettable journey where every
                click brings you closer to the vast rewards of the OMG universe.
              </p>
            </div>

            {/* Story section */}
            <div>
              <h3 className="text-white text-[30px] md:text-[40px] font-poppins font-bold mb-4 text-center md:text-left">
                The Story
              </h3>

              <div className="bg-gradient-to-r from-[#131313] via-[#201D1E]/70 to-white/10 rounded-xl backdrop-blur-[25px] p-6">
                <p className="text-white text-[14px] sm:text-[16px] md:text-[18px] font-poppins font-bold leading-relaxed">
                  In the heart of Starshadow Woods, whispers of a dark power
                  ripple through ancient trees. The High Seer of the OMG
                  Warriors senses the rise of an ominous force and sends a call
                  to the bravest of each tribe. Under the Light of Evershine,
                  warriors gather from distant peaks and hidden glades, marked
                  with the symbols of their clans—Silverfang, Emberpaw, and
                  Moonclaw. The Elders speak of twisted shadows encroaching upon
                  their sacred lands, remnants of a long-lost magic that
                  threatens the balance of their world. With solemn faces, each
                  warrior places a paw on the Circle Stone, forming the
                  Brotherhood of Light, bound by a vow to defend their realm.
                  Together, they journey across misty valleys, enchanted groves,
                  and forgotten lands, each step bringing them closer to the
                  source of the corruption. As dawn breaks, the warriors look to
                  the sky, their hearts united and ready to face the dangers
                  lurking in the shadows, knowing the fate of their world rests
                  on their courage and strength.
                </p>
              </div>
            </div>
          </div>

          {/* Right side images */}
          <div className="relative h-[500px] md:h-[800px] lg:h-[900px]">
            <div className="absolute inset-0 w-full h-full">
              <Image
                src="/frame2.svg"
                alt="OMG warrior"
                fill
                className="object-contain"
              />
            </div>
            <div className="absolute inset-0 w-full h-full">
              <Image
                src="/phone-Raccon.svg"
                alt="OMG warrior closeup"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurrCoinWarriors;
