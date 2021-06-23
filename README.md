# react-native-cronpay

Payment

## Installation

```sh
npm install react-native-cronpay
```

## Dependencies

```sh
npm install @react-navigation/native
npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
npm install @react-native-async-storage/async-storage
npm install react-native-webview
```

## Usage

Navigate to CronPayView as a root element

```js
import CronPayView from "react-native-cronpay";

export default class MainPage extends React.Component {
  render() {
    return (
      <CronPayView
        apiKey="eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaIxpGQuZgh1Pe0IN_XVLjP....lcsC4d1gphLffgCj2qOwcJ7s"
        onClose={handleClose}
        onMandateCreated={(resp: any) => handleSent(resp)}
      />
    );
  }
}

const handleClose = () => {
  console.log('Clossssed');
};

const handleSent = (resp: any) => {
   console.log("mandate created" +  JSON.stringify(resp));
};
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
