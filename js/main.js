const block1 = document.querySelector('.header__nav-left'),
    block2 = document.querySelector('.header__nav-right'),
    div = document.querySelector('.popup-menu'),
    buttonsPopup = document.querySelectorAll('.target-menu'),
    about = document.getElementById('about'),
    skills = document.getElementById('skills'),
    portfolio = document.getElementById('portfolio');
let activePositionY = 0,
    activeTarget,
    count = 0,
    contents = {
        about: `обо мне`,
        skills: `
            <button class="closePopup" type="button"></button>
            <h2 class="title">Навыки</h2>
            <ul class="list__items">
                <li class="list__item">
                    <p class="list__text">
                        HTML
                    </p>
                    <div class="list__rating">
                        <img src="img/ratFill.svg" alt="star">
                        <img src="img/ratFill.svg" alt="star">
                        <img src="img/ratFill.svg" alt="star">
                        <img src="img/ratFill.svg" alt="star">
                        <img src="img/ratFill.svg" alt="star">
                        <div class="list__number">
                            5/5
                        </div>
                    </div>
                </li>
                <li class="list__item">
                    <p class="list__text">
                        CSS (SCSS)
                    </p>
                    <div class="list__rating">
                        <img src="img/ratFill.svg" alt="star">
                        <img src="img/ratFill.svg" alt="star">
                        <img src="img/ratFill.svg" alt="star">
                        <img src="img/ratFill.svg" alt="star">
                        <img src="img/ratFill.svg" alt="star">
                        <div class="list__number">
                            5/5
                        </div>
                    </div>
                </li>
                <li class="list__item">
                    <p class="list__text">
                        JavaScript
                    </p>
                    <div class="list__rating">
                        <img src="img/ratUnFill.svg" alt="star">
                        <img src="img/ratUnFill.svg" alt="star">
                        <img src="img/ratFill.svg" alt="star">
                        <img src="img/ratFill.svg" alt="star">
                        <img src="img/ratFill.svg" alt="star">
                        <div class="list__number">
                            3/5
                        </div>
                    </div>
                </li>
                <li class="list__item">
                    <p class="list__text">
                        Gulp
                    </p>
                    <div class="list__rating">
                        <img src="img/ratUnFill.svg" alt="star">
                        <img src="img/ratUnFill.svg" alt="star">
                        <img src="img/ratFill.svg" alt="star">
                        <img src="img/ratFill.svg" alt="star">
                        <img src="img/ratFill.svg" alt="star">
                        <div class="list__number">
                            3/5
                        </div>
                    </div>
                </li>
                <li class="list__item">
                    <p class="list__text">
                        WordPress
                    </p>
                    <div class="list__rating">
                        <img src="img/ratUnFill.svg" alt="star">
                        <img src="img/ratUnFill.svg" alt="star">
                        <img src="img/ratUnFill.svg" alt="star">
                        <img src="img/ratUnFill.svg" alt="star">
                        <img src="img/ratUnFill.svg" alt="star">
                        <div class="list__number">
                            0/5
                        </div>
                    </div>
                </li>
                <li class="list__item">
                    <p class="list__text">
                        React
                    </p>
                    <div class="list__rating">
                        <img src="img/ratUnFill.svg" alt="star">
                        <img src="img/ratUnFill.svg" alt="star">
                        <img src="img/ratUnFill.svg" alt="star">
                        <img src="img/ratUnFill.svg" alt="star">
                        <img src="img/ratUnFill.svg" alt="star">
                        <div class="list__number">
                            0/5
                        </div>
                    </div>
                </li>
                <li class="list__item">
                    <p class="list__text">
                        TypeScript
                    </p>
                    <div class="list__rating">
                        <img src="img/ratUnFill.svg" alt="star">
                        <img src="img/ratUnFill.svg" alt="star">
                        <img src="img/ratUnFill.svg" alt="star">
                        <img src="img/ratUnFill.svg" alt="star">
                        <img src="img/ratUnFill.svg" alt="star">
                        <div class="list__number">
                            0/5
                        </div>
                    </div>
                </li>
            </ul>
        `,
        portfolio: `
        <button class="closePopup" type="button"></button>
        <h2 class="title">Портфолио</h2>
        <div class="posts__content">
        <article class="post post-news">
        <div class="post-media">
            <video class="post__video" src="videos/vid7.mp4" muted style="object-position: 20%;"></video>
            <a class="post-media-overlay" href="https://eroyeroy.github.io/Roongo/" target="_blank">
                <h2>Landing page для компании Roongo</h2>
            </a>
        </div>
        </article>
        <article class="post post-news">
            <div class="post-media">
                <video class="post__video" src="videos/vid6.mp4" muted></video>
                <a class="post-media-overlay" href="https://eroyeroy.github.io/nirvana-music-player/" target="_blank">
                    <h2>Фан страничка альбомов группы Nirvana</h2>
                </a>
            </div>
        </article>
        <article class="post post-news">
            <div class="post-media">
                <video class="post__video" src="videos/vid5.mp4" muted></video>
                <a class="post-media-overlay" href="https://eroyeroy.github.io/Converse-promo/" target="_blank">
                    <h2>Landing page обуви Converse</h2>
                </a>
            </div>
        </article>
        <article class="post post-news">
            <div class="post-media">
                <video class="post__video" src="videos/vid4.mp4" muted style="object-position: left;"></video>
                <a class="post-media-overlay" href="https://eroyeroy.github.io/7bolt-Landing/" target="_blank">
                    <h2>Landing page для компании 7Bolt</h2>
                </a>
            </div>
        </article>
        <article class="post post-news">
            <div class="post-media">
                <video class="post__video" src="videos/vid3.mp4" muted style="object-position: 10%;"></video>
                <a class="post-media-overlay" href="https://eroyeroy.github.io/baking-shop/" target="_blank">
                    <h2>Сайт кондитерской</h2>
                </a>
            </div>
        </article>
        <article class="post post-news">
            <div class="post-media">
                <video class="post__video" src="videos/vid2.mp4" muted></video>
                <a class="post-media-overlay" href="https://eroyeroy.github.io/roll-shop/" target="_blank">
                    <h2>Сайт суши-бара</h2>
                </a>
            </div>
        </article>
        <article class="post post-news">
            <div class="post-media">
                <video class="post__video" src="videos/vid1.mp4" muted></video>
                <a class="post-media-overlay" href="https://eroyeroy.github.io/motodarom/" target="_blank">
                    <h2>Landing page для компании MotoDarom</h2>
                </a>
            </div>
        </article>
        </div>
		`
    };
