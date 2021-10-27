const { addPost, getAllPosts, getUserId, getPostById } = require('../services/BlogPost');

const requestCreateBlogPost = async (req, res) => {
  const { title, content } = req.body;
  const { email } = req.user;

  const userId = await getUserId(email);

  const posted = await addPost(title, content, userId);

  return res.status(201).json(posted);
};

const requestBlogPostsList = async (_req, res) => {
  const allPosts = await getAllPosts();

  return res.status(200).json(allPosts);
};

const requestPostById = async (req, res) => {
  const { id } = req.params;

  const postById = await getPostById(id);

  if (!postById) {
    return res.status(404).json({ message: 'Post does not exist' });
  }

  return res.status(200).json(postById);
};

const requestUpdatePost = async (req, res) => {
  // const { id } = req.params;
  // const { email } = req.user;
  // // const { body } = req;

  // const postUpdated = await checkPostOwner(id, email);

  return res.status(200).json('oi');
};

module.exports = {
  requestCreateBlogPost,
  requestBlogPostsList,
  requestPostById,
  requestUpdatePost,
};
