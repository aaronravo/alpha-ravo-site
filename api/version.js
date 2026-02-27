module.exports = (req, res) => {
  const version =
    process.env.VERCEL_GIT_COMMIT_SHA ||
    process.env.VERCEL_GIT_COMMIT_REF ||
    process.env.VERCEL_ENV ||
    'dev';

  res.status(200).json({ version });
};

