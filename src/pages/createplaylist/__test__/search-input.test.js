import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider, ReactReduxContext } from "react-redux";
import CreatePlaylist from "../createplaylist";
import store from "../../../data/store";

test("should catch search input", async () => {
  render(
    <Provider store={store}>
      <CreatePlaylist />
    </Provider>
  );
  const Input = screen.getByPlaceholderText("Artists, songs, or albums");
  userEvent.type(Input, "Bohemian Rhapsody - Remastered 2011");
  await waitFor(() => {
    expect(Input).toHaveValue("Bohemian Rhapsody - Remastered 2011");
  });
});
