document.querySelectorAll('.btn-edit-post').forEach(button => {
    button.addEventListener('click', function() {
        const title = this.getAttribute('data-title');
        const content = this.getAttribute('data-content');

        document.getElementById('editTitle').value = title;
        document.getElementById('editContent').value = content;
    });
});