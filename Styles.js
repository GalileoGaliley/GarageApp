import {Dimensions, StyleSheet} from "react-native";
import * as Font from "expo-font";




async function loadApplication() {
    await Font.loadAsync({
        'FuturaPT-Book': require('./fonts/FuturaPT-Book.ttf'),
    });
}
export const stylesValue = {
    cartContainer:{
        flex: 1,
        backgroundColor: '#fff',

        width:Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    profileContainer:{
        flex: 1,
        backgroundColor: '#006fff',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width:Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    authRegContainer:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent:'flex-start',
        width:Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width:Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    text:{
        color:'#fff',
        fontSize:26,
    },
    input:{
      backgroundColor:'#fff',
      borderBottomColor: '#444',
      borderBottomWidth: 0.5,
      width: '80%',
      height:40,
      marginTop: 20,
      paddingLeft: 10
    },

    wareList:{
        flex:1,
        flexWrap:'wrap',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#fff',
        paddingBottom: 10,
        bottom: 0

    },
    navBar:{
        backgroundColor:'#00f0f0',
        flex:1,
        flexDirection:'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    button:{
        backgroundColor:'#0f0',
        height:'100%',
    },

    closeMenu:{
        height:'100%',
        width: '400%',
        backgroundColor:'#000',
        position: 'absolute',
        opacity:0.4,
        right:0,
    },
    pAbsolute:{
        position:'absolute'
    },
    pRelative:{
        position:'relative'
    },
    w100:{
        width:'100%'
    },
    h100:{
        height:'100%'
    },
    mAuto:{
        margin:'auto'
    },
    textLogoMenu:{
        fontSize: 50,
        fontWeight:'bold',
        width:'70%',
        color:'#fff',

    },
    borderView:{
        borderColor:'#fff',
        borderWidth:2,
        width:'95%',
        height:'95%',
    },
    imagesInMenu:{
        width:'100%',
        height:'100%',
    },
    selectMenu:{
        height:50,
        width: Dimensions.get('window').width,
        backgroundColor:'#eeeeee',
        borderTopColor:'#a9a9a9',
        borderTopWidth:1,

    },
    selectItem:{
        width:'30%',
        height:'100%',
        alignItems:'center',
        justifyContent:'center',
    },
    textSelectItem:{
        color:'#727272',
        fontSize:16,
        fontWeight: 'bold'
    },
    contentSelctMenu:{
        width:'100%',
        height:'100%',
        flex:1,
        flexDirection:'row',
        justifyContent:'space-evenly'
    },
    sideMenu:{
        height: Dimensions.get('window').height,
        position:'absolute',
        width:'100%',
        zIndex:9999,
    },
    menu:{
        width:'100%',
        height:'100%',
    },
    headMenu:{
        width: Dimensions.get('window').width / 100 * 80,
        height:'25%',
        backgroundColor:'#ffffff',

    },
    bodyMenu:{
        width: Dimensions.get('window').width / 100 * 80,
        height:'75%',
        backgroundColor:'#eee',
        bottom:0,
        paddingTop:5
    },
    menuItem:{
        width:'100%',
        height:50,
        display:'flex',
        flexDirection: 'row',
        justifyContent:'flex-start',
        backgroundColor:'#fff',
        paddingBottom:5,
    },
    menuItemText:{
        lineHeight:60,
        alignItems:'flex-start',
        justifyContent:'center',
        width:'60%',
        height:'100%',
        borderBottomColor:'#696969',
        borderBottomWidth:1,
    },
    menuItemIcon:{
        width:'30%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
    },
    menuText:{
        color:'#484848'
    }
};


export const styles = StyleSheet.create(stylesValue);