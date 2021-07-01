import express from "express";
import path from "path";
import cors from "cors";
import { Post } from "./models/post";
import { Author } from "./models/author";
const app = express();
const port = 4300;

app.use(cors());

const authors: Author[] = [
    { username: 'itmax', fullname: 'Max Dmitriev', picture: 'https://avatars.githubusercontent.com/u/38819868?v=4', about: 'Full Stack Web Developer' }
];

const posts: Post[] = [
    { title: 'How are you doing?', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean iaculis libero a nibh condimentum, condimentum sagittis felis suscipit. Nam dui quam, gravida non enim in, cursus finibus felis. Pellentesque nec sem ante. Fusce tellus arcu, venenatis a nibh et, euismod maximus neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisis lacus orci, id viverra eros aliquam posuere. Vestibulum eget lorem in neque interdum ultrices et at lorem. In elementum purus nisi, sit amet consectetur urna bibendum at. Cras tincidunt dictum massa, et malesuada erat venenatis euismod. Proin efficitur velit id ipsum dignissim, maximus pulvinar dolor placerat. Proin eget neque eu lorem feugiat ullamcorper. In hac habitasse platea dictumst. In laoreet massa eu ex accumsan, quis vulputate leo maximus.', id: 1, date: Date.now(), author: authors[0], picture: 'https://64.media.tumblr.com/eb8b15af72eb1a1c363d1575758c30c0/tumblr_orxs84xnIe1wsgejmo1_1280.jpg' },
    { title: 'The neighbourhood is the best musician group', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean iaculis libero a nibh condimentum, condimentum sagittis felis suscipit. Nam dui quam, gravida non enim in, cursus finibus felis. Pellentesque nec sem ante. Fusce tellus arcu, venenatis a nibh et, euismod maximus neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisis lacus orci, id viverra eros aliquam posuere. Vestibulum eget lorem in neque interdum ultrices et at lorem. In elementum purus nisi, sit amet consectetur urna bibendum at. Cras tincidunt dictum massa, et malesuada erat venenatis euismod. Proin efficitur velit id ipsum dignissim, maximus pulvinar dolor placerat. Proin eget neque eu lorem feugiat ullamcorper. In hac habitasse platea dictumst. In laoreet massa eu ex accumsan, quis vulputate leo maximus.', id: 2, date: Date.now(), author: authors[0], picture: 'https://data.whicdn.com/images/339467946/original.jpg' },
    { title: 'The weather is clear today', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean iaculis libero a nibh condimentum, condimentum sagittis felis suscipit. Nam dui quam, gravida non enim in, cursus finibus felis. Pellentesque nec sem ante. Fusce tellus arcu, venenatis a nibh et, euismod maximus neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisis lacus orci, id viverra eros aliquam posuere. Vestibulum eget lorem in neque interdum ultrices et at lorem. In elementum purus nisi, sit amet consectetur urna bibendum at. Cras tincidunt dictum massa, et malesuada erat venenatis euismod. Proin efficitur velit id ipsum dignissim, maximus pulvinar dolor placerat. Proin eget neque eu lorem feugiat ullamcorper. In hac habitasse platea dictumst. In laoreet massa eu ex accumsan, quis vulputate leo maximus.', id: 3, date: Date.now(), author: authors[0], picture: 'https://i.pinimg.com/originals/4a/e4/7e/4ae47e2ab6730ded8e416e8bb3304a89.jpg' }
]

app.get("/api/posts", (req, res) => {
    if (req.query.search) {
        let { search } = req.query;
        let query = search.toString().toLowerCase();

        let result = posts.filter(post => post.title.toLowerCase().includes(query));

        res.json(result);
    } else {
        res.json(posts);
    }
});

const random = (min: number, max: number) => Math.floor(Math.random() * (max - min) + min);

app.get("/api/related-posts/:id", (req, res) => {
    const id: number = parseInt(req.params.id) - 1;

    let id1;
    let id2;

    do {
        id1 = random(0, posts.length)
        id2 = random(0, posts.length)
    } while(id1 === id2 || id1 === id || id2 === id)

    let result = [posts[id1], posts[id2]];

    res.json(result);
});

app.get("/api/post/:id", (req, res) => {
    const id: number = parseInt(req.params.id);

    res.json(posts.find(post => post.id === id));
})

app.get("/api/authors/:username", (req, res) => {
    const username: string = req.params.username;

    res.json(authors.find(author => author.username === username));
})

app.listen(port, () => {
    console.log( `server started at http://localhost:${ port }` );
});