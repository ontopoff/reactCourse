import React, {Component} from "react";
import {Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";

class DishDetail extends Component {

    renderDish(dish) {
        if(dish != null) {
            return(
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                    <CardBody>
                        <CardTitle>
                            {dish.name}
                        </CardTitle>
                        <CardText>
                            {dish.description}
                        </CardText>
                    </CardBody>
                </Card>
            );
        } else {
            return(
                <div></div>
            )
        }
    }

    renderComments(dish) {
        if (dish.comments != null) {
            const comments = dish.comments.map((comment) => {
                return (
                    <div key={comment.id}>
                        <li>{comment.comment}</li>
                        <br></br>
                        <li>-- {comment.author} , {new Intl.DateTimeFormat('en-US',{ year: 'numeric', month:'short', day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
                        <br></br>
                    </div>
                )
            });

            return (
                <ul className="list-unstyled">
                    <h4>Comments</h4>
                    {comments}
                </ul>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    };

    render() {
        const dish = this.props.dish;
        if (dish != null) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            {this.renderDish(dish)}
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            {this.renderComments(dish)}
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }
}

export default DishDetail;