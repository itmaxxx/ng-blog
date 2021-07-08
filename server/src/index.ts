import express from "express";
import path from "path";
import cors from "cors";
import { Post } from "./models/post";
import { Author } from "./models/author";
import {Comment} from "./models/comment";
import {isArray} from "util";
const app = express();
const port = 4300;

app.use(cors());
app.use(express.json());

const authors: Author[] = [
    { username: 'itmax', fullname: 'Max Dmitriev', picture: 'https://avatars.githubusercontent.com/u/38819868?v=4', about: 'Full Stack Web Developer' },
    { username: 'dan_abramov', fullname: 'Dan Abramov', picture: 'https://pbs.twimg.com/profile_images/1336281436685541376/fRSl8uJP_400x400.jpg', about: 'JavaScript Developer' }
];

const comments: Comment[] = [
    { id: 1, text: 'Welcome back!', postID: 3, author: authors[0], date: Date.now() },
    { id: 2, text: 'Beautiful post!', postID: 2, author: authors[0], date: Date.now() },
    { id: 3, text: 'Nice words', postID: 2, author: authors[0], date: Date.now() },
    { id: 4, text: 'Your code is so bad', postID: 3, author: authors[1], date: Date.now() }
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
        res.json(posts.sort((a1, a2) => {
            if (a1.id > a2.id) {
                return -1;
            } else if (a1.id < a2.id) {
                return 1;
            } else {
                return 0;
            }
        }));
    }
});

app.post("/api/posts/create", (req, res) => {
    const parsedPost: Post = req.body;

    const post = new Post();
    post.title = parsedPost.title;
    post.picture = parsedPost.picture;
    post.text = parsedPost.text;
    // get max post id and increment it
    post.id = Math.max.apply(null, posts.map(p => p.id)) + 1;
    post.author = authors.find(author => author.username === parsedPost.author.username) || new Author();

    posts.push(post);

    res.json(post);
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

app.get("/api/posts/:id", (req, res) => {
    const id: number = parseInt(req.params.id);

    res.json(posts.find(post => post.id === id));
})

app.get("/api/authors/:username", (req, res) => {
    const username: string = req.params.username;

    res.json(authors.find(author => author.username === username));
})

app.get("/api/comments/:postID", (req, res) => {
    const postID: number = parseInt(req.params.postID);

    res.json(comments.filter(comment => comment.postID === postID).sort((a1, a2) => {
        if (a1.id > a2.id) {
            return -1;
        } else if (a1.id < a2.id) {
            return 1;
        } else {
            return 0;
        }
    }));
})

app.post("/api/comments/create", (req, res) => {
    const parsedComment: Comment = req.body;

    const comment = new Comment();
    comment.text = parsedComment.text;
    comment.postID = parsedComment.postID;
    // get max id and increment it
    comment.id = Math.max.apply(null, comments.map(p => p.id)) + 1;
    comment.author = authors.find(author => author.username === parsedComment.author.username) || new Author();

    comments.push(comment);

    res.json(comment);
})

app.listen(port, () => {
    console.log( `server started at http://localhost:${ port }` );
});