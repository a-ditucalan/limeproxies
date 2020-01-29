import React, { Component } from 'react'

import ImageObserver from '../layout/observer-image-target'


const logo = {
  white: {
    svg: require('../images/logo_white.svg'),
    png: require('../images/logo_white.png')
  },
  blue: {
    svg: require('../images/logo_blue.svg'),
    png: require('../images/logo_blue.png')
  },
  black: {
    svg: require('../images/logo_black.svg'),
    png: require('../images/logo_black.png')
  }
}

const glyphs = {
  white: {
    svg: require('../images/glyphs_white.svg'),
    png: require('../images/glyphs_white.png')
  },
  blue: {
    svg: require('../images/glyphs_blue.svg'),
    png: require('../images/glyphs_blue.png')
  },
  black: {
    svg: require('../images/glyphs_black.svg'),
    png: require('../images/glyphs_black.png')
  }
}

export default class AboutLogos extends Component {
  copyFirstImg = () => {
    this.refs.first.select();
    document.execCommand('copy');
    console.log('1')
    return false;
    
  }

  copySecondImg = () => {
    this.refs.second.select();
    document.execCommand('copy');
    console.log('2')
    return false;
  }

  copyThirdImg = () => {
    this.refs.third.select();
    document.execCommand('copy');
    console.log('3')
    return false;
  }

  copyFourthImg = () => {
    this.refs.fourth.select();
    document.execCommand('copy');
    console.log('4')
    return false;
  }

