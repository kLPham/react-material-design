import React, { PropTypes } from 'react';
import '@material/card/dist/mdc.card.css';

const Card = ({ children }) =>
    <div className="mdc-card">
        <section className="mdc-card__primary">
            <h1 className="mdc-card__title mdc-card__title--large">Title goes here</h1>
            <h2 className="mdc-card__subtitle">Subtitle here</h2>
        </section>
        <section className="mdc-card__supporting-text">
            <p>Cheesecake chocolate cake carrot cake marshmallow. Topping toffee sweet gingerbread bear claw muffin. Liquorice chocolate cake powder cupcake. Caramels muffin tiramisu carrot cake chocolate bar wafer liquorice. Gummi bears tiramisu bear claw chocolate. Candy ice cream sesame snaps marshmallow sugar plum. Halvah jelly-o tiramisu sweet sesame snaps soufflé cupcake sesame snaps gummies. Pastry cotton candy chocolate cake liquorice candy canes ice cream wafer bonbon. Cheesecake soufflé dessert lollipop tootsie roll gingerbread cheesecake cotton candy croissant.</p>
            <p>Ice cream danish liquorice tart cookie cake jelly beans jelly beans apple pie. Pastry brownie carrot cake marzipan carrot cake ice cream oat cake. Fruitcake chocolate cake danish fruitcake croissant jelly beans croissant apple pie. Cheesecake topping dessert liquorice. Pudding jujubes pudding fruitcake donut halvah cake. Dessert toffee chocolate bar jelly-o muffin.</p>
        </section>
        {children}
    </div>;
Card.propTypes = {
    children: PropTypes.any,
};
export default Card;
