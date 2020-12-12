export default class PostService {
    url = 'https://jsonplaceholder.typicode.com/posts';

    async getAllPosts() {
        return await fetch(this.url).then(value => value.json());
    }

    async getPostsByUserId(id) {
        let allPosts = await this.getAllPosts();
        return allPosts.filter((post) => post.userId === id);
    }
}