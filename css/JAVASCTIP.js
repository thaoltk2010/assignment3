"use strict";
// ĐOẠN CODE XỬ LÝ EMAIL
// lấy phần tử có class là btn-submit và gán cho biến btn_submit
let btn_submit = document.getElementsByClassName("btn-submit");
// btn_submit[0] là phần tử đầu tiên từ trên xuống dưới
// addEventListener là gán sự kiện cho phần tử đó
// code dưới là click
btn_submit[0].addEventListener("click", function (e) {
  // chuỗi regex dùng để xác nhận email
  // i ở cuối cùng là không phân biệt chữ hoa chữ thường
  // cú pháp: /^{nội dung}$/
  // nội dung là chuỗi regex có thể search trên google
  // Nếu không có chữ i thì có phân biệt hoa thường
  let regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
  // regex.test là kiểm tra email xem có đúng hay không, dựa trên chuỗi regex
  // nếu đúng định dạng email (theo chuỗi regex) sẽ trả về true
  // trim là cắt khoảng trắng 2 đầu
  // document.getElementsByClassName("email")[0].value là lấy giá trị nhập vào của phần tử đầu tiên có class là email
  // nhưng phải là input mới lấy giá trị được
  if (regex.test(document.getElementsByClassName("email")[0].value.trim())) {
    // set lại css display là block
    document.getElementsByClassName("info")[0].style.display = "block";
    // set lại css display là none
    document.getElementsByClassName("error")[0].style.display = "";
    // kiểm tra xem có đúng email không
    if (
      document.getElementsByClassName("email")[0].value.trim() ==
      "thaoltkFX21948@funix.edu.vn"
    ) {
      // set lại css display
      document.getElementsByClassName("container")[2].style.display = "block";
      document.getElementsByClassName("container")[3].style.display = "none";
    } else {
      // set lại css display
      document.getElementsByClassName("info")[0].style.display = "none";
      document.getElementsByClassName("error")[0].style.display = "block";
      // set lại content html
      // ví dụ: <div class='error'>Email không chính xác</div>
      // Email không chính xác là content
      document.getElementsByClassName("error")[0].innerHTML =
        "Email không chính xác";
    }
  } else {
    // set lại display và content
    document.getElementsByClassName("info")[0].style.display = "none";
    document.getElementsByClassName("error")[0].style.display = "block";
    document.getElementsByClassName("error")[0].innerHTML =
      "Email không hợp lệ";
  }
});
// đoạn code xử lý ẨN THÔNG TIN CHỖ KINH NGHIỆM, KỸ NĂNG,....
let btn = document.getElementsByClassName("view-more");
let content = document.getElementsByClassName("content");
btn[0].addEventListener("click", function (e) {
  // để rỗng hoặc none đều được
  if (content[0].style.display == "") {
    content[0].style.display = "block";
    btn[0].innerHTML =
      "<image src = 'images/up.png' width='20px'></image>VIEW LESS";
  } else {
    content[0].style.display = "";
    btn[0].innerHTML =
      "<image src = 'images/down.png' width='20px'></image>VIEW MORE";
  }
});
btn[1].addEventListener("click", function (e) {
  if (content[1].style.display == "") {
    content[1].style.display = "block";
    btn[1].innerHTML =
      "<image src = 'images/up.png' width='20px'></image>VIEW LESS";
  } else {
    content[1].style.display = "";
    btn[1].innerHTML =
      "<image src = 'images/down.png' width='20px'></image>VIEW MORE";
  }
});
btn[2].addEventListener("click", function (e) {
  if (content[2].style.display == "") {
    content[2].style.display = "block";
    btn[2].innerHTML =
      "<image src = 'images/up.png' width='20px'></image>VIEW LESS";
  } else {
    content[2].style.display = "";
    btn[2].innerHTML =
      "<image src = 'images/down.png' width='20px'></image>VIEW MORE";
  }
});
btn[3].addEventListener("click", function (e) {
  if (content[3].style.display == "") {
    content[3].style.display = "block";
    btn[3].innerHTML =
      "<image src = 'images/up.png' width='20px'></image>VIEW LESS";
  } else {
    content[3].style.display = "";
    btn[3].innerHTML =
      "<image src = 'images/down.png' width='20px'></image>VIEW MORE";
  }
});
btn[4].addEventListener("click", function (e) {
  if (content[4].style.display == "") {
    content[4].style.display = "block";
    btn[4].innerHTML =
      "<image src = 'images/up.png' width='20px'></image>VIEW LESS";
  } else {
    content[4].style.display = "";
    btn[4].innerHTML =
      "<image src = 'images/down.png' width='20px'></image>VIEW MORE";
  }
});
btn[5].addEventListener("click", function (e) {
  if (content[5].style.display == "") {
    content[5].style.display = "block";
    btn[5].innerHTML =
      "<image src = 'images/up.png' width='20px'></image>VIEW LESS";
  } else {
    content[5].style.display = "";
    btn[5].innerHTML =
      "<image src = 'images/down.png' width='20px'></image>VIEW MORE";
  }
});
