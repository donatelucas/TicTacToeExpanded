/*
    I hate the lack of proper SOLID principle in this file.
    Hopefully my JS will improve enough during this project so it won't
    look like spaghetti code by the end. -Lucas
*/

import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { MaterialCommunityIcons as Icon } from 'react-native-vector-icons';

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            gamestate: [[]],
            currentPlayer: 1,
        }
    }

    // Called when game initializes
    componentDidMount() {
        this.initializeGame();
    }

    // Where X and O selections are made
    renderTile = (row, col) => {
        var value = this.state.gameState[row][col];

        switch(value)
        {
            case 1:
                return <Image
                    source = { require ("./assets/x.png") }
                    style  = {{ width: 100, height: 100 }}
                />
            case 2:
                return <Image
                    source = { require ("./assets/o.png") }
                    style  = {{ width: 100, height: 100 }}
                />
            default:
                return <View />;
        }
    }

    // Array that holds the values placed on the board
    initializeGame = () => {
        this.setState({ gamestate:
            [
                [0, 0, 0],
                [0, 0, 0],
                [0, 0, 0]
            ]
        });
    }

    render() {
        return (
            <View style = {styles.container}>

                <View style = {{ flexDirection: "row" }} >
                    <View style = { [styles.tile, { borderLeftWidth: 0, borderTopWidth: 0 }] } >

                        <Image
                            source = { require ("./assets/x.png") }
                            style  = {{ width: 75, height: 75 }}
                        />

                    </View>

                    <View style = { [styles.tile, { borderTopWidth: 0 } ]} >

                        <Image
                            source = { require ("./assets/o.png") }
                            style  = {{ width: 75, height: 75 }}
                        />

                    </View>
                    <View style = { [styles.tile, { borderTopWidth: 0, borderRightWidth: 0} ]} />
                </View>

                <View style = {{ flexDirection: "row" }} >
                    <View style = { [styles.tile, { borderLeftWidth: 0, } ]} />
                    <View style = { [styles.tile, { } ]} />
                    <View style = { [styles.tile, { borderRightWidth: 0, } ]} />
                </View>

                <View style = {{ flexDirection: "row" }} >
                    <View style = { [styles.tile, { borderBottomWidth: 0, borderLeftWidth: 0, } ]} />
                    <View style = { [styles.tile, { borderBottomWidth: 0, } ]} />
                    <View style = { [styles.tile, { borderBottomWidth: 0, borderRightWidth: 0, } ]} />
                </View>

        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    tile: {
        borderWidth: 10,
        width: 100,
        height: 100,
    },
});
