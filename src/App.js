import SetOnCallInfo from './domain/SetOnCallInfo.js';

class App {
  async run() {
    const setOnCallInfo = new SetOnCallInfo();
    await setOnCallInfo.read();
  }
}

export default App;
