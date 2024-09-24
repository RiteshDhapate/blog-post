# blog post project

# features 
- create the blog post
- get the one blog post details
- get the multiple blog post using pagination
- delete the blog post
- update the blog post
- like the blog post

# deployed server URL
```curl
https://blog-post-dusky.vercel.app
```
# create the blog post
```curl
https://blog-post-dusky.vercel.app/api/v1/create-blog
```
body parameters
```json
{
  "title": "My First Blog Post",
  "content": "This is the content of the blog post.",
  "author": "John Doe",
  "categories": ["Tech", "Web Development"],
  "tags": ["Node.js", "Mongoose"],
  "isPublished": true,
  "publishedAt": "2024-09-24T12:00:00Z",
  "isHaveMedia": false,
  "mediaType": "video",
  "mediaUrl": "https://example.com/image.jpg"
}

```

# get the one blog post details
```curl
https://blog-post-dusky.vercel.app/api/v1/blogs/{_id}
```
# get the multiple blogs
```curl 
https://blog-post-dusky.vercel.app/api/v1/blogs?page=1&limit=5
```

# delete the blog post
```curl
```
