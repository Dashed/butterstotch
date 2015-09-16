const React = require('react');

const NewSides = require('./newsides');
const NewDescription = require('./newdescription');

const CardModify = React.createClass({

    propTypes: {
        onCommit: React.PropTypes.func.isRequired,
        onChangeTitle: React.PropTypes.func.isRequired,
        onChangeDescription: React.PropTypes.func.isRequired,
        onChangeSides: React.PropTypes.func.isRequired,

        commitLabel: React.PropTypes.string.isRequired,

        title: React.PropTypes.string.isRequired,
        sides: React.PropTypes.shape({
            front: React.PropTypes.string.isRequired,
            back: React.PropTypes.string.isRequired
        }),
        description: React.PropTypes.string.isRequired,
    },

    onChangeTitle(event) {
        this.props.onChangeTitle(event.target.value);
    },

    onChangeDescription(description) {
        this.props.onChangeDescription(description);
    },

    onChangeSides(newSide) {
        // only send patch
        this.props.onChangeSides(newSide);
    },

    onClickCommit(event) {
        event.preventDefault();
        event.stopPropagation();

        // TODO: form error handling
        if(this.props.title.trim().length <= 0) {
            return;
        }

        this.props.onCommit({
            title: this.props.title,
            sides: this.props.sides,
            description: this.props.description
        });
    },

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-12">
                        {/*warning*/}
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                <strong>{"Card Title"}</strong>
                            </div>
                            <div className="card-block">
                                <fieldset className="form-group m-y-0">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="cardTitle"
                                        placeholder="Card Title"
                                        value={this.props.title}
                                        onChange={this.onChangeTitle}
                                    />
                                </fieldset>
                            </div>

                            <div className="card-header p-y-0">
                                {""}
                            </div>
                            <div className="card-header">
                                <strong>{"Sides"}</strong>
                            </div>

                            <NewSides
                                onChange={this.onChangeSides}
                                sides={this.props.sides}
                            />

                            <div className="card-header p-y-0">
                                {""}
                            </div>
                            <div className="card-header">
                                <strong>{"Card Description"}</strong>
                            </div>

                            <NewDescription
                                onChange={this.onChangeDescription}
                                description={this.props.description}
                            />

                            <div className="card-block p-t-0">
                                <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
                                    <button type="button" className="btn btn-success" onClick={this.onClickCommit}>{this.props.commitLabel}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = CardModify;
