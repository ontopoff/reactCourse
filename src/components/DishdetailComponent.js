import React from "react";
import {Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";


     function RenderDish({dish}) {
        if(dish != null) {
            return(
                <div className="col-12 col-md-5 m-1">
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
                </div>
            );
        } else {
            return(
                <div></div>
            )
        }
    }

    function RenderComments({comments}) {
        if (comments != null) {
            const comment = comments.map((comment) => {
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
                <div className="col-12 col-md-5 m-1">
                    <ul className="list-unstyled">
                        <h4>Comments</h4>
                        {comment}
                    </ul>
                </div>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    };

    const DishDetail = (props) => {
        const dish = props.dish;
        if (dish != null) {
            return (
                <div className="container">
                    <div className="row">
                            <RenderDish dish ={dish}/>
                            <RenderComments comments={dish.comments} />
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

export default DishDetail;