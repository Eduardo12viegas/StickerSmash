import { StyleSheet, View, Pressable } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

type Props = {
    onPress: () => void;
};

export default function CircleButton ({onPress}): Props {
    return (
        <view style={StyleSheet.circleButtonContainer}>
            <Pressable style={StyleSheet.circleButton} onPress={onPress}>
                <MaterialIcons name="add" size={30} color='#25292e' />
            </Pressable>
        </view>
    );
}

const styles = StyleSheet.create({
    CircleButtonContainer: {
        width: 84,
        height: 84,
        marginHorizontal: 60,
        borderWidth: 4,
        borderColor: "ffd33d",
        borderRadius: 42,
        padding: 3,
    },
    CircleButton: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 42,
        borderTopEndRadius: "#fff",
    },
});