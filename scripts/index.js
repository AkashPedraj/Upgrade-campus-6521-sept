document.getElementById('signupBtn').addEventListener('click', function() {
    document.getElementById('signupModal').style.display = 'block';
});
document.getElementById('signinBtn').addEventListener('click', function() {
    document.getElementById('signinModal').style.display = 'block';
});

window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
});

document.getElementById('allPostsBtn').addEventListener('click', function() {
    window.location.href = 'html/bloglist.html';
});

document.getElementById('createPostBtn').addEventListener('click', function() {
    document.getElementById('createPostModal').style.display = 'block';
});
