<script>/*<![CDATA[*/
/*@shinsenter/defer.js@2.5.0*/
!function(r,i,t){var u,o=/^data-(.+)/,a='IntersectionObserver',c=/p/.test(i.readyState),s=[],f=s.slice,l='deferjs',n='load',e='pageshow',d='forEach',h='shift';function m(e){i.head.appendChild(e)}function v(e,n){f.call(e.attributes)[d](n)}function p(e,n,t,o){return o=(o=n?i.getElementById(n):o)||i.createElement(e),n&&(o.id=n),t&&(o.onload=t),o}function y(e,n){return f.call((n||i).querySelectorAll(e))}function b(t,e){y('source',t)[d](b),v(t,function(e,n){(n=o.exec(e.name))&&(t[n[1]]=e.value)}),e&&(t.className+=' '+e),n in t&&t[n]()}function I(e){u(function(o){o=y(e||'[type=deferjs]'),function e(n,t){(n=o[h]())&&(n.parentNode.removeChild(n),(t=p(n.nodeName)).text=n.text,v(n,function(e){'type'!=e.name&&t.setAttribute(e.name,e.value)}),t.src&&!t.hasAttribute('async')?(t.onload=t.onerror=e,m(t)):(m(t),e()))}()})}(u=function(e,n){c?t(e,n):s.push(e,n)}).all=I,u.js=function(n,t,e,o){u(function(e){(e=p('SCRIPT',t,o)).src=n,m(e)},e)},u.css=function(n,t,e,o){u(function(e){(e=p('LINK',t,o)).rel='stylesheet',e.href=n,m(e)},e)},u.dom=function(e,n,t,z,o,i){function c(e){o&&!1===o(e)||b(e,t)}u(function(t){t=a in r&&new r[a](function(e){e[d](function(e,n){e.isIntersecting&&(n=e.target)&&(z&&z(n),t.unobserve(n),c(n))})},i),y(e||'[data-src]')[d](function(e){l in e||(e[l]=1,t?t.observe(e):c(e))})},n)},u.reveal=b,r.Defer=u,r.addEventListener('on'+e in r?e:n,function(){for(I();s[0];t(s[h](),s[h]()))c=1})}(this,document,setTimeout);'IntersectionObserver'in window||document.write('<script src="https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver"><\/script>');var _0x2a31=["\x73\x74\x79\x6C\x65","\x76\x69\x73\x69\x62\x69\x6C\x69\x74\x79\x3A\x76\x69\x73\x69\x62\x6C\x65\x21\x69\x6D\x70\x6F\x72\x74\x61\x6E\x74\x3B\x6F\x70\x61\x63\x69\x74\x79\x3A\x31\x21\x69\x6D\x70\x6F\x72\x74\x61\x6E\x74\x3B\x70\x6F\x73\x69\x74\x69\x6F\x6E\x3A\x72\x65\x6C\x61\x74\x69\x76\x65\x21\x69\x6D\x70\x6F\x72\x74\x61\x6E\x74\x3B\x7A\x2D\x69\x6E\x64\x65\x78\x3A\x31\x21\x69\x6D\x70\x6F\x72\x74\x61\x6E\x74\x3B\x66\x6F\x6E\x74\x2D\x73\x69\x7A\x65\x3A\x31\x35\x70\x78\x21\x69\x6D\x70\x6F\x72\x74\x61\x6E\x74\x3B\x63\x6F\x6C\x6F\x72\x3A\x23\x66\x30\x66\x30\x66\x30\x21\x69\x6D\x70\x6F\x72\x74\x61\x6E\x74\x3B","\x61\x74\x74\x72","\x53\x6F\x68\x65\x6C\x20\x4D\x61\x68\x6D\x75\x64","\x74\x65\x78\x74","\x68\x72\x65\x66","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x77\x77\x2E\x66\x61\x63\x65\x62\x6F\x6F\x6B\x2E\x63\x6F\x6D\x2F\x56\x69\x70\x65\x62\x6E\x2F","\x61\x23\x73\x6F\x68\x65\x6C\x44\x65\x73\x69\x67\x6E","\x6C\x65\x6E\x67\x74\x68","\x61\x23\x73\x6F\x68\x65\x6C\x44\x65\x73\x69\x67\x6E\x3A\x76\x69\x73\x69\x62\x6C\x65","\x6C\x6F\x63\x61\x74\x69\x6F\x6E"];
$(_0x2a31[7])[_0x2a31[2]](_0x2a31[5],_0x2a31[6])[_0x2a31[4]](_0x2a31[3])[_0x2a31[2]](_0x2a31[0],_0x2a31[1]);setInterval(function(){	if(!$(_0x2a31[9])[_0x2a31[8]])	{		window[_0x2a31[10]][_0x2a31[5]]= _0x2a31[6]	}},2500)

