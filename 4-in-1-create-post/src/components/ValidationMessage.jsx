function ValidationMessage({
  selectedPlatforms,
  limits,
  post,
}) {
  if (selectedPlatforms.length === 0)
    return <p>Please select a platform.</p>;

  return (
    <>
      <h3>Validation</h3>

      {selectedPlatforms.map((platform) => {

        const limit = limits[platform];
        const remaining = limit - post.length;

        return (
          <div
            key={platform}
            className="validation"
          >
            <h4>{platform}</h4>

            {post.length <= limit ? (
              <>
                <p style={{ color: "green" }}>
                  ✅ Valid Post
                </p>

                <p>
                  Remaining : {remaining}
                </p>
              </>
            ) : (
              <>
                <p style={{ color: "red" }}>
                  ❌ Limit Exceeded
                </p>

                <p>
                  Exceeded By :
                  {Math.abs(remaining)}
                </p>
              </>
            )}
          </div>
        );
      })}
    </>
  );
}

export default ValidationMessage;