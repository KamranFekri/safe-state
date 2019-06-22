React Native wrapper for setState to prevent state manipulation on unmounted components.

### How to use safe-state

```javascript
//1. Import safe-state
import SafeState from 'safe-state';

//2. Initialize the safe-state object
this.setMountedState = SafeState(this)

//3. Use safe-state
this.setState({}) //instead of this
this.setMountedState({}) //use this

//Note: Lifecyle methods
componentDidMount(){...} //instead of this
componentDidMountSafely(){...} //use this

componentWillUnmount(){...} //instead of this
componentWillUnmountSafely(){...} //use this
```

A working react-native example can be found [here](https://github.com/KamranFekri/SafeState).