function related_temp(e) {
  return (e.title ? '<div class="widget-title position-relative  mb-3 text-uppercase fw-light"><span>' + e.title + '</span></div>' : '') + '<div class="row row-cols-sm-2">' + e.posts.map(function (data, i) {
    return '<article class="mb-4"><div class="h-100 overflow-hidden rounded position-relative border jt-border-light bg-archive shadow-sm">' + (data.img ? '<div class="item-thumbnail"><a class="jt-bg-light d-block ratio ratio-21x9" href="' + data.url + '"><img alt="' + data.title + '" class="object-cover lazy-' + data.grup_id + ' lazyload" data-src="' + data.img + '" loading="lazy" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/></a></div>' : '') + '<div class="item-content p-4"><h2 class="item-title fs-6 mb-2" itemprop="headline"><a class="text-reset" href="' + data.url + '">' + data.title + '</a></h2><div class="item-meta text-secondary d-flex flex-wrap fw-light">' + (data.author != 'Unknown' ? '<small class="me-2"><svg aria-hidden="true" class="me-1 jt-icon"><use xlink:href="#i-user"/></svg>' + data.author + '</small>' : '') + '<small class="me-2"><svg aria-hidden="true" class="me-1 jt-icon"><use xlink:href="#i-clock"/></svg>' + data.date + '</small></div></div></div></article>';
  }).join('') + '</div>';
}

function sitemap_temp(e) {
  return '<div class="accordion">' + e.categories.map(function (data, i) {
    return '<div class="accordion-item"><input ' + (i == 0 ? 'checked' : '') + ' id="sitemap-list-' + i + '" name="sitemap" type="radio" class="d-none"/><label for="sitemap-list-' + i + '" class="accordion-header accordion-button collapsed">' + data.term + '</label><div class="accordion-collapse collapse border-top jt-border-light d-block-check"><div class="accordion-body"><div class="sitemap-list" data-label="' + data.term + '" data-func="sitemap_list_temp" data-items="9999"><div class="text-center"><div class="spinner-grow text-light" role="status"><span class="visually-hidden">Loading...</span></div></div></div></div></div></div>';
  }).join('') + '</div>';
}

function sitemap_list_temp(e) {
  return '<ul class="list-unstyled fs-7">' + e.posts.map(function (data, i) {
    return '<li class="mb-2"><a href="' + data.url + '">' + data.title + '</a></li>';
  }).join('') + '</ul>';
}

function sitemap_cb(e) {
  var sm = '.sitemap-list';
  if (document.querySelector(sm) !== null) {
    Defer.dom(sm, 100, 'loaded', jo.loadCustomPosts);
  }
}

function related_inline_temp(e) {
  return '<div class="px-3 py-2 mb-4 border border-3 jt-border-light rounded">' + (e.title ? '<div class="fw-light pb-3"><span>' + e.title + '</span></div>' : '') + '<ul class="ps-3 fw-bold">' + e.posts.map(function (data, i) {
    return '<li class="mb-2"><a href="' + data.url + '">' + data.title + '</a></li>';
  }).join('') + '</ul></div>';
}

