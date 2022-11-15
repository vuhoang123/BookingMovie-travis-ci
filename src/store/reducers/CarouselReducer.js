const stateDefault = {
  imgCarousel: [
    {
      maBanner: 1,
      maPhim: 99997,
      hinhAnh:
        "https://mediad.publicbroadcasting.net/p/ketr/files/styles/x_large/public/201904/avengers_endgame_-_facebook.jpg",
    },
    {
      maBanner: 2,
      maPhim: 99998,
      hinhAnh: "https://i.ytimg.com/vi/xXc4f0EKazg/maxresdefault.jpg",
    },
    {
      maBanner: 3,
      maPhim: 99999,
      hinhAnh: "https://s3img.vcdn.vn/123phim/2020/07/ban-dao-15954792351353.jpg",
    },
  ],
};

export const CarouselReducer = (state = stateDefault, action) => {
  switch (action.type) {
    // case SET_CAROUSEL: {
    //   return { ...state, imgCarousel: action.imgCarousel };
    // }
    default:
      return { ...state };
  }
};
