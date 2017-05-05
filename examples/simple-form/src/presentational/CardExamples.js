import React from 'react';
import { Button, Card, CardActions, CardMedia, CardMediaItem, CardSupportingContent, CardTitle } from '../../../../components/react-material-design';
// import { Button, Card, CardActions, CardMedia, CardMediaItem, CardSupportingContent, CardTitle } from 'react-material-design';
const corgiPic = 'http://cdn3-www.dogtime.com/assets/uploads/gallery/pembroke-welsh-corgi-dog-breed-pictures/prance-8.jpg';
const brightPic = 'http://www.publicdomainpictures.net/pictures/190000/velka/bright-pastels-abstract-background.jpg';
const CardExamples = () =>
    <div>
        <h2>Card Examples</h2>
        <Card>
            <CardTitle title="Basic Card" subtitle="Title, Text and Actions" />
            <CardSupportingContent>
                Cheesecake chocolate cake carrot cake marshmallow. Topping toffee sweet gingerbread bear claw muffin. Liquorice chocolate cake powder cupcake. Caramels muffin tiramisu carrot cake chocolate bar wafer liquorice. Gummi bears tiramisu bear claw chocolate. Candy ice cream sesame snaps marshmallow sugar plum. Halvah jelly-o tiramisu sweet sesame snaps soufflé cupcake sesame snaps gummies. Pastry cotton candy chocolate cake liquorice candy canes ice cream wafer bonbon. Cheesecake soufflé dessert lollipop tootsie roll gingerbread cheesecake cotton candy croissant.
            </CardSupportingContent>
            <CardActions >
                <Button compact label="Action 1" />
                <Button compact label="Action 2" />
            </CardActions>
        </Card>
        <Card>
            <CardMedia>
                <img src={corgiPic} />
            </CardMedia>
            <CardSupportingContent>
                Cheesecake chocolate cake carrot cake marshmallow. Topping toffee sweet gingerbread bear claw muffin. Liquorice chocolate cake powder cupcake. Caramels muffin tiramisu carrot cake chocolate bar wafer liquorice. Gummi bears tiramisu bear claw chocolate. Candy ice cream sesame snaps marshmallow sugar plum. Halvah jelly-o tiramisu sweet sesame snaps soufflé cupcake sesame snaps gummies. Pastry cotton candy chocolate cake liquorice candy canes ice cream wafer bonbon. Cheesecake soufflé dessert lollipop tootsie roll gingerbread cheesecake cotton candy croissant.
            </CardSupportingContent>
        </Card>
        <CardTitle title="Media Card" subtitle="Title, and Vertical Actions" />
        <CardMedia>
            <img src={corgiPic} />
        </CardMedia>
        <CardActions vertical>
            <Button compact label="vAction 1" />
            <Button compact label="vAction 2" />
        </CardActions>
        <Card />

        <Card>
            <CardTitle title="Basic Card" subtitle="Title, Text and Actions" />
            <CardMedia>
                <img src={corgiPic} />
            </CardMedia>
            <CardSupportingContent>
                Cheesecake chocolate cake carrot cake marshmallow. Topping toffee sweet gingerbread bear claw muffin. Liquorice chocolate cake powder cupcake. Caramels muffin tiramisu carrot cake chocolate bar wafer liquorice. Gummi bears tiramisu bear claw chocolate. Candy ice cream sesame snaps marshmallow sugar plum. Halvah jelly-o tiramisu sweet sesame snaps soufflé cupcake sesame snaps gummies. Pastry cotton candy chocolate cake liquorice candy canes ice cream wafer bonbon. Cheesecake soufflé dessert lollipop tootsie roll gingerbread cheesecake cotton candy croissant.
            </CardSupportingContent>
            <CardActions >
                <Button compact label="Action 1" />
                <Button compact label="Action 2" />
            </CardActions>
        </Card>
        <Card>
            <CardMedia src={brightPic}>
                <CardTitle larger title="Title ontop of media" />
            </CardMedia>
            <CardActions >
                <Button compact label="Action 1" />
            </CardActions>
        </Card>
        <Card>
            <CardMediaItem
                subtitle="Subtitle Here"
                title="Title Here"
                imgSrc={corgiPic}
            />
            <CardActions bottom >
                <Button compact label="Action 1" />
                <Button compact label="Action 2" />
            </CardActions>
        </Card>
        <Card>
            <CardMediaItem
                subtitle="Subtitle Here"
                title="Title Here"
                imgSize={1.5}
                imgSrc={corgiPic}
            />
            <CardActions bottom >
                <Button compact label="Action 1" />
                <Button compact label="Action 2" />
            </CardActions>
        </Card>
        <Card>
            <CardMediaItem
                subtitle="Subtitle Here"
                title="Title Here"
                imgSize={2}
                imgSrc={corgiPic}
            />
            <CardActions bottom >
                <Button compact label="Action 1" />
                <Button compact label="Action 2" />
            </CardActions>
        </Card>
        <Card>
            <CardMediaItem
                // subtitle="Subtitle Here"
                //  title="Title Here"
                imgSize={3}
                imgSrc={corgiPic}
            >
                <CardActions vertical >
                    <Button compact label="A1" />
                    <Button compact label="A2" />
                </CardActions>
            </CardMediaItem>
        </Card>
    </div>;
export default CardExamples;
