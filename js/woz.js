let tgl_n = 0;
let prv_w = 0;
let prv_h = 0;

const showWindow = (type, id) => {
    if (type === "main") {
        document.querySelectorAll('.posts-container')[0].style.display = 'flex';
    } else {
        const post = Array.from(document.querySelectorAll('.post')).filter(x => x.id === id)[0];
        let show;
        let hide;
        if (type === "info") {
            show = post.querySelectorAll('.info-posts');
            hide = post.querySelectorAll('.info-btn');
        } else if (type === "clip") {
            show = post.querySelectorAll('.clipboard');
            hide = post.querySelectorAll('.clip-btn');
        }
        hide[0].style.display = "none";
        show[0].style.display = "flex";
    }
}
const closeWindow = (type, id) => {
    if (type === "main") {
        document.querySelectorAll('.posts-container .square-icon')[0].classList.toggle("show-cross");
        setTimeout(() => {
            document.querySelectorAll('.posts-container')[0].style.display = 'none'
            document.querySelectorAll('.posts-container .square-icon')[0].classList.toggle("show-cross");
        }, 50);
    } else {
        const post = Array.from(document.querySelectorAll('.post')).filter(x => x.id === id)[0];
        let show;
        let hide;
        let x;
        if (type === "info") {
            x = post.querySelectorAll('.info-posts .square-icon');
            hide = post.querySelectorAll('.info-posts');
            show = post.querySelectorAll('.info-btn');
        } else if (type === "clip") {
            x = post.querySelectorAll('.clipboard .square-icon');
            hide = post.querySelectorAll('.clipboard');
            show = post.querySelectorAll('.clip-btn');
        }
        x[0].classList.toggle("show-cross");
        setTimeout(() => {
            hide[0].style.display = "none";
            show[0].style.display = "flex";
            x[0].classList.toggle("show-cross");
        }, 50);
    }
}

const toggleWindow = () => {
    tgl_n++;
    const dsktp_w = document.querySelectorAll('.desktop-content')[0].offsetWidth;
    const dsktp_h = document.querySelectorAll('.desktop-content')[0].offsetHeight;
    document.querySelectorAll('.posts-container')[0].classList.toggle("maximize-window");
    if (tgl_n % 2 !== 0) {
        prv_w = document.querySelectorAll('.posts-container')[0].offsetWidth;
        prv_h = document.querySelectorAll('.posts-container')[0].offsetHeight;
        document.querySelectorAll('.posts-container')[0].style.width = (dsktp_w - 4) + "px";
        document.querySelectorAll('.posts-container')[0].style.height = (dsktp_h - 4) + "px";
    } else {
        document.querySelectorAll('.posts-container')[0].style.width = null;
        document.querySelectorAll('.posts-container')[0].style.height = null;
    }
}

$(document).ready(() => {
    $(".draggable").draggable({ containment: ".desktop-content" });
});

window.addEventListener("resize", () => {
    document.querySelectorAll('.draggable').forEach((div) => {
        div.style.top = null;
        div.style.left = null;
    });
    const dsktp_w = document.querySelectorAll('.desktop-content')[0].offsetWidth;
    const dsktp_h = document.querySelectorAll('.desktop-content')[0].offsetHeight;
    const mx_window = document.querySelectorAll('.maximize-window')[0];
    if(mx_window) {
        mx_window.style.width = (dsktp_w - 4) + "px";
        mx_window.style.height = (dsktp_h - 4) + "px";
    }
});