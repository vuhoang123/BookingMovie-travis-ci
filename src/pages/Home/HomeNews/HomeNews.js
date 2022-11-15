import React from "react";
import { Col, Row, Tabs } from "antd";
import { useSelector } from "react-redux";
import "./HomeNews.css";

const { TabPane } = Tabs;

export default function HomeNews() {
  return (
    <div className="HomeNews wow animate__animated animate__zoomIn" id="news">
      {" "}
      <div className="container mt-10 w-full bg-white px-5 py-5">
        <Tabs defaultActiveKey="1" centered>
          {/* Điện ảnh 24h */}
          <TabPane
            className="wow animate__animated animate__fadeIn"
            tab={
              <span className=" font-semibold" style={{ fontSize: 24 }}>
                Điện ảnh 24h
              </span>
            }
            key="1"
            style={{ minHeight: 300 }}
          >
            <div className="new_film24h--1">
              <Row gutter={[30, 30]}>
                <Col span={12}>
                  <img
                    className="bg-cover object-cover rounded-md bg-center w-full"
                    src={require("../../../assets/thumnail/dienanh24h_1.jpg")}
                    alt=""
                  />
                  <a href="" className="text-xl font-semibold mt-3 block hover:text-orange-600 uppercase">
                    Ấn định chắc nịch ngày khởi chiếu 16.04, Lý Hải tung clip Lật Mặt: 48H đậm chất
                  </a>
                  <p className="text-md mt-2">
                    Trước thềm khởi chiếu 16.04 này, Lý Hải bất ngờ tung clip rượt đuổi gay cấn thót tim fans
                    hâm mộ.
                  </p>
                  <span className="text-black opacity-70 mt-2 block text-xl">
                    <i
                      className="fa fa-thumbs-o-up hover:text-orange-600 cursor-pointer"
                      aria-hidden="true"
                    ></i>
                    <i
                      className="fa fa-comment-o ml-5 hover:text-orange-600 cursor-pointer"
                      aria-hidden="true"
                    ></i>
                  </span>
                </Col>
                <Col span={12}>
                  <img
                    className="bg-cover object-cover rounded-md bg-center w-full"
                    src={require("../../../assets/thumnail/dienanh24h_2.jpg")}
                    alt=""
                  />
                  <a href="" className="text-xl font-semibold mt-3 block hover:text-orange-600">
                    [MORTAL KOMBAT: CUỘC CHIẾN SINH TỬ] - PHIM ĐIỆN ẢNH NỔI TIẾNG ĐƯỢC CHUYỂN THỂ TỪ CÁC TỰA
                    GAME ĐÌNH ĐÁM
                  </a>
                  <p className="text-md mt-2">
                    Bên cạnh những kịch bản gốc mới mẻ và đầy bất ngờ, Hollywood cũng không thiếu những tác
                    phẩm đình đám được chuyển thể từ tiểu thuyết, phim hoạt hình, hay thậm chí là cả trò chơi
                    điện tử.
                  </p>
                  <span className="text-black opacity-70 mt-2 block text-xl">
                    <i
                      className="fa fa-thumbs-o-up hover:text-orange-600 cursor-pointer"
                      aria-hidden="true"
                    ></i>
                    <i
                      className="fa fa-comment-o ml-5 hover:text-orange-600 cursor-pointer"
                      aria-hidden="true"
                    ></i>
                  </span>
                </Col>
              </Row>
            </div>
            <div className="new_film24h--2 mt-10">
              <Row gutter={[30, 30]}>
                <Col span={8}>
                  <img
                    className="bg-cover object-cover rounded-md bg-center w-full"
                    src={require("../../../assets/thumnail/dienanh24h_3.png")}
                    alt=""
                  />
                  <a href="" className="text-xl font-semibold mt-3 block hover:text-orange-600 uppercase">
                    PROMISING YOUNG WOMAN | Bông hồng nước Anh Carey Mulligan và màn trả thù đàn ông để đời
                  </a>
                  <p className="text-md mt-2">
                    Đề cử giải Oscar danh giá vừa gọi tên Carey Mulligan ở hạng mục nữ chính xuất sắc nhất cho
                    vai diễn "đẫm máu" nhất sự nghiệp của cô trong phim Promising Young Woman (tựa Việt: Cô
                    Gái Trẻ Hứa Hẹn).
                  </p>
                  <span className="text-black opacity-70 mt-2 block text-xl">
                    <i
                      className="fa fa-thumbs-o-up hover:text-orange-600 cursor-pointer"
                      aria-hidden="true"
                    ></i>
                    <i
                      className="fa fa-comment-o ml-5 hover:text-orange-600 cursor-pointer"
                      aria-hidden="true"
                    ></i>
                  </span>
                </Col>
                <Col span={8}>
                  <img
                    className="bg-cover object-cover rounded-md bg-center w-full"
                    src={require("../../../assets/thumnail/dienanh24h_4.png")}
                    alt=""
                  />
                  <a href="" className="text-xl font-semibold mt-3 block hover:text-orange-600 uppercase">
                    VỪA ĐẸP LẠI VỪA TÀI NĂNG, DÀN SAO NAM CỦA PHIM “BÀN TAY DIỆT QUỶ” ĐẢM BẢO ĐỐN TIM HỘI CHỊ
                    EM
                  </a>
                  <p className="text-md mt-2">
                    Quy tụ 3 nam tài tử vừa điển trai, vừa được đánh giá cao về năng lực diễn xuất là Park Seo
                    Joon, Woo Do Hwan và Choi Woo Sik, tác phẩm kinh dị – hành động “Bàn Tay Diệt Quỷ” hứa hẹn
                    sẽ làm cho hội chị em phải mê mẩn vào tháng tới.
                  </p>
                  <span className="text-black opacity-70 mt-2 block text-xl">
                    <i
                      className="fa fa-thumbs-o-up hover:text-orange-600 cursor-pointer"
                      aria-hidden="true"
                    ></i>
                    <i
                      className="fa fa-comment-o ml-5 hover:text-orange-600 cursor-pointer"
                      aria-hidden="true"
                    ></i>
                  </span>
                </Col>
                <Col span={8}>
                  <Row gutter={[5, 5]}>
                    <Col span={8}>
                      <img
                        className="rounded-md bg-center w-13 bg-cover object-cover"
                        src={require("../../../assets/thumnail/dienanh24h_5.png")}
                        alt=""
                      />
                    </Col>
                    <Col span={16}>
                      {" "}
                      <a href="" className="m-2 text-md font-semibold mt-3 block hover:text-orange-600">
                        “Bóc tem” tổ hợp giải trí mới toanh của giới Hà Thành chuẩn xì tai Sài Gòn.
                      </a>
                    </Col>
                  </Row>
                  <Row gutter={[5, 5]} className="mt-5">
                    <Col span={8}>
                      <img
                        className="rounded-md bg-center w-13 bg-cover object-cover"
                        src={require("../../../assets/thumnail/dienanh24h_6.png")}
                        alt=""
                      />
                    </Col>
                    <Col span={16}>
                      {" "}
                      <a href="" className="ml-2 text-md font-semibold mt-3 block hover:text-orange-600">
                        Tiệc Trăng Máu chính thức cán mốc 100 tỷ chỉ sau 2 tuần công chiếu.
                      </a>
                    </Col>
                  </Row>
                  <Row gutter={[5, 5]} className="mt-5">
                    <Col span={8}>
                      <img
                        className="rounded-md bg-center w-13 bg-cover object-cover"
                        src={require("../../../assets/thumnail/dienanh24h_7.jpg")}
                        alt=""
                      />
                    </Col>
                    <Col span={16}>
                      {" "}
                      <a href="" className="ml-2 text-md font-semibold mt-3 block hover:text-orange-600">
                        Ngô Thanh Vân chính thức khởi động cuộc thi thiết kế trang phục cho siêu anh hùng đầu
                        tiên của Việt Nam.
                      </a>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>

            <div className="seemore flex justify-center">
              <button className="block py-2 px-8 rounded-md mt-5 border btn_seemore text-md font-semibold cursor-pointer">
                XEM THÊM
              </button>
            </div>
          </TabPane>

          {/* Reviews */}
          <TabPane
            className="wow animate__animated animate__fadeIn"
            tab={
              <span className=" font-semibold" style={{ fontSize: 24 }}>
                Reviews
              </span>
            }
            key="2"
            style={{ minHeight: 300 }}
          >
            <div className="new_film24h--1">
              <Row gutter={[30, 30]}>
                <Col span={12}>
                  <img
                    className="bg-cover object-cover rounded-md bg-center w-full"
                    src={require("../../../assets/thumnail/reviews_1.png")}
                    alt=""
                  />
                  <a href="" className="text-xl font-semibold mt-3 block hover:text-orange-600 uppercase">
                    Review: Tàn Tích Quỷ Ám (Relic) - Ba thế hệ và mối liên kết
                  </a>
                  <p className="text-md mt-2">Điểm nhấn của phim kinh dị năm 2020 chính là Tàn Tích Quỷ Ám</p>
                  <span className="text-black opacity-70 mt-2 block text-xl">
                    <i
                      className="fa fa-thumbs-o-up hover:text-orange-600 cursor-pointer"
                      aria-hidden="true"
                    ></i>
                    <i
                      className="fa fa-comment-o ml-5 hover:text-orange-600 cursor-pointer"
                      aria-hidden="true"
                    ></i>
                  </span>
                </Col>
                <Col span={12}>
                  <img
                    className="bg-cover object-cover rounded-md bg-center w-full"
                    src={require("../../../assets/thumnail/reviews_2.png")}
                    alt=""
                  />
                  <a href="" className="text-xl font-semibold mt-3 block hover:text-orange-600">
                    Review: Dinh Thự Oan Khuất (Ghost Of War)
                  </a>
                  <p className="text-md mt-2">
                    Tuy là một bộ phim có chất lượng tốt, nhưng có vẻ Dinh Thự Oan Khuất vẫn chưa đủ để đem
                    khán giả trở lại phòng
                  </p>
                  <span className="text-black opacity-70 mt-2 block text-xl">
                    <i
                      className="fa fa-thumbs-o-up hover:text-orange-600 cursor-pointer"
                      aria-hidden="true"
                    ></i>
                    <i
                      className="fa fa-comment-o ml-5 hover:text-orange-600 cursor-pointer"
                      aria-hidden="true"
                    ></i>
                  </span>
                </Col>
              </Row>
            </div>
            <div className="new_film24h--2 mt-10">
              <Row gutter={[30, 30]}>
                <Col span={8}>
                  <img
                    className="bg-cover object-cover rounded-md bg-center w-full"
                    src={require("../../../assets/thumnail/reviews_3.png")}
                    alt=""
                  />
                  <a href="" className="text-xl font-semibold mt-3 block hover:text-orange-600 uppercase">
                    ‘BlacKkKlansman’ - cốc nước lạnh để người Mỹ
                  </a>
                  <p className="text-md mt-2">
                    Tác phẩm nhận đề cử Phim truyện xuất sắc tại Oscar 2019 của đạo diễn Spike
                  </p>
                  <span className="text-black opacity-70 mt-2 block text-xl">
                    <i
                      className="fa fa-thumbs-o-up hover:text-orange-600 cursor-pointer"
                      aria-hidden="true"
                    ></i>
                    <i
                      className="fa fa-comment-o ml-5 hover:text-orange-600 cursor-pointer"
                      aria-hidden="true"
                    ></i>
                  </span>
                </Col>
                <Col span={8}>
                  <img
                    className="bg-cover object-cover rounded-md bg-center w-full"
                    src={require("../../../assets/thumnail/reviews_4.png")}
                    alt=""
                  />
                  <a href="" className="text-xl font-semibold mt-3 block hover:text-orange-600 uppercase">
                    American Sniper - Chính nghĩa hay phi nghĩa?
                  </a>
                  <p className="text-md mt-2">
                    American Sniper khắc họa một tay súng bắn tỉa “huyền thoại” của Hải quân Mỹ với
                  </p>
                  <span className="text-black opacity-70 mt-2 block text-xl">
                    <i
                      className="fa fa-thumbs-o-up hover:text-orange-600 cursor-pointer"
                      aria-hidden="true"
                    ></i>
                    <i
                      className="fa fa-comment-o ml-5 hover:text-orange-600 cursor-pointer"
                      aria-hidden="true"
                    ></i>
                  </span>
                </Col>
                <Col span={8}>
                  <Row gutter={[5, 5]}>
                    <Col span={8}>
                      <img
                        className="rounded-md bg-center w-13 bg-cover object-cover"
                        src={require("../../../assets/thumnail/reviews_5.png")}
                        alt=""
                      />
                    </Col>
                    <Col span={16}>
                      {" "}
                      <a href="" className="m-2 text-md font-semibold mt-3 block hover:text-orange-600">
                        [Review] Spider-Man: Into The Spider-Vesre
                      </a>
                    </Col>
                  </Row>
                  <Row gutter={[5, 5]} className="mt-5">
                    <Col span={8}>
                      <img
                        className="rounded-md bg-center w-13 bg-cover object-cover"
                        src={require("../../../assets/thumnail/reviews_6.jpg")}
                        alt=""
                      />
                    </Col>
                    <Col span={16}>
                      {" "}
                      <a href="" className="ml-2 text-md font-semibold mt-3 block hover:text-orange-600">
                        [COVID-19] là bản chính thức của MEV-1 phim contagion (2011)
                      </a>
                    </Col>
                  </Row>
                  <Row gutter={[5, 5]} className="mt-5">
                    <Col span={8}>
                      <img
                        className="rounded-md bg-center w-13 bg-cover object-cover"
                        src={require("../../../assets/thumnail/reviews_7.jpg")}
                        alt=""
                      />
                    </Col>
                    <Col span={16}>
                      {" "}
                      <a href="" className="ml-2 text-md font-semibold mt-3 block hover:text-orange-600">
                        [Review] Siêu Vệ Sĩ Sợ Vợ - Giải cứu Tổng thống chưa bao giờ lầy
                      </a>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>

            <div className="seemore flex justify-center">
              <button className="block py-2 px-8 rounded-md mt-5 border btn_seemore text-md font-semibold cursor-pointer">
                XEM THÊM
              </button>
            </div>
          </TabPane>

          {/* Khuyễn mãi */}
          <TabPane
            className="wow animate__animated animate__fadeIn"
            tab={
              <span className=" font-semibold" style={{ fontSize: 24 }}>
                Khuyến mãi
              </span>
            }
            key="3"
            style={{ minHeight: 300 }}
          >
            <div className="new_film24h--1">
              <Row gutter={[30, 30]}>
                <Col span={12}>
                  <img
                    className="bg-cover object-cover rounded-md bg-center w-full"
                    src={require("../../../assets/thumnail/khuyenmai_1.jpg")}
                    alt=""
                  />
                  <a href="" className="text-xl font-semibold mt-3 block hover:text-orange-600 uppercase">
                    BHD 59K/VÉ CẢ TUẦN !!!
                  </a>
                  <p className="text-md mt-2">
                    Tận hưởng Ưu Đãi lên đến 3 VÉ BHD Star mỗi tuần chỉ với giá 59k/vé khi mua vé trên CYBER
                    hoặc Mục Vé Phim trên ZaloPay.
                  </p>
                  <span className="text-black opacity-70 mt-2 block text-xl">
                    <i
                      className="fa fa-thumbs-o-up hover:text-orange-600 cursor-pointer"
                      aria-hidden="true"
                    ></i>
                    <i
                      className="fa fa-comment-o ml-5 hover:text-orange-600 cursor-pointer"
                      aria-hidden="true"
                    ></i>
                  </span>
                </Col>
                <Col span={12}>
                  <img
                    className="bg-cover object-cover rounded-md bg-center w-full"
                    src={require("../../../assets/thumnail/khuyenmai_2.jpg")}
                    alt=""
                  />
                  <a href="" className="text-xl font-semibold mt-3 block hover:text-orange-600">
                    CYBER 1K/VÉ NGẠI CHI GIÁ VÉ
                  </a>
                  <p className="text-md mt-2">
                    Đồng giá 1k/vé cả tuần tất cả các rạp trên CYBER + Nhận thêm 02 voucher thanh toán ZaloPay
                    thả ga
                  </p>
                  <span className="text-black opacity-70 mt-2 block text-xl">
                    <i
                      className="fa fa-thumbs-o-up hover:text-orange-600 cursor-pointer"
                      aria-hidden="true"
                    ></i>
                    <i
                      className="fa fa-comment-o ml-5 hover:text-orange-600 cursor-pointer"
                      aria-hidden="true"
                    ></i>
                  </span>
                </Col>
              </Row>
            </div>
            <div className="new_film24h--2 mt-10">
              <Row gutter={[30, 30]}>
                <Col span={8}>
                  <img
                    className="bg-cover object-cover rounded-md bg-center w-full"
                    src={require("../../../assets/thumnail/khuyenmai_3.png")}
                    alt=""
                  />
                  <a href="" className="text-xl font-semibold mt-3 block hover:text-orange-600 uppercase">
                    ĐỒNG GIÁ 1K/VÉ KHI MUA VÉ QUA CYBER
                  </a>
                  <p className="text-md mt-2">
                    ĐỒNG GIÁ 1K/VÉ KHI MUA VÉ QUA CYBER Hành trình tìm Ròm và Phúc chỉ với 1k cả tuần + nhận
                    thêm 02 voucher khi đặt vé qua CYBER.
                  </p>
                  <span className="text-black opacity-70 mt-2 block text-xl">
                    <i
                      className="fa fa-thumbs-o-up hover:text-orange-600 cursor-pointer"
                      aria-hidden="true"
                    ></i>
                    <i
                      className="fa fa-comment-o ml-5 hover:text-orange-600 cursor-pointer"
                      aria-hidden="true"
                    ></i>
                  </span>
                </Col>
                <Col span={8}>
                  <img
                    className="bg-cover object-cover rounded-md bg-center w-full"
                    src={require("../../../assets/thumnail/khuyenmai_4.jpg")}
                    alt=""
                  />
                  <a href="" className="text-xl font-semibold mt-3 block hover:text-orange-600 uppercase">
                    BHD STAR VÉ CHỈ 59.000Đ CẢ TUẦN!
                  </a>
                  <p className="text-md mt-2">
                    Tận hưởng Ưu Đãi lên đến 3 VÉ BHD Star mỗi tuần chỉ với giá 59k/vé khi mua vé trên CYBER
                    và thanh toán bằng ZaloPay hoặc Mục Vé Phim trên ZaloPay.
                  </p>
                  <span className="text-black opacity-70 mt-2 block text-xl">
                    <i
                      className="fa fa-thumbs-o-up hover:text-orange-600 cursor-pointer"
                      aria-hidden="true"
                    ></i>
                    <i
                      className="fa fa-comment-o ml-5 hover:text-orange-600 cursor-pointer"
                      aria-hidden="true"
                    ></i>
                  </span>
                </Col>
                <Col span={8}>
                  <Row gutter={[5, 5]}>
                    <Col span={8}>
                      <img
                        className="rounded-md bg-center w-13 bg-cover object-cover"
                        src={require("../../../assets/thumnail/khuyenmai_5.jpg")}
                        alt=""
                      />
                    </Col>
                    <Col span={16}>
                      {" "}
                      <a href="" className="m-2 text-md font-semibold mt-3 block hover:text-orange-600">
                        [CyberBooking] Beta Cineplex trở lại với hàng loạt ưu đãi lớn
                      </a>
                    </Col>
                  </Row>
                  <Row gutter={[5, 5]} className="mt-5">
                    <Col span={8}>
                      <img
                        className="rounded-md bg-center w-13 bg-cover object-cover"
                        src={require("../../../assets/thumnail/khuyenmai_6.jpg")}
                        alt=""
                      />
                    </Col>
                    <Col span={16}>
                      {" "}
                      <a href="" className="ml-2 text-md font-semibold mt-3 block hover:text-orange-600">
                        [CyberBooking] Thứ 6 Không Đen Tối - Ưu đãi huỷ diệt 11k/vé Anh Trai
                      </a>
                    </Col>
                  </Row>
                  <Row gutter={[5, 5]} className="mt-5">
                    <Col span={8}>
                      <img
                        className="rounded-md bg-center w-13 bg-cover object-cover"
                        src={require("../../../assets/thumnail/khuyenmai_7.jpg")}
                        alt=""
                      />
                    </Col>
                    <Col span={16}>
                      {" "}
                      <a href="" className="ml-2 text-md font-semibold mt-3 block hover:text-orange-600">
                        [CyberBooking] NHẬP MÃ 'PSM30K' - Giảm ngay 30k khi đặt vé Pháp Sư
                      </a>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>

            <div className="seemore flex justify-center">
              <button className="block py-2 px-8 rounded-md mt-5 border btn_seemore text-md font-semibold cursor-pointer">
                XEM THÊM
              </button>
            </div>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}