buttonsPopup.forEach(el => {
    el.addEventListener('click', (e) => {
        if (activeTarget != null) {
            if (el.id == activeTarget.id) {
                if (div.classList.contains('active')) {
                    removeSize();
                } else {
                    const foo4 = setInterval(function () {
                        if (!div.classList.contains('active')) {
                            div.style.top = el.getBoundingClientRect().top + 'px';
                            activePositionY = el.getBoundingClientRect().top;
                            resize(el);
                            clearInterval(foo4);
                        }
                    });
                }
            } else {
                if (div.classList.contains('active')) {
                    removeSize();
                    const foo4 = setInterval(function () {
                        if (!div.classList.contains('active')) {
                            div.style.top = el.getBoundingClientRect().top + 'px';
                            activePositionY = el.getBoundingClientRect().top;
                            resize(el);
                            clearInterval(foo4);
                        }
                    });
                } else {
                    div.style.top = el.getBoundingClientRect().top + 'px';
                    activePositionY = el.getBoundingClientRect().top;
                    resize(el);
                }
            }
        } else {
            div.style.top = el.getBoundingClientRect().top + 'px';
            activePositionY = el.getBoundingClientRect().top;
            resize(el);
        }
        activeTarget = el;
    });
});
function resize(el) {
    buttonsPopup.forEach(el => {
        el.disabled = true;
    });
    let h = 90;
    const foo2 = setInterval(function () {
        h = h + 8;
        div.style.top = '50%';
        div.style.transform = 'translateY(-50%)';
        div.style.width = document.documentElement.clientWidth - 65 + 'px'
        div.style.height = h + 'px';
        if (h > window.innerHeight) {
            div.style.height = '100%';
            clearInterval(foo2);
            buttonsPopup.forEach(el => {
                el.disabled = false;
            });
            div.classList.add('active');
            // загрузка контента в попап
            outputContentPopup(contents, el, div);
        };
    });
}
function removeSize() {
    div.querySelector('.popup__content').style.opacity = '0';
    div.querySelector('.popup__content').style.transform = 'translate3d(0,30%,0)';
    setTimeout(() => {
        div.innerHTML = '';
        if (parseInt(div.style.top) == 50) {
            buttonsPopup.forEach(el => {
                el.disabled = true;
            });
            const foo2 = setInterval(function () {
                div.style.height = (div.offsetHeight - 7) + 'px';
                if (parseInt(div.style.height) < 90) {
                    div.style.height = '90px';
                    clearInterval(foo2);
                    buttonsPopup.forEach(el => {
                        el.disabled = false;
                    });
                    div.classList.remove('active');
                    setTimeout(() => {
                        div.style.width = '0px'
                    })
                }
            });
        }
    }, 300)
};
// function resize(el) {
//     buttonsPopup.forEach(el => {
//         el.disabled = true;
//     });
//     let w = 100,
//         h = 90;
//     const foo = setInterval(function () {
//         w = w + 15;
//         div.style.width = w + 'px';
//         if (w > parseInt(document.documentElement.clientWidth - 65)) {
//             div.style.width = w - (w - (document.documentElement.clientWidth - 65)) + 'px';
//             clearInterval(foo);
//             const foo2 = setInterval(function () {
//                 h = h + 10;
//                 div.style.top = '50%';
//                 div.style.transform = 'translateY(-50%)';
//                 let top = parseInt(div.style.top);
//                 // const foo3 = setInterval(function () {
//                 //     if (top > 0) {
//                 //         top = top - 7;
//                 //         div.style.top = top + 'px';
//                 //     } else {
//                 //         clearInterval(foo3);
//                 //         div.style.top = '0px';
//                 //     }
//                 // });
//                 div.style.height = h + 'px';
//                 if (h > window.innerHeight) {
//                     div.style.height = '100%';
//                     clearInterval(foo2);
//                     buttonsPopup.forEach(el => {
//                         el.disabled = false;
//                     });
//                     div.classList.add('active');
//                     // загрузка контента в попап
//                     outputContentPopup(contents, el, div);
//                 };
//             });
//         };
//     });
// };
// function removeSize() {
//     div.innerHTML = '';
//     if (parseInt(div.style.top) == 0 && parseInt(div.style.height) == 100) {
//         buttonsPopup.forEach(el => {
//             el.disabled = true;
//         });
//         const foo2 = setInterval(function () {
//             let top = parseInt(div.style.top);
//             const foo3 = setInterval(function () {
//                 if (top < activePositionY) {
//                     top = top + 5;
//                     div.style.top = top + 'px';
//                 } else {
//                     div.style.top = activePositionY + 'px';
//                     clearInterval(foo3);
//                 }
//             });
//             div.style.height = (div.offsetHeight - 7) + 'px';
//             if (parseInt(div.style.height) < 90) {
//                 div.style.height = '90px';
//                 clearInterval(foo2);
//                 const foo = setInterval(function () {
//                     if (parseInt(div.style.width) <= 15) {
//                         clearInterval(foo);
//                         div.style.width = '';
//                         buttonsPopup.forEach(el => {
//                             el.disabled = false;
//                         });
//                         div.classList.remove('active');
//                     } else {
//                         div.style.width = (parseInt(div.style.width) - 15) + 'px';
//                     }
//                 });
//             }
//         });
//     }
// };
function outputContentPopup(arr, button, block) {
    const popupContent = document.createElement('div');
    popupContent.classList.add('popup__content');
    for (let value in arr) {
        if (value === button.dataset.content) {
            popupContent.innerHTML = arr[value];
            block.insertAdjacentElement('afterbegin', popupContent);
            const btnClosePopup = document.querySelector('.closePopup');
            btnClosePopup.addEventListener('click', () => {
                removeSize();
            });
            const all = document.querySelectorAll('.post-media');
            if (all.length > 0) {
                all.forEach(el => {
                    const url = el.style.backgroundImage.slice(4, -1).replace(/"/g, "");
                    count = 0;
                    //getImage(url)
                    setTimeout(() => {
                        popupContent.style.opacity = '1';
                        popupContent.style.transform = 'translate3d(0,0,0)';
                    }, 100)
                });
                const videos = document.querySelectorAll('.post-media');
                videos.forEach(el => {
                    const video = el.querySelector('video');
                    el.addEventListener('mouseover', () => {
                        playVideo('mouseover', video);
                    });
                    el.addEventListener('mouseleave', () => {
                        playVideo('mouseleave', video);
                    });
                });
            } else {
                setTimeout(() => {
                    popupContent.style.opacity = '1';
                    popupContent.style.transform = 'translate3d(0,0,0)';
                }, 100)
            }
            function getImage(url) {
                return new Promise(function (resolve, reject) {
                    var img = new Image();
                    img.onload = function () {
                        count++;
                        resolve(url);
                    };
                    img.onerror = function () {
                        reject(url);
                    };
                    img.src = url;
                    function resolve(url) {
                        setTimeout(() => {
                            popupContent.style.opacity = '1';
                            popupContent.style.transform = 'translate3d(0,0,0)';
                        }, 100)
                    }
                });
            };
        };
    };
};
window.addEventListener('resize', () => {
    if (div.classList.contains('active')) {
        div.style.width = parseInt(document.documentElement.clientWidth - 65) + 'px';
    }
})
function playVideo(mouseEvent, el) {
    if (!mouseEvent) return;
    if (mouseEvent === 'mouseover') {
        const isPlaying = el.currentTime > 0 && !el.paused && !el.ended
            && el.readyState > el.HAVE_CURRENT_DATA;

        if (!isPlaying) {
            el.play();
            el.setAttribute('loop', true);
        }
    };
    if (mouseEvent === 'mouseleave') {
        el.pause();
        el.currentTime = 0;
        el.removeAttribute('loop');
    };
};