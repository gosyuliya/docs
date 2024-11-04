const postId = '{{ .Params.id }}'; // ID текущего поста
const commentsFile = 'http://localhost:3001/themes/shadocs/data/comments.json'; // Полный URL к вашему серверу"C:\Users\gos-y\sites_hugo\docs\themes\shadocs\data\comments.json"

// Функция для загрузки комментариев
async function loadComments() {
    const response = await fetch(commentsFile);
    const comments = await response.json();
    const commentList = document.getElementById('comment-list');
    commentList.innerHTML = '';

    comments.forEach(comment => {
        if (comment.post_id === postId) {
            const commentDiv = document.createElement('div');
            commentDiv.classList.add('comment');
            commentDiv.innerHTML = `<strong>${comment.name}</strong><p>${comment.comment}</p>`;
            commentList.appendChild(commentDiv);
        }
    });
}

// Функция для добавления комментария
document.getElementById('comment-form').addEventListener('submit', async function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const comment = document.getElementById('comment').value;

    const newComment = {
        id: Date.now(),
        post_id: postId,
        name: name,
        comment: comment
    };

    // Получаем текущие комментарии
    const response = await fetch(commentsFile);
    const comments = await response.json();
    comments.push(newComment);

    // Сохраняем комментарии обратно в файл
    await fetch(commentsFile, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(comments)
    });

    // Перезагружаем список комментариев
    loadComments();
});

// Инициализируем список комментариев при загрузке страницы
document.addEventListener('DOMContentLoaded', loadComments);

