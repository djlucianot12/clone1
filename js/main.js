class SmoothScroller {
    constructor() {
        this.container = document.getElementById('smooth-scroll-container');
        this.mainContent = document.querySelector('.horizontal-scroll');

        this.data = {
            current: 0,
            target: 0,
            ease: 0.075,
        };

        this.init();
    }

    init() {
        this.setBodyHeight();
        this.bindEvents();
        this.raf();
    }

    setBodyHeight() {
        document.body.style.height = `${this.mainContent.offsetWidth}px`;
    }

    bindEvents() {
        window.addEventListener('resize', this.setBodyHeight.bind(this));
        window.addEventListener('scroll', () => {
            this.data.target = window.scrollY;
        });
    }

    lerp(start, end, t) {
        return start * (1 - t) + end * t;
    }

    raf() {
        this.data.current = this.lerp(this.data.current, this.data.target, this.data.ease);
        this.container.style.transform = `translateX(-${this.data.current}px)`;
        requestAnimationFrame(this.raf.bind(this));
    }
}

function initProjectList() {
    const projectListContainer = document.querySelector('.project-list');
    if (projectListContainer && typeof projects !== 'undefined') {
        projects.forEach(projectName => {
            const projectItem = document.createElement('div');
            projectItem.className = 'project-item';
            const projectLink = document.createElement('a');
            projectLink.href = '#'; // Placeholder for project page
            projectLink.textContent = projectName;
            projectItem.appendChild(projectLink);
            projectListContainer.appendChild(projectItem);
        });
    }
}

function initPageTransitions() {
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', e => {
            const href = link.getAttribute('href');
            // Ignore external links and anchor links
            if (link.hostname !== window.location.hostname || href.startsWith('#')) {
                return;
            }

            e.preventDefault();
            document.body.classList.add('is-transitioning');
            setTimeout(() => {
                window.location.href = href;
            }, 500);
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('smooth-scroll-container')) {
        new SmoothScroller();
    }
    if (document.querySelector('.project-list')) {
        initProjectList();
    }
    initPageTransitions();
});
