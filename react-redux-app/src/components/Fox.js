import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchFox } from "../actions/index";
import { Image, Card } from "./Styles";

const Fox = props => {
    useEffect(() => {
        props.fetchFox();
    }, []);

    if (props.isFetching) {
        return <h2> Loading Fox... </h2>
    }
    return (
        <Card>
        <div>
            {props.error && <p>{props.error}</p>}
        </div>
        <div>
            <h3>NO</h3>
            <Image src={props.fox}></Image>
            <h3>LEFT TO GIVE</h3>
        </div>
        </Card>
        );
    };

const mapStateToProps = state => {
    return {
        fox: state.fox,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(mapStateToProps, {fetchFox})(Fox);