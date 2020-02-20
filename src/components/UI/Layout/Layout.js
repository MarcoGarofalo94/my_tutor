import React,{Fragment} from 'react';
import classes from './Layout.module.css';


const layout = (props) => {
    return (
    <Fragment>{props.children}</Fragment>
    );
}

export default layout;