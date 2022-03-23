$(document).ready(function () {
    $('#library').hover(() => {
      $('#library-txt').fadeIn(1000);
      $('#overlay1').slideDown(1000);
    }, () => {
      $('#library-txt').fadeOut(1000);
      $('#overlay1').slideUp(1000);
    });
    $('#hall').hover(() => {
      $('#hall-txt').fadeIn(1000);
      $('#overlay2').slideDown(1000);
    }, () => {
      $('#hall-txt').fadeOut(1000);
      $('#overlay2').slideUp(1000);
    });
    $('#internet').hover(() => {
      $('#internet-txt').fadeIn(1000);
      $('#overlay3').slideDown(1000);
    }, () => {
      $('#internet-txt').fadeOut(1000);
      $('#overlay3').slideUp(1000);
    });
    $('#trans-p').hover(() => {
      $('#trans-p-txt').fadeIn(1000);
      $('#overlay4').slideDown(1000);
    }, () => {
      $('#trans-p-txt').fadeOut(1000);
      $('#overlay4').slideUp(1000);
    })
    $('#cleaner').hover(() => {
      $('#cleaner-txt').fadeIn(1000);
      $('#overlay5').slideDown(1000);
    }, () => {
      $('#cleaner-txt').fadeOut(1000);
      $('#overlay5').slideUp(1000);
    })
    $('#pool1').hover(() => {
      $('#pool1-txt').fadeIn(1000);
      $('#overlay6').slideDown(1000);
    }, () => {
      $('#pool1-txt').fadeOut(1000);
      $('#overlay6').slideUp(1000);
    })
})