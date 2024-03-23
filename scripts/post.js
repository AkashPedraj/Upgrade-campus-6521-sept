let editMode = false;

document.getElementById('editBtn').addEventListener('click', function() {
    const postTitle = document.querySelector('.post-title');
    const postText = document.querySelector('.post-text');
    const editBtn = document.getElementById('editBtn');

    if (!editMode) {
        editMode = true;
        postTitle.contentEditable = true;
        postText.contentEditable = true;
        postTitle.style.border = '2px solid pink';
        postText.style.border = '2px solid pink';
        editBtn.innerHTML = '<i class="fas fa-save"></i> Save';
    } else {
        editMode = false;
        postTitle.contentEditable = false;
        postText.contentEditable = false;
        postTitle.style.border = 'none';
        postText.style.border = 'none';
        editBtn.innerHTML = '<i class="fas fa-edit"></i> Edit';
    }
});

let likes = 0;

document.getElementById('likeBtn').addEventListener('click', function() {
    likes++;
    const likeStatus = document.getElementById('likeStatus');
    const likeBtn = document.getElementById('likeBtn');

    if (likes === 1) {
        likeStatus.innerText = '1 person likes this!';
    } else {
        likeStatus.innerText = likes + ' people like this!';
    }

    likeBtn.innerText = 'Liked!';
});

document.getElementById('commentBtn').addEventListener('click', function() {
    const commentInput = document.getElementById('commentInput').value;
    const allComments = document.getElementById('allComments');

    if (commentInput.trim() !== '') {
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');
        commentDiv.innerText = commentInput;
        allComments.prepend(commentDiv);
        document.getElementById('commentInput').value = '';
    }
});
