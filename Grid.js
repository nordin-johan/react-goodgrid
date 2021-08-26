import React from 'react';

class Container extends React.Component {

    render() {

        let classes = [1];

        if (this.props.fluid) {
            classes.push('fluid');
        }
        
        if (this.props.className) {
            classes.push(`${this.props.className}`);
        }

        return (
            <div className={'container' + (classes.length > 0 ? ` ${classes.join(' ')}` : '')}>
                { this.props.children }
            </div>
        );

    }

}

class Row extends React.Component {

    render() {

        let classes = [];

        if (this.props.align) {
            classes.push(`align-${this.props.align}`);
        }

        if (this.props.justify) {
            classes.push(`justify-${this.props.justify}`);
        }

        if (this.props.gutter || this.props.gutter === 0) {
            classes.push(`gutter-${this.props.gutter}`);
        }

        if (this.props.className) {
            classes.push(`${this.props.className}`);
        }

        return (

            <div className={'row' + (classes.length > 0 ? ` ${classes.join(' ')}` : '')}>
                { this.props.children }
            </div>

        );

    }

}

class Col extends React.Component {

    render() {

        let classes = [];

        if (this.props.xs) {
            if (this.props.xs === 'col' || this.props.xs === true) { classes.push('col') } 
            else { classes.push(`col-${this.props.xs}`) }
        }

        if (this.props.sm) {
            if (this.props.sm === 'col' || this.props.sm === true) { classes.push('col-sm') } 
            else { classes.push(`col-sm-${this.props.sm}`) }
        }

        if (this.props.md) {
            if (this.props.md === 'col' || this.props.md === true) { classes.push('col-md') } 
            else { classes.push(`col-md-${this.props.md}`) }
        }

        if (this.props.lg) {
            if (this.props.lg === 'col' || this.props.lg === true) { classes.push('col-lg') } 
            else { classes.push(`col-lg-${this.props.lg}`) }
        }

        if (this.props.xl) {
            if (this.props.xl === 'col' || this.props.xl === true) { classes.push('col-xl') } 
            else { classes.push(`col-xl-${this.props.xl}`) }
        }

        if (this.props.className) {
            classes.push(`${this.props.className}`);
        }

        return (
            <div className={classes.join(' ')}>
                { this.props.children }
            </div>
        );

    }

}

export { Container, Row, Col };