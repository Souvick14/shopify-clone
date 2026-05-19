const TEXT_OPTIONS = ['household name', 'global empire', 'solo flier', 'one to watch', 'big thing', 'unicorn startup', 'story they line up for'];
const ANIMATION_INTERVAL = 4000;
const TRANSITION_DURATION = 800;

let currentIndex = 0;

const textChanger = document.getElementById("textchanger");

if (textChanger) {
    textChanger.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    
    setInterval(() => {
        textChanger.style.opacity = '0';
        textChanger.style.transform = 'translateY(-100px)';
        
        setTimeout(() => {
            textChanger.textContent = TEXT_OPTIONS[currentIndex];
            
            textChanger.style.transform = 'translateY(100px)';
            
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    textChanger.style.opacity = '1';
                    textChanger.style.transform = 'translateY(0)';
                });
            });
            
            currentIndex = (currentIndex + 1) % TEXT_OPTIONS.length;
        }, TRANSITION_DURATION);
    }, ANIMATION_INTERVAL);
}