import React from 'react';
import { Button, Card, CardActions } from 'react-material-design';

const CardExamples = () =>
    <Card>
        <CardActions vertical>
            <Button type="compact" label="Action 1" />
            <Button type="compact" label="Action 2" />
        </CardActions>
    </Card>;
export default CardExamples;