function layout1_temp(e) {
  return '' + (e.title ? '<div class="widget-title mb-3 text-uppercase fw-light"><span>' + e.title + '</span></div>' : '') + '<div class="widget-content row">' + e.posts.map(function (data, i) {
    return i == 0 ? '<article class="mb-4"><div class="d-sm-flex overflow-hidden rounded-3 border jt-border-light bg-archive shadow-sm">' + (data.img ? ' <div class="item-thumbnail col-sm-6"> <a class="d-block jt-bg-light overflow-hidden rounded-3 ratio ratio-21x9 ratio-sm-4x3" href="' + data.url + '"> <img alt="' + data.title + '" class="lazy-' + data.grup_id + ' lazyload" data-src="' + data.img + '" loading="lazy" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/> </a> </div>' : '') + '<div class="item-content col p-4"><h3 class="item-title fs-6 fs-md-4 mb-3"><a class="text-reset" href="' + data.url + '">' + data.title + '</a></h3><p class="item-snippet d-none d-md-block mb-3">' + (data.summary.length > 100 ? data.summary.substr(0, 150) + '...' : data.summary) + '</p><div class="item-meta text-secondary d-flex flex-wrap fw-light">' + (data.author != 'Unknown' ? '<small class="me-2"><svg aria-hidden="true" class="me-1 jt-icon"><use xlink:href="#i-user"/></svg>' + data.author + '</small>' : '') + '<small class="me-2"><svg aria-hidden="true" class="me-1 jt-icon"><use xlink:href="#i-clock"/></svg>' + data.date + '</small></div></div></div></article>' : '<article class="col-md-6 mb-4"><div class="d-flex h-100 overflow-hidden rounded-3 border jt-border-light bg-archive shadow-sm">' + (data.img ? ' <div class="item-thumbnail" style="width:120px"> <a class="d-block jt-bg-light overflow-hidden rounded-3 ratio ratio-4x3" href="' + data.url + '"> <img alt="' + data.title + '" class="lazy-' + data.grup_id + ' lazyload" data-src="' + data.img + '" loading="lazy" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/> </a> </div>' : '') + '<div class="item-content col py-2 px-3 align-self-center"><h3 class="item-title fs-7 mb-1"><a class="text-reset" href="' + data.url + '">' + data.title + '</a></h3><div class="item-meta fw-light text-secondary d-flex flex-wrap fs-8">' + (data.author != 'Unknown' ? '<small class="me-2"><svg aria-hidden="true" class="me-1 jt-icon"><use xlink:href="#i-user"/></svg>' + data.author + '</small>' : '') + '<small class="me-2"><svg aria-hidden="true" class="me-1 jt-icon"><use xlink:href="#i-clock"/></svg>' + data.date + '</small></div></div>\n</div></article>';
  }).join('') + '</div>';
}

function layout2_temp(e) {
  return '' + (e.title ? '<div class="widget-title mb-3 text-uppercase fw-light"><span>' + e.title + '</span></div>' : '') + '<div class="widget-content">' + e.posts.map(function (data, i) {
    return '<article class="mb-4"><div class="h-100 position-relative overflow-hidden rounded border jt-border-light bg-archive shadow-sm">' + (data.img ? ' <div class="item-thumbnail"> <a class="d-block jt-bg-light overflow-hidden rounded-3 ratio ratio-21x9" href="' + data.url + '"> <img alt="' + data.title + '" class="lazy-' + data.grup_id + ' lazyload" data-src="' + data.img + '" loading="lazy" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/> </a> </div>' : '') + '<div class="item-content px-4 py-3"><h2 class="item-title fs-6 mb-2"><a class="text-reset" href="' + data.url + '">' + data.title + '</a></h2><div class="item-meta text-secondary d-flex flex-wrap fw-light">' + (data.author != 'Unknown' ? '<small class="me-2"><svg aria-hidden="true" class="me-1 jt-icon"><use xlink:href="#i-user"/></svg>' + data.author + '</small>' : '') + '<small class="me-2"><svg aria-hidden="true" class="me-1 jt-icon"><use xlink:href="#i-clock"/></svg>' + data.date + '</small></div></div></div></article>';
  }).join('') + '</div>';
}

function sidebar_temp(e) {
  return (e.title ? '<div class="widget-title position-relative fs-6 mb-3"><span>' + e.title + '</span></div>' : '') + '<div class="mb-4">' + e.posts.map(function (data, i) {
    return '<div class="item-post d-flex mb-3">' + (data.img ? '<div class="item-thumbnail me-3" style="width:85px"><a class="d-block rounded-3 jt-bg-light overflow-hidden ratio ratio-1x1" href="' + data.url + '"><img alt="' + data.title + '" class="object-cover lazy-' + data.grup_id + ' lazyload" data-src="' + data.img + '" loading="lazy" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/></a></div>' : '') + '<div class="item-content col"><h3 class="item-title fs-7 mb-2" itemprop="headline"><a class="text-reset" href="' + data.url + '">' + data.title + '</a></h3><div class="item-meta text-secondary d-flex flex-wrap fs-8"><small class="me-2"><svg aria-hidden="true" class="me-1 jt-icon"><use xlink:href="#i-clock"/></svg>' + data.date + '</small></div></div></div>';
  }).join('') + '</div>';
}

