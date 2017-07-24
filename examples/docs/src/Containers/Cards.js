import React from 'react';
import { parse } from 'react-docgen';
import CodeToggle from 'react-code-toggle';
import { Button, Card, CardActions, CardMedia, CardMediaItem, CardSupportingContent, CardTitle } from '../../../../components/react-material-design';
// import { Button, Card, CardActions, CardMedia, CardMediaItem, CardSupportingContent, CardTitle } from 'react-material-design';
const corgiPic = 'https://static.pexels.com/photos/58997/pexels-photo-58997.jpeg';
const brightPic = 'https://static.pexels.com/photos/311039/pexels-photo-311039.jpeg';
const styles1 = {
    maxWidth: '50vw',
    marginBottom: '30px',
};
const styles2 = {
    width: '30vw',
    marginBottom: '30px',
};
const Cards = () =>
  (<div>
      <h2>Card</h2>
      <CodeToggle>
          <Card style={styles1}>
              <CardTitle title="Basic Card" subtitle="Title, Text and Actions" />
              <CardSupportingContent>
                  <p>Cheesecake chocolate cake carrot cake marshmallow. Topping toffee sweet gingerbread bear claw muffin.</p>
                  <p>Liquorice chocolate cake powder cupcake. Caramels muffin tiramisu carrot cake chocolate bar wafer liquorice.</p>
                  <p>Gummi bears tiramisu bear claw chocolate. Candy ice cream sesame snaps marshmallow sugar plum. Halvah jelly-o tiramisu</p>
                  <p>sweet sesame snaps soufflé cupcake sesame snaps gummies. Pastry cotton candy chocolate cake liquorice candy canes ice cream wafer bonbon.</p>
                  <p>Cheesecake soufflé dessert lollipop tootsie roll gingerbread cheesecake cotton candy croissant.</p>
              </CardSupportingContent>
              <CardActions >
                  <Button compact label="Action 1" />
                  <Button compact label="Action 2" />
              </CardActions>
          </Card>
      </CodeToggle>
      <CodeToggle>
          <Card style={styles1}>
              <CardMedia>
                  <img src={corgiPic} />
              </CardMedia>
              <CardSupportingContent>
                    Cheesecake chocolate cake carrot cake marshmallow. Topping toffee sweet gingerbread bear claw muffin. Liquorice chocolate cake powder cupcake. Caramels muffin tiramisu carrot cake chocolate bar wafer liquorice. Gummi bears tiramisu bear claw chocolate. Candy ice cream sesame snaps marshmallow sugar plum. Halvah jelly-o tiramisu sweet sesame snaps soufflé cupcake sesame snaps gummies. Pastry cotton candy chocolate cake liquorice candy canes ice cream wafer bonbon. Cheesecake soufflé dessert lollipop tootsie roll gingerbread cheesecake cotton candy croissant.
                </CardSupportingContent>
          </Card>
          <Card style={styles1}>
              <CardTitle title="Media Card" subtitle="Title, and Vertical Actions" />
              <CardMedia>
                  <img src={corgiPic} />
              </CardMedia>
              <CardActions vertical>
                  <Button compact label="vAction 1" />
                  <Button compact label="vAction 2" />
              </CardActions>
          </Card>
      </CodeToggle>
      <CodeToggle>
          <Card style={styles1}>
              <CardTitle title="Basic Card" subtitle="Title, Text and Actions" />
              <CardMedia>
                  <img alt="" src={corgiPic} />
              </CardMedia>
              <CardSupportingContent>
                    Cheesecake chocolate cake carrot cake marshmallow. Topping toffee sweet gingerbread bear claw muffin. Liquorice chocolate cake powder cupcake. Caramels muffin tiramisu carrot cake chocolate bar wafer liquorice. Gummi bears tiramisu bear claw chocolate. Candy ice cream sesame snaps marshmallow sugar plum. Halvah jelly-o tiramisu sweet sesame snaps soufflé cupcake sesame snaps gummies. Pastry cotton candy chocolate cake liquorice candy canes ice cream wafer bonbon. Cheesecake soufflé dessert lollipop tootsie roll gingerbread cheesecake cotton candy croissant.
                </CardSupportingContent>
              <CardActions >
                  <Button compact label="Action 1" />
                  <Button compact label="Action 2" />
              </CardActions>
          </Card>
      </CodeToggle>
      <CodeToggle>

          <Card style={styles2}>
              <CardMedia src={brightPic}>
                  <CardTitle larger title="Title ontop of media" />
              </CardMedia>
              <CardActions >
                  <Button compact label="Action 1" />
              </CardActions>
          </Card>


          <Card style={styles2}>
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
          <Card style={styles2}>
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
          <Card style={styles2}>
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
          <Card style={styles2}>
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
      </CodeToggle>
  </div>);
export default Cards;
