import * as React from 'react';
export interface HelloProps {
    text?: string;
}
export default class Hello extends React.Component<HelloProps, void> {
    render(): JSX.Element;
}
