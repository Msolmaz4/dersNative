import { Text, View } from "react-native"
import { Style } from "./Styles"




export const Foo = ()=>{
    return(
        <View style={Style.box}>
            <Text style={Style.text}>
                fooooo
            </Text>
        </View>
    )
}