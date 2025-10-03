const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const mainEl = document.getElementById("main-el")

function renderPosts(arr) {
    let postsHTML = []

    for (let i = 0; i < arr.length; i++) {
        const post = arr[i]
        postsHTML.push(`
            <article class="post">
                <header class="post-header">
                    <a href="#">
                        <img class="user-avatar" src="${post.avatar}" alt="${post.name} avatar">
                    </a>
                    <div class="user-details">
                        <p class="username">${post.name}</p>
                        <p class="location">${post.location}</p>
                    </div>
                </header>

                <figure class="post-media" >
                    <img class="post-image" src="${post.post}" alt="self-portrait painting by ${post.name}">
                </figure>

                <section class="post-actions">
                    <button class="action-btn like-btn" aria-label="Like this post">
                        <img src="images/icon-heart.png" alt="" aria-hidden="true">
                    </button>
                    <button class="action-btn" aria-label="Comment on this post">
                        <img src="images/icon-comment.png" alt="" aria-hidden="true">
                    </button>
                    <button class="action-btn" aria-label="Share this post">
                        <img src="images/icon-dm.png" alt="" aria-hidden="true">
                    </button>
                </section>

                <p class="likes">${post.likes} likes</p>

                <section class="post-caption">
                    <p><span class="username">${post.username}</span> ${post.comment}</p>
                </section>
            </article>
        `)
    }

    return postsHTML.join("")
}

mainEl.innerHTML = renderPosts(posts)

document.addEventListener("DOMContentLoaded", function() {
    const posts = document.querySelectorAll(".post")

    posts.forEach(post => {
        const likeBtn = post.querySelector(".like-btn")
        const postImage = post.querySelector(".post-image")
        const likesEl = post.querySelector(".likes")

        let liked = false
        let likes = Number(likesEl.textContent.split(" ")[0])

        function toggleLike(forceLike = false) {
            if (forceLike && liked) return
            liked = forceLike ? true : !liked
            likes += liked ? 1 : -1
            likesEl.textContent = `${likes} likes`

            likeBtn.querySelector("img").src = liked ? "images/icon-heart-filled.png" : "images/icon-heart.png"
        }

        likeBtn.addEventListener("click", function() {
            toggleLike()
        })
        
        postImage.addEventListener("dblclick", function() {
            toggleLike(true)
        })
    })
})
