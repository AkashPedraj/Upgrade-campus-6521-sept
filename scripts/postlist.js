// Functionality for post deletion modal
// Open delete modal on trash icon click
document.querySelectorAll('.delete-icon').forEach(function(icon) {
    icon.addEventListener('click', function() {
        document.getElementById('deleteModal').style.display = 'block';
    });
});

// Close delete modal on No button click
document.getElementById('noBtn').addEventListener('click', function() {
    document.getElementById('deleteModal').style.display = 'none';
});

// Close delete modal on clicking outside the modal content
window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('deleteModal')) {
        document.getElementById('deleteModal').style.display = 'none';
    }
});
