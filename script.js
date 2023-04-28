const url = "https://www.reddit.com/r/memes/top/.json?t=day&limit=1";

fetch(url)
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Network response was not ok");
    }
  })
  .then((data) => {
    const post = data.data.children[0].data;
    const title = post.title;
    const author = post.author;
    const upvotes = post.ups;
    const imageUrl = post.url_overridden_by_dest;
    const comments = post.num_comments;
    const permalink = "https://www.reddit.com" + post.permalink + "?utm_source=reddit&utm_medium=web2x&context=3";

    document.querySelector("#post-title").textContent = title;
    document.querySelector("#author").textContent = `Posted by u/${author}`;
    document.querySelector("#upvotes").textContent = `${upvotes} upvotes`;
    document.querySelector("#comments").textContent = `${comments} comments`;
    document.querySelector("#post-image").src = imageUrl;
    document.querySelector("#post-link").href = permalink;
  })
  .catch((error) => {
    console.error("There was an error fetching the data:", error);
  });
