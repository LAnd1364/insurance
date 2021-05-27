$(function() {

  $('.search-form__input').focus(function() {
    $('.search-icon').addClass('search-icon--hide');
  });
 
  $('.search-form__input').focusout(function() {
    $('.search-icon').removeClass('search-icon--hide');
  });

  $('.pen-desc').hover
    (function() {
    $('.pen-icon').addClass('icon-highlight');
    },
    function() {
    $('.pen-icon').removeClass('icon-highlight');
  });
  $('.envelop-desc').hover
    (function() {
    $('.envelop-icon').addClass('icon-highlight');
    },
    function() {
    $('.envelop-icon').removeClass('icon-highlight');
  });
  
  $('.table__row').on('click', function() {
    $(this).toggleClass('table__row--checked');
    $('.table__row').removeClass('table__row--active');
    $(this).addClass('table__row--active');
  });

  $('.tabs-box__link').on('click', function(e) {
    e.preventDefault()
    $('.tabs-box__link').removeClass('tabs-box__link--active');
    $(this).addClass('tabs-box__link--active');
    $('.table').removeClass('table--active');
    $($(this).attr('href')).addClass('table--active');
  });

  $(document).ready(function(){
    $('.login-form__btn').prop('disabled',true);
    $('.login-form__input').keyup(function(){
        $('.login-form__btn').prop('disabled', this.value == "" ? true : false);     
    })
  }); 

});