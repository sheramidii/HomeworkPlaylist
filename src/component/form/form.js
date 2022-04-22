const FormSubmission = ({
  addPlaylist,
  handleAddPlaylistChange,
  handleAddPlaylistSubmit,
}) => {
  return (
    <div className="form-container">
      <form className="playlistForm" onSubmit={handleAddPlaylistSubmit}>
        <h1 className="formTitle">Create Playlist</h1>
        <label className="formSubhead" htmlFor="nameInput">
          Playlist Title
        </label>
        <input
          className="formName"
          type="text"
          placeholder="Name your playlist"
          id="name"
          name="name"
          onChange={handleAddPlaylistChange}
          value={addPlaylist.name}
          required
          minLength={10}
        />

        <label className="formSubhead" htmlFor="descInput">
          Description
        </label>
        <textarea
          className="formDescription"
          placeholder="What's your playlist about?"
          id="description"
          name="description"
          onChange={handleAddPlaylistChange}
          value={addPlaylist.description}
        />

        <button className="btn submit" type="submit" value="Submit">
          Create
        </button>
      </form>
    </div>
  );
};

export default FormSubmission;
