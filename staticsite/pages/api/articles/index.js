import { articles } from '../../../data/posts';

export default (req, res) => {
  res.status(200).json(articles);
};
