import * as React from 'react';
import styles from './styles';
export default class Hello extends React.Component {
    render() {
        const { text } = this.props;
        return (<div style={styles.div}>
        Prejkwehfkjhfix
        {text || 'Hay.'}
      </div>);
    }
}
