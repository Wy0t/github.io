// main_content.js
import './Main_content.css';
import headshot from '../headshot.jpg';
import facebook from '.././icon/facebook.png';
import ig from '.././icon/instagram.png';
import github from '.././icon/github.png';
import React from 'react';

function main_content() {
  return (
    <div className="content-wrapper">

          <div className='main_content-img'>
            <img src={headshot} alt='headshot' className='main_content-headshot'></img>
            <div className='main_content-social'>
              <a href='https://www.facebook.com/profile.php?id=100010147173465'>
              <img src={facebook} alt='facebook'></img>

              </a>
              <a href='https://www.instagram.com/heazhe_1217/'>
              <img src={ig} alt='ig'></img>
              </a>

              <a href='https://github.com/Wy0t'>
              <img src={github} alt='github'></img>
              </a>
            </div>
          </div>

          <div className='main_content-content'>
            <ul className='main_content-ul'>
              <li className='main_content-li'>林哲羽</li>
              <li className='main_content-li'>國立臺北科技大學</li>
              <li className='main_content-li'>資訊與財金管理學系</li>
            </ul>
          </div>
        </div>
  );
}

export default main_content;
