// ==UserScript==
// @name         微信读书注释提取 URL
// @namespace    https://github.com/shanyuhai123
// @version      0.1.1
// @description  从微信读书的注释中提取 URL，使其可点击跳转
// @author       shanyuhai123
// @match        https://weread.qq.com/web/reader/*
// @grant        none
// ==/UserScript==

(function () {
  'use strict'

  const observer = new MutationObserver(function () {
    document.querySelectorAll('.reader_footerNote_text').forEach(el => {
      const urlReg = /((https?):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?/img

      const template = url => `<a href="${url}" target="_blank">${url}</a>`

      el.innerHTML = el.textContent.replace(urlReg, (url) => template(url))
    })
  })
  const root = document.querySelector('body')
  const options = {
    childList: true
  }
  observer.observe(root, options)
})()
