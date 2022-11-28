import renderer from "react-test-renderer";
import React from "react";
import Film from "../../components/Film/Film";
const props = {
  biDanh: "avengers-infinity-war",
  dangChieu: false,
  danhGia: 5,
  hinhAnh:
    "https://movienew.cybersoft.edu.vn/hinhanh/avengers-infinity-war.jpg",
  hot: true,
  maNhom: "GP00",
  maPhim: 1296,
  moTa: "Biệt đội siêu anh hùng Avengers và những đồng minh sẽ phải sẵn sàng hi sinh tính mạng để chống lại siêu ác nhân hùng mạnh Thanos trước khi hắn phá huỷ mọi thứ và đặt dấu chấm hết cho vũ trụ. ",
  ngayKhoiChieu: "2019-07-29T00:00:00",
  sapChieu: true,
  tenPhim: "Avengers: Infinity War ",
  trailer: "https://www.youtube.com/embed/DKqu9qc-5f4",
};

describe("Components > Film", () => {
  it("Render a snapshot for Link use renderer", () => {
    const tree = renderer.create(<Film {...props} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
