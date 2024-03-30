//  const posts = [

//     {
//         title : "this is title",
//         body : "this is body",
//     },
//     {
//         title : "this is title",
//         body : "this is body",
//     },
//     {
//         title : "this is title",
//         body : "this is body",
//     },
//     {
//         title : "this is title",
//         body : "this is body",
//     },
//     {
//         title : "this is title",
//         body : "this is body",
//     },
//     {
//         title : "this is title",
//         body : "this is body",
//     },
//     {
//         title : "this is title",
//         body : "this is body",
//     },
//     {
//         title : "this is title",
//         body : "this is body",
//     },
//  ];


const fetchData = async(config) => {
    try{
        const res = await axios(config);
        return res.data;
    }catch(err){
        throw Error("data is not fetched");
    }
}

// fetchData()

 const postsElements = document.querySelector(".posts");

 const loadData = async() => {
    const posts = await fetchData("https://jsonplaceholder.typicode.com/posts");
    posts.map((post) => {
        const postElements = document.createElement("div");
        postElements.classList.add("post");
        postElements.innerHTML = `
            <h4 class="post-title">${post.title}</h4>
            <p class="post-body"> ${post.body} </p>
        `;
        postsElements.appendChild(postElements);
    });
 }

 loadData();