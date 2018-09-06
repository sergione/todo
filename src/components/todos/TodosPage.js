import React from "react";
import PropTypes from 'prop-types';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

class TodosPage extends React.Component {
    render() {
        return (
            <div>
                {this.props.todos.map(todo =>
                    <div>
                        {todo.id} {todo.description} {todo.completed}
                    </div>)}
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps)(TodosPage);

