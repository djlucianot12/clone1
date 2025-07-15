document.addEventListener('DOMContentLoaded', () => {
    const projectList = document.querySelector('.project-list');
    if (projectList && typeof projects !== 'undefined') {
        projects.forEach(project => {
            const projectLink = document.createElement('a');
            projectLink.href = `works/project.html?id=${project.id}`;
            projectLink.classList.add('project');
            projectLink.textContent = project.name;
            projectList.appendChild(projectLink);
        });
    }

    const nextButton = document.querySelector('.next');
    const projectListWrapper = document.querySelector('.project-list-wrapper');

    if (nextButton && projectListWrapper) {
        nextButton.addEventListener('click', () => {
            projectListWrapper.scrollBy({ left: 400, behavior: 'smooth' });
        });
    }

    // Horizontal scroll animation
    const scrollingWrapper = document.querySelector('.scrolling-wrapper');
    let current = 0;
    let target = 0;
    const ease = 0.1;

    function lerp(start, end, t) {
        return start * (1 - t) + end * t;
    }

    function smoothScroll() {
        target = window.scrollY;
        current = lerp(current, target, ease);
        scrollingWrapper.style.transform = `translateX(-${current}px)`;
        requestAnimationFrame(smoothScroll);
    }

    // Only enable smooth scrolling on the main page
    if (scrollingWrapper) {
        document.body.style.height = `${scrollingWrapper.scrollWidth}px`;
        smoothScroll();
    }
});
