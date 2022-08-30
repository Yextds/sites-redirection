function seed() {
  return Date.now() + Math.floor(1000 * Math.random());
}

function pixelURL(data) {
  data.v = seed();
  let p = '//realtimeanalytics.yext.com/store_pagespixel?product=sites';
  for (var key in data) {
    if (data.hasOwnProperty(key) && !!data[key]) {
      p += `&${key}=${encodeURIComponent(data[key])}`;
    }
  }

  return p;
}

function getCookie(cookie_name) {
  let name = cookie_name + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

window.trackAnalytics = (businessId, siteId, entityId) => {
  // if (isStaging()) {
  //   return;
  // }

  var jsonData = {
    'pagesReferrer': window.document.referrer,
    'pageurl': window.location.pathname,
    'eventType': "pageview",
    'businessids': businessId,
    'siteId': siteId,
    'ids': entityId,
    '_yfpc': getCookie("_yfpc"),
  };
    
  var pixel = pixelURL(jsonData);
  const px = document.createElement("img");
  px.src = pixel;
  px.style.width = '0';
  px.style.height = '0';
  px.style.position = 'absolute';
  px.alt = '';
  document.body.appendChild(px);
  // console.log("trackAnalytics fired");
  // console.log(jsonData);
};