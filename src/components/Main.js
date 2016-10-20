require('normalize.css/normalize.css');
require('styles/App.less');

import React from 'react';

//获取图片路径
// let imageDatas = require('../data/imageDatas.json');
// let yeomanImage = require('../images/yeoman.png');
let imageDatas = require('json!../data/imageDatas.json');

// 把所有的图片名转换为图片路径
function genImageURL(imageDataArr) {
  for (var i = 0, j = imageDataArr.length; i < j; i++) {
    var singleImageData = imageDataArr[i];
    singleImageData.imageURL = require('../images/' + singleImageData.fileName);

    imageDataArr[i] = singleImageData;
  }
  return imageDataArr; // body...
}
imageDatas = genImageURL(imageDatas);

class AppComponent extends React.Component {
  render() {
    return (
        <section className="stage" ref="stage">
            <section className="img-sec">
                {imgFigures}
            </section>
            <nav className="controller-nav">
                {controllerUnits}
            </nav>
        </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
