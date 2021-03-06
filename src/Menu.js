import React from 'react';
import { Link } from 'react-router-dom';
import {Card, CardBody, CardTitle, CardText, ListGroup, ListGroupItem} from 'reactstrap';
import './Menu.css';

/** Menu: listing of items (either drinks or snacks)
 * 
 * Props:
 * - items: list of snacks/drinks data objects.
 * - title: "Snacks" or "Drinks"
 * 
 */
const Menu = ({title, items}) => {
    return (
        <section className='col-md-4'>
            <Card>
                <CardBody>
                    <CardTitle className='font-weight-bold text-center'>
                        {title} Menu
                    </CardTitle>
                    <CardText>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                    </CardText>

                    <ListGroup>
                        {items.map(item => (
                            <Link to={`/${title.toLowerCase()}/${item.id}`} key={item.id} >
                                <ListGroupItem>{item.name}</ListGroupItem>
                            </Link>
                        ))}
                    </ListGroup>
                </CardBody>
            </Card>

        </section>
    )
}

export default Menu;