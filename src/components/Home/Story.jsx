import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import { AiOutlinePlus } from 'react-icons/ai';
import profilepic from '../../assets/profilepic.png';

function AddToStoryCard() {
  return (
    <div className="w-[100px] rounded-xl my-1 shrink-0 flex flex-col items-center border-gray-600 border-[1.5px]">
      {/* <div
        className="w-full h-2/3 bg-center bg-cover"
        style={{ backgroundImage: `url(${profilepic})` }}
      ></div> */}
      <img
        src={profilepic}
        alt="profile"
        className="w-full rounded-tl-xl rounded-tr-xl"
      />
      <div className="rounded-full w-[30px] h-[30px] bg-cyan-600 flex items-center justify-center text-white -mt-4 mb-2  ring-2 ring-white">
        <AiOutlinePlus />
      </div>
      <div>
        <h3 className="font-bold text-center">Add To Story</h3>
      </div>
    </div>
  );
}

function StoryCard() {
  return (
    <div
      className="relative w-[100px] bg-center bg-cover rounded-xl my-1 text-white shrink-0"
      style={{ backgroundImage: `url(${profilepic})` }}
    >
      <div className="absolute top-2 left-2 rounded-sm w-[10px] h-[10x] bg-cyan-600">
        1
      </div>
      <div className="absolute bottom-0 left-2 text-[14px]">
        <p>Lawal</p>
        <p>Olamide</p>
      </div>
    </div>
  );
}

export default function Story() {
  return (
    <div className="flex gap-2 flex-nowrap overflow-x-scroll overflow-y-auto scrollbar-hidden h-[200px] bg-white p-2 my-2">
      <AddToStoryCard />
      <StoryCard />
      <StoryCard />
      <StoryCard />
      <StoryCard />
      <StoryCard />
      <StoryCard />
      <StoryCard />
      <StoryCard />
    </div>
  );
}

// function Story() {
//   return (
//     <Swiper
//       spaceBetween={15}
//       slidesPerView="auto"
//       freeMode
//       modules={[FreeMode]}
//       centeredSlides
//       centeredSlidesBounds
//       onSlideChange={() => console.log('slide change')}
//       onSwiper={(swiper) => console.log(swiper)}
//     >
//       <SwiperSlide>
//         <StoryCard />
//       </SwiperSlide>
//       <SwiperSlide>
//         <StoryCard />
//       </SwiperSlide>
//       <SwiperSlide>
//         <StoryCard />
//       </SwiperSlide>
//       <SwiperSlide>
//         <StoryCard />
//       </SwiperSlide>
//     </Swiper>
//   );
// }
