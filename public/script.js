document.querySelectorAll('.btn-edit-post').forEach(button => {
    button.addEventListener('click', function() {
        const title = this.getAttribute('data-title');
        const content = this.getAttribute('data-content');

        document.getElementById('editTitle').value = title;
        document.getElementById('editContent').value = content;
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const deletePostModal = document.getElementById("deletePost");
    const deletePostForm = document.getElementById("deletePostForm");

    deletePostModal.addEventListener("show.bs.modal", (event) => {
        const button = event.relatedTarget;
        const postTitle = button.getAttribute("data-title-delete");

        deletePostForm.action = `/deletePost?title=${encodeURIComponent(postTitle)}`;
    });
});

