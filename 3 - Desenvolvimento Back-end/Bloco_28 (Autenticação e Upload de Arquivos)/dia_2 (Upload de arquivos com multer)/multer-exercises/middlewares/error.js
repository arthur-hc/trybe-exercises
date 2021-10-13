module.exports = (err, _req, res, _next) => {
  if (err.isJoi) {
    return res.status(422).json({
      error: { message: err.details[0].message },
    });
  };

  if (err.statusCode) {
    return res.status(err.statusCode).json({
      error: { message: err.message },
    });
  };

  if(err.message === 'Extension must be `png`') {
    return res.status(403).json({ 
      error: {
        message: err.message,
      },
    });
  };

  if(err.message === 'File already exists`') {
    return res.status(409).json({ 
      error: {
        message: err.message,
      },
    });
  };

  return res.status(500).json({
    error: {
      message: `Internal server error: ${err.message}`,
    },
  });
};
