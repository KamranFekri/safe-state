/**
 * wrapper around setState to prevent setting state on unmounted components
 * @param {this} instance 
 */
export default SafeState = (instance) => {

    areComponentsMounted = false
    
    /**
     * Overriding componentDidMount from original file.
     * Use "componentDidMountSafely" instead.
     */
    instance.componentDidMount = () => {
        areComponentsMounted = true
        if(instance.componentDidMountSafely) instance.componentDidMountSafely()
    }

    /**
     * Overriding componentWillUnmount from original file.
     * Use "componentWillUnmountSafely" instead.
     */
    instance.componentWillUnmount = () => {
        areComponentsMounted = false
        if(instance.componentWillUnmountSafely) instance.componentWillUnmountSafely()
    }

    //returning wrapped "setState" to be used
    return (newState, callback) => {
        if(areComponentsMounted){
            instance.setState(newState, callback)
        } else {
            console.log('STATE MANIPULATION BLOCKED: ' + instance.constructor.name)
        }
    }
}