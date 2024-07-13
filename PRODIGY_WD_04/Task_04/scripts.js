localStorage.setItem('test', '1');
console.log(localStorage.getItem('test')); 
localStorage.removeItem('test');

console.log('localStorage test completed');

document.addEventListener('DOMContentLoaded', function() {
    let pageViews = localStorage.getItem('pageViews');
    console.log('Initial pageViews:', pageViews); 
    
    if (pageViews === null) {
        pageViews = 0;
    } else {
        pageViews = Number(pageViews);
    }
    
    pageViews += 1;
    console.log('Updated pageViews:', pageViews); 
   
    localStorage.setItem('pageViews', pageViews);
    
    document.getElementById('view-count').textContent = pageViews;
});
