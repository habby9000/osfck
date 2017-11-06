/*
 * blueimp Gallery Demo JS
 * https://github.com/blueimp/Gallery
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */

/* global blueimp, $ */

$(function () {
  'use strict'

  // Load demo images from flickr:
  $.ajax({
    url: 'https://api.flickr.com/services/rest/',
    data: {
      format: 'json',
      method: 'flickr.interestingness.getList',
      api_key: '7617adae70159d09ba78cfec73c13be3' // jshint ignore:line
    },
    dataType: 'jsonp',
    jsonp: 'jsoncallback'
  }).done(function (result) {
    var carouselLinks = []
    var linksContainer = $('#links')
    var baseUrl
    // Add the demo images as links with thumbnails to the page:
    $.each(result.photos.photo, function (index, photo) {
      baseUrl = 'https://farm' + photo.farm + '.static.flickr.com/' +
      photo.server + '/' + photo.id + '_' + photo.secret
      $('<a/>')
        .append($('<img>').prop('src', baseUrl + '_s.jpg'))
        .prop('href', baseUrl + '_b.jpg')
        .prop('title', photo.title)
        .attr('data-gallery', '')
        .appendTo(linksContainer)
      carouselLinks.push({
        href: baseUrl + '_c.jpg',
        title: photo.title
      })
    })
    // Initialize the Gallery as image carousel:
    blueimp.Gallery(carouselLinks, {
      container: '#blueimp-image-carousel',
      carousel: true
    })
  })

  // Initialize the Gallery as video carousel:
  blueimp.Gallery([
    {
      title: '1',
      href: 'https://archive.org/download/Sintel/' +
        'sintel-2048-surround.mp4',
      type: 'video/mp4',
      poster: 'http://image.chosun.com/sitedata/image/201704/18/2017041801159_0.jpg'
    },
    {
      title: '2',
      href: 'https://upload.wikimedia.org/wikipedia/commons/c/c0/' +
        'Big_Buck_Bunny_4K.webm',
      type: 'video/webm',
      poster: 'http://image.chosun.com/sitedata/image/201704/18/2017041801159_1.jpg'
    },
    {
      title: '3',
      href: 'https://upload.wikimedia.org/wikipedia/commons/8/83/' +
        'Elephants_Dream_%28high_quality%29.ogv',
      type: 'video/ogg',
      poster: 'http://image.chosun.com/sitedata/image/201704/18/2017041801159_3.jpg'
    },
    {
      title: '4',
      type: 'text/html',
      vimeo: '73686146',
      poster: 'http://image.chosun.com/sitedata/image/201704/18/2017041801159_4.jpg'
    },
    {
      title: '5',
      type: 'text/html',
      vimeo: '73686146',
      poster: 'http://image.chosun.com/sitedata/image/201704/18/2017041801159_5.jpg'
    },
    {
      title: '6',
      type: 'text/html',
      vimeo: '73686146',
      poster: 'http://image.chosun.com/sitedata/image/201704/18/2017041801159_6.jpg'
    },
    {
      title: '7',
      type: 'text/html',
      vimeo: '73686146',
      poster: 'http://image.chosun.com/sitedata/image/201704/18/2017041801159_7.jpg'
    },
    {
      title: '8',
      type: 'text/html',
      vimeo: '73686146',
      poster: 'http://image.chosun.com/sitedata/image/201704/18/2017041801159_8.jpg'
    },
    {
      title: '9',
      type: 'text/html',
      vimeo: '73686146',
      poster: 'http://image.chosun.com/sitedata/image/201704/18/2017041801159_9.jpg'
    }
    
  ], {
    container: '#blueimp-video-carousel',
    carousel: true
  })
})
