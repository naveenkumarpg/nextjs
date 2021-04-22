import { articles } from '../../../data/posts';

export default (req, res) => {
  const { id } = req.query;
  res.status(200).json(articles[id]);
};
