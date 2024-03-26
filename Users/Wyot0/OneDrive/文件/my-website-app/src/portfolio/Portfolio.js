// Portfolio.js
import './Portfolio.css';
import React from 'react';

function Portfolio() {
  return (
    <nav className ="Portfolio">
      <h1>專案經驗</h1>
        <ul className='Portfolio-ul'>
            <a href='https://github.com/Wy0t/DcardGo'>
            <h3><li>廣告投放工具</li></h3>
            </a>
            <p>使用 Golang 整合了第三方 API，實現自動化廣告投放和監控功能</p>
            <a href='https://wy0t.github.io/github.io/'>
            <h3><li>個人網頁架設</li></h3>
            </a>
            <p>使用React前端寫好後上傳至github page</p>

            <h3><li>大學專題：災難辨識</li></h3>
            <p>使用AI對災難現場進行辨識(Tensorflow學習中)</p>
        </ul>
    </nav>
  );
}

export default Portfolio;
