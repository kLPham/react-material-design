import React from 'react';
// import { Button, Card, CardActions, CardMedia, CardMediaItem, CardSupportingContent, CardTitle } from '../../../../components/react-material-design';
import { Button, Card, CardActions, CardMedia, CardMediaItem, CardSupportingContent, CardTitle } from 'react-material-design';

const CardExamples = () =>
    <div>
        <p>Basic Card</p>
        <Card>
            <CardMedia>
                <img src="http://cdn3-www.dogtime.com/assets/uploads/gallery/pembroke-welsh-corgi-dog-breed-pictures/prance-8.jpg" />
            </CardMedia>
            <CardTitle title="Title goes here" subtitle="Subtitle here" />
            <CardTitle larger title="Title goes here" subtitle="Subtitle here" />
            <CardSupportingContent>
                <div>
                    <p>Cheesecake chocolate cake carrot cake marshmallow. Topping toffee sweet gingerbread bear claw muffin. Liquorice chocolate cake powder cupcake. Caramels muffin tiramisu carrot cake chocolate bar wafer liquorice. Gummi bears tiramisu bear claw chocolate. Candy ice cream sesame snaps marshmallow sugar plum. Halvah jelly-o tiramisu sweet sesame snaps soufflé cupcake sesame snaps gummies. Pastry cotton candy chocolate cake liquorice candy canes ice cream wafer bonbon. Cheesecake soufflé dessert lollipop tootsie roll gingerbread cheesecake cotton candy croissant.</p>
                    <p>Ice cream danish liquorice tart cookie cake jelly beans jelly beans apple pie. Pastry brownie carrot cake marzipan carrot cake ice cream oat cake. Fruitcake chocolate cake danish fruitcake croissant jelly beans croissant apple pie. Cheesecake topping dessert liquorice. Pudding jujubes pudding fruitcake donut halvah cake. Dessert toffee chocolate bar jelly-o muffin.</p>
                    <CardMediaItem
                        subtitle="Subtitle Here"
                        title="Title Here"
                        imgSrc="http://cdn3-www.dogtime.com/assets/uploads/gallery/pembroke-welsh-corgi-dog-breed-pictures/prance-8.jpg"
                    />
                    <CardMediaItem
                        subtitle="Change Here"
                        title="Title Here"
                        imgSize={1.5}
                        imgSrc="http://cdn3-www.dogtime.com/assets/uploads/gallery/pembroke-welsh-corgi-dog-breed-pictures/prance-8.jpg"
                    />
                    <CardMediaItem
                        subtitle="Subtitle Here"
                        title="Title Here"
                        imgSize={2}
                        imgSrc="http://cdn3-www.dogtime.com/assets/uploads/gallery/pembroke-welsh-corgi-dog-breed-pictures/prance-8.jpg"
                    />
                    <CardMediaItem
                        subtitle="Subtitle Here"
                        title="Title Here"
                        larger
                        imgSize={3}
                        imgSrc="http://cdn3-www.dogtime.com/assets/uploads/gallery/pembroke-welsh-corgi-dog-breed-pictures/prance-8.jpg"
                    />
                </div>
            </CardSupportingContent>
            <CardActions vertical>
                <Button type="compact" label="vAction 1" />
                <Button type="compact" label="vAction 2" />
            </CardActions>
            <CardActions >
                <Button type="compact" label="Action 1" />
                <Button type="compact" label="Action 2" />
            </CardActions>
        </Card>
    </div>;
export default CardExamples;
