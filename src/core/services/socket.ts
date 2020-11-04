import io from "socket.io-client";
import constants from "../constants";

class SocketIO {
  socket;

  connect(dispatch, token: string) {
    console.log("Connecting websocket");
    // eslint-disable-next-line
    this.socket = io.connect(constants.apiEndpoint, {
      query: `auth_token=${token}`,
    });

    // eslint-disable-next-line
    this.socket.on("action", (payload) => dispatch(payload));
  }

  disconnect() {
    console.log("Disconnecting websocket");
    // eslint-disable-next-line
    this.socket.disconnect();
  }
}

export default new SocketIO();
