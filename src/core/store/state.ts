import storage from "../services/storage";

const initialState = {
  authState: {
    token: storage.get("token") || null,
    loading: false,
  },
};

export default initialState;
