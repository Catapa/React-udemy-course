import React, {PureComponent} from 'react'
import Person from "./Person/Person";
class Persons extends PureComponent {
    // static getDerivedStateFromProps(props, state){
    //     console.log('[Persons.js] getDerivedStateFromProps')
    //     return state
    // }


////shouldComponentUpdate can be replaced by PureComponent if all these checks are needed
    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     console.log('[Persons.js] shouldComponentUpdate')
    //     return (nextProps.persons !== this.props.persons ||
    //             nextProps.changed !== this.props.changed ||
    //             nextProps.click !== this.props.click)
    // }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate')
        return {message: 'Snapshot!'}
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate')
        console.log(snapshot)
    }
    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount')
    }

    render() {
        console.log('[Persons.js] rendering...')
        return (
            this.props.persons.map((person, index) => {
                return <Person
                    key={person.id}
                    click={() => this.props.click(index)}
                    name={person.name}
                    age={person.age}
                    changed={(event) => this.props.changed(event, person.id)}/>
            })
        )
    }

}
export default Persons