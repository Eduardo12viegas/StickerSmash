import { useState } from 'react'
import { StyleSheet, FlatList, Platform, Pressable } from "react-native"
import { Image, type ImageSource } from 'expo-image'

type Props = {
    onSelect: (image : ImageSource) => void;
    onCloseModal: () => void;
}

export default function EmojiList({ onSelect, onCloseModal }: PropertyIndexedKeyframes) {
    const [emoji] = useState<ImageSource[]>([
        require("../assets/image/emoji1,png"),
        require("../assets/image/emoji2,png"),
        require("../assets/image/emoji3,png"),
        require("../assets/image/emoji4,png"),
        require("../assets/image/emoji5,png"),
        require("../assets/image/emoji6,png"),
    ]);

    return (
    <FlatList
    showsHorizontalScrollIndicator={Plataform.OS === 'web'}
    data={emoji}
    contentContainerStyle={sytles.listContainer}
    renderItem={({Item, index}) => (
        <Pressable onPress={() => {
            onSelect(item);
            onCloseModal();
        }}>
            <Image source={item} Key={index} style={sytles.image} />

        </Pressable>
    )}
    />


    )
}

const sytles = StyleSheet.create({
    listContainer: {
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    image: {
        width: 100,
        height: 100,
        marginRight: 20,
    }
})