  render() {

    let first_banner = 'https://purple-rain.netlify.com/assets/banner_size_1.png'
    let second_banner = 'https://purple-rain.netlify.com/assets/banner_size_1.png'
    let third_banner = 'https://purple-rain.netlify.com/assets/banner_size_3.png'
    let fourth_banner = 'https://purple-rain.netlify.com/assets/banner_size_4.png'

    return (
      <div>
        <div className="ui container">
          <div className="about_info_wrap__logos about_info_logos">
            <div className="about_info_logos__title">
              <h2 className="title t-h2">Our Logos</h2>
            </div>
            <div className="about_info_logos__wrapper about_info_logos_wrap">


              <div className="about_info_logos_wrap__item about_info_logos_item">
                <img src={logo.white.svg} alt="Logo" />                
                <a href={logo.white.svg} download="logo_white.svg">.svg</a>
                <a href={logo.white.png} download="logo_white.png">.png</a>
              </div>

              <div className="about_info_logos_wrap__item about_info_logos_item">
                <img src={logo.blue.svg} alt="Logo" />                
                <a href={logo.blue.svg} download="logo_blue.svg">.svg</a>
                <a href={logo.blue.png} download="logo_blue.png">.png</a>
              </div>

              <div className="about_info_logos_wrap__item about_info_logos_item">
                <img src={logo.black.svg} alt="Logo" />                
                <a href={logo.black.svg} download="logo_black.svg">.svg</a>
                <a href={logo.black.png} download="logo_black.png">.png</a>
              </div>


            </div>
            <div className="about_info_logos__title">
              <h2 className="title t-h2">Glyphs</h2>
            </div>
            <div className="about_info_logos__wrapper about_info_logos_wrap">

              <div className="about_info_logos_wrap__item about_info_logos_item">
                <ImageObserver src={glyphs.white.svg} altString="Logo" />                
                <a href={glyphs.white.svg} download="glyphs_white.svg">.svg</a>
                <a href={glyphs.white.png} download="glyphs_white.svg">.png</a>
              </div>

              <div className="about_info_logos_wrap__item about_info_logos_item">
                <ImageObserver src={glyphs.blue.svg} altString="Logo" />                
                <a href={glyphs.blue.svg} download="glyphs_blue.svg">.svg</a>
                <a href={glyphs.blue.png} download="glyphs_blue.png">.png</a>
              </div>

              <div className="about_info_logos_wrap__item about_info_logos_item">
                <ImageObserver src={glyphs.black.svg} altString="Logo" />                
                <a href={glyphs.black.svg} download="glyphs_black.svg">.svg</a>
                <a href={glyphs.black.png} download="glyphs_black.png">.png</a>
              </div>
             
            </div>
          </div>
        </div>
        <div className="about_info_wrap__banners about_info_banners bg-pastel-lime">
          <div className="ui container">
            <div className="about_info_banners__title">
              <h2 className="title t-h2">Banners</h2>
            </div>
            <div className="about_info_banners__item about_info_banners_item">
              <h3 className="title t-h4">Size 728x90px</h3>
              <div className="about_info_banners_item__image">
                <ImageObserver src={require("../images/banner_size_1.png")} altString="Banner" />

                <button className="btn-copy" onClick={ this.copyFirstImg }>
                    Copy Link
                    <input
                    ref="first"
                    type="text"
                    defaultValue={ first_banner }
                    style={{ position: 'fixed', top: '-1000px', width: '350px' }} />
                </button>

              </div>
              <div className="about_info_banners_item__btns">
                <a href="#/"><ImageObserver src={require("../images/icon_logo_copy.svg")} altString="Icon" /> Click to copy code</a>
                <a href="/assets/banner_size_1.png" download="banner_728x90.png"><ImageObserver src={require("../images/icon_copy_download.svg")} altString="Icon" /> Download</a>
              </div>
            </div>
            <div className="about_info_banners__item about_info_banners_item">
              <h3 className="title t-h4">Size 468x60px</h3>
              <div className="about_info_banners_item__image">
                <ImageObserver src={require("../images/banner_size_1.png")} altString="Banner" />
                
                <button className="btn-copy" onClick={ this.copySecondImg }>
                    Copy Link
                    <input
                    ref="second"
                    type="text"
                    defaultValue={ second_banner }
                    style={{ position: 'fixed', top: '-1000px', width: '350px' }} />
                </button>

              </div>
              <div className="about_info_banners_item__btns">
                <a href="#/"><ImageObserver src={require("../images/icon_logo_copy.svg")} altString="Icon" /> Click to copy code</a>
                <a href="/assets/banner_size_1.png" download="banner_468x60.png"><ImageObserver src={require("../images/icon_copy_download.svg")} altString="Icon" />Download</a>
              </div>
            </div>
            <div className="about_info_banners__item about_info_banners_item">
              <h3 className="title t-h4">Size 300x250px</h3>
              <div className="about_info_banners_item__image">
                <ImageObserver src={require("../images/banner_size_3.png")} altString="Banner" />

                <button className="btn-copy" onClick={ this.copyThirdImg }>
                    Copy Link
                    <input
                    ref="third"
                    type="text"
                    defaultValue={ third_banner }
                    style={{ position: 'fixed', top: '-1000px', width: '350px' }} />
                </button>       
                
              </div>
              <div className="about_info_banners_item__btns">
                <a href="#/"><ImageObserver src={require("../images/icon_logo_copy.svg")} altString="Icon" /> Click to copy code</a>
                <a href="/assets/banner_size_3.png" download="banner_300x250.png"><ImageObserver src={require("../images/icon_copy_download.svg")} altString="Icon" /> Download</a>
              </div>
            </div>
            <div className="about_info_banners__item about_info_banners_item">
              <h3 className="title t-h4">Size 160x600px</h3>
              <div className="about_info_banners_item__image">
                <ImageObserver src={require("../images/banner_size_4.png")} altString="Banner" />   
                                
                <button className="btn-copy" onClick={ this.copyFourthImg }>
                    Copy Link
                    <input
                    ref="fourth"
                    type="text"
                    defaultValue={ fourth_banner }
                    style={{ position: 'fixed', top: '-1000px', width: '350px' }} />
                </button>  

              </div>
              <div className="about_info_banners_item__btns">
                <a href="#/"><ImageObserver src={require("../images/icon_logo_copy.svg")} altString="Icon" /> Click to copy code</a>
                <a href="/assets/banner_size_4.png" download="banner_160x600.png"><ImageObserver src={require("../images/icon_copy_download.svg")} altString="Icon" /> Download</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