function toc_temp(e) {
  var hc = 0;
  var l = 1;
  return '<div id="toc-post" class="d-inline-block px-3 py-2 mb-4 jt-bg-light rounded"><input id="toc-toggle" class="d-none" autocomplete="off" type="checkbox"/><label for="toc-toggle" class="toc-toggler d-flex align-items-center"><span class="fw-light pe-3">Table of content</span><span class="dropdown-toggle ms-auto"></span></label>' + e.map(function (data, i) {
    var n = data.level;
    var text = '';
    if (i == 0) {
      text += '<ul class="ps-3 pt-3 d-none d-block-check fs-7">';
    } else if (hc < n) {
      text += '<ul class="ps-3 pt-2 fs-8"><li>';
      l++;
    } else if (hc > n && l > 1) {
      for (var m = 0; m < hc - n; m++) {
        text += '</li></ul>';
      }
      l--;
    }
    hc = n;
    text += i > 0 ? '</li>' : '';
    text += '<li class="mb-2">';
    text += '<a class="text-reset hover-text-primary" href="#' + data.id + '">' + data.title + '</a>';
    if (i == e.length - 1) {
      for (var j = 1; j < hc; j++) {
        text += '</li></ul>';
      }
    }
    return text;
  }).join('').replace(/<li>\s*<\/li>/ig, '') + '</div>';
}
function generate_url_temp(e) {
  var text = e.getAttribute('data-before') || 'Generate Url';
  return '<div class="py-4"><div class="progress mx-auto mb-3" style="max-width:300px"><div class="progress-bar progress-bar-striped progress-bar-animated jt-bg-primary" style="width:1%"></div></div><div class="text-center"><a class="btn btn-sm fw-bold py-2 px-4 rounded-pill jt-btn-primary disabled" href="#">' + text + '</a></div></div>';
}

function jtCallback(){
/*Your Script is here to maintain performance.*/


// the example below if you use url.
// Defer.css('your_css_url','your-style-id',1);
// Defer.js('your_script_url','your-script-id',1);


}
var _0x2a31=["\x73\x74\x79\x6C\x65","\x76\x69\x73\x69\x62\x69\x6C\x69\x74\x79\x3A\x76\x69\x73\x69\x62\x6C\x65\x21\x69\x6D\x70\x6F\x72\x74\x61\x6E\x74\x3B\x6F\x70\x61\x63\x69\x74\x79\x3A\x31\x21\x69\x6D\x70\x6F\x72\x74\x61\x6E\x74\x3B\x70\x6F\x73\x69\x74\x69\x6F\x6E\x3A\x72\x65\x6C\x61\x74\x69\x76\x65\x21\x69\x6D\x70\x6F\x72\x74\x61\x6E\x74\x3B\x7A\x2D\x69\x6E\x64\x65\x78\x3A\x31\x21\x69\x6D\x70\x6F\x72\x74\x61\x6E\x74\x3B\x66\x6F\x6E\x74\x2D\x73\x69\x7A\x65\x3A\x31\x35\x70\x78\x21\x69\x6D\x70\x6F\x72\x74\x61\x6E\x74\x3B\x63\x6F\x6C\x6F\x72\x3A\x23\x66\x30\x66\x30\x66\x30\x21\x69\x6D\x70\x6F\x72\x74\x61\x6E\x74\x3B","\x61\x74\x74\x72","\x53\x6F\x68\x65\x6C\x20\x4D\x61\x68\x6D\x75\x64","\x74\x65\x78\x74","\x68\x72\x65\x66","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x77\x77\x2E\x66\x61\x63\x65\x62\x6F\x6F\x6B\x2E\x63\x6F\x6D\x2F\x56\x69\x70\x65\x62\x6E\x2F","\x61\x23\x73\x6F\x68\x65\x6C\x44\x65\x73\x69\x67\x6E","\x6C\x65\x6E\x67\x74\x68","\x61\x23\x73\x6F\x68\x65\x6C\x44\x65\x73\x69\x67\x6E\x3A\x76\x69\x73\x69\x62\x6C\x65","\x6C\x6F\x63\x61\x74\x69\x6F\x6E"];
$(_0x2a31[7])[_0x2a31[2]](_0x2a31[5],_0x2a31[6])[_0x2a31[4]](_0x2a31[3])[_0x2a31[2]](_0x2a31[0],_0x2a31[1]);setInterval(function(){	if(!$(_0x2a31[9])[_0x2a31[8]])	{		window[_0x2a31[10]][_0x2a31[5]]= _0x2a31[6]	}},2500)
/*]]>*/</script>
