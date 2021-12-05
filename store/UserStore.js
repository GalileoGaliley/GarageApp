import {makeAutoObservable} from "mobx";
import {Dimensions} from "react-native";

export default class UserStore{
    constructor() {
        this._isAuth = false;
        this._user = {};

        makeAutoObservable(this);
    };
    setIsAuth(bool){
        this._isAuth = bool;
    };
    setUser(user){
        this._user = user;
    };
    setVisible(visible){
        this._visible = visible;
    };
    get isAuth(){
        return this._isAuth
    };
    get user(){
        return this._user
    };
    get visible(){
        return this._visible
    }
}