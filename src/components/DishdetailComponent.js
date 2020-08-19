import React, { Component } from 'react';
import { Card, CardImg, CardTitle, CardImgOverlay, CardText, CardBody } from 'reactstrap';

class DishDetail extends Component {

  constructor(props) {
    super(props);
  }

  renderDish(dish) {
    if (dish != null)
      return (
        <div className="col-12 col-md-5 m-1">
          <Card>
            <CardImg top src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
      );
    else
      return (
        <div></div>
      );
  }

  renderComments(dish) {
    if (dish != null && dish.comments != null) {
      return (
        <div className="col-12 col-md-5 m-1">
          <header>
            <h4>Comments</h4>
          </header>
          {dish.comments.map(comment => {
            return (
              <ul key={comment.id} className="list-unstyled">
                <li >{comment.comment} </li>
                <li > -- {comment.author} , {comment.date} </li>
              </ul>
            );
          })}
        </div>
      );
    }

    else {
      return (
        <div></div>
      );
    }
  }

  render() {

    return (
      <div className="container">
        <div className="row">
          {this.renderDish(this.props.dish)}
          {this.renderComments(this.props.dish)}
        </div>
      </div>
    );

  }
}

export default DishDetail;
