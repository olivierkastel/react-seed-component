import * as React from 'react';
import styles from './styles';
export default class Hello extends React.Component {
    componentDidMount() {
        console.log('hello World');
    }
    render() {
        const { text } = this.props;
        return (<div style={styles.div}>
        {text || 'Hay.'}
      </div>);
    }
}
