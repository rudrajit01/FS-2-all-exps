function PlatformSelector({
  platforms,
  selectedPlatforms,
  handlePlatformChange,
}) {
  return (
    <div>
      <h3>Select Platforms</h3>

      {platforms.map((platform) => (
        <div key={platform}>
          <label>
            <input
              type="checkbox"
              checked={selectedPlatforms.includes(platform)}
              onChange={() => handlePlatformChange(platform)}
            />
            {platform}
          </label>
        </div>
      ))}
    </div>
  );
}

export default PlatformSelector;