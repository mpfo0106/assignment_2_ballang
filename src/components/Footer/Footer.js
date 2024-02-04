import React from "react";

function Footer() {
  return (
    <section className="bg-black text-white p-4 flex justify-between items-center">
      <div>
        <ul className="flex">
          <li className="mr-4">회사소개</li>
          <li className="mr-4">제휴문의</li>
          <li className="mr-4">고객센터</li>
          <li className="mr-4">이용약관</li>
          <li className="mr-4">개인정보처리방침</li>
        </ul>
      </div>
    </section>
  );
}

export default Footer;
