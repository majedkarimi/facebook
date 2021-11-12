'use strict';

/*--------------------------------------------- 
    # code hedaer part Arrow back and logo
----------------------------------------------*/
const arrowBacksearch = document.querySelector('.arrow-back-header');
const boxSearch = document.querySelector('.logo-header .search');
const logofacebook = document.querySelector('.logo-header figure');
const iconSerch = document.querySelector('.search .bi-search');
const inputSerchHeader = document.querySelector('.logo-header .search input');
const boxRecentSearch = document.querySelector('.recent-search');
const body = document.querySelector('body');
const boxLogoSearch = document.querySelector('.logo-header');

boxSearch.addEventListener('click',function(){
    logofacebook.classList.add('hidden');
    boxRecentSearch.classList.remove('hidden');
    arrowBacksearch.classList.remove('hidden')
});
arrowBacksearch.addEventListener('click',function(){
    boxRecentSearch.classList.add('hidden');
    logofacebook.classList.remove('hidden');
    arrowBacksearch.classList.add('hidden');
});
// /*--------------------------------------------- 
//     # code hedaer account
// ----------------------------------------------*/
const btnAccount = document.querySelector('.sub-account');
const boxSubAccount = document.querySelector('.sub-account ul');
const iconAccount=document.querySelector('.sub-account .bi-caret-down-fill');
btnAccount.addEventListener('click',function(){
    boxSubAccount.classList.toggle('hidden');
    iconAccount.classList.toggle('active-btn');
});