import React from 'react';
import List from '../components/list';
import ListItem from '../components/listitem';
import ListItemDivider from '../components/listitemdivider';

const ListExamples = () =>
    <div>
        <h2>List Examples</h2>
        Basic
        <List>
            <ListItem value="Item One" />
            <ListItem value="Item Two" />
            <ListItem value="Item Two" />
        </List>
        Dense
        <List type="dense">
            <ListItem value="Item One" />
            <ListItem value="Item Two" />
            <ListItem value="Item Two" />
        </List>
        Left Icons
        <List>
            <ListItem value="No Icon" />
            <ListItem icon="network_wifi" value="Wi-Fi" />
            <ListItem icon="bluetooth" value="Bluetooth" />
        </List>
        Left Avatar
        <List type="avatar">
            <ListItem leftAvatarUrl="http://4vector.com/i/free-vector-george-washington-clip-art_108422_George_Washington_clip_art_hight.png" value="George Washington" />
            <ListItem leftAvatarUrl="https://www.goodfreephotos.com/albums/vector-images/abraham-lincoln-vector-clipart.png" value="Abraham Lincoln" />
            <ListItem leftAvatarUrl="http://png-4.vector.me/files/images/4/4/448988/marco_simoncelli_vector_portrait_thumb.gif" value="Marco Simoncelli" />
        </List>
        Right Icon
        <List type="avatar">
            <ListItem rightIcon="favorite" rightTitle="Add to favorites" value="Janet Perkins" />
            <ListItem rightIcon="favorite_border" value="Mary Johnson" />
        </List>
        Avatar and Right Icon
        <List type="avatar">
            <ListItem rightIcon="favorite" rightTitle="Add to favorites" value="Janet Perkins" />
            <ListItem leftAvatarUrl="https://www.goodfreephotos.com/albums/vector-images/abraham-lincoln-vector-clipart.png" value="Mary Johnson" />
            <ListItem rightIcon="favorite_border" leftAvatarUrl="http://png-4.vector.me/files/images/4/4/448988/marco_simoncelli_vector_portrait_thumb.gif" value="Marco Simoncelli" />
        </List>
        List Dividers and inset
        <List>
            <ListItem value="Item 1 - Division 1" />
            <ListItem value="Item 2 - Division 1" />
            <ListItemDivider />
            <ListItem value="Item 1 - Division 2" />
            <ListItem value="Item 2 - Division 2" />
            <ListItemDivider inset />
            <ListItem value="Item after inset - Division 3" />
            <ListItem value="Item 2 - Division 3" />
        </List>
    </div>;
export default ListExamples;
