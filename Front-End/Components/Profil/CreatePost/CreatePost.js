//Importer React
import React from "react";
//Importer les components nécéssaires
import { Text, TextInput, View, StyleSheet, Button, Pressable, ScrollView } from "react-native";
import RNDateTimePicker from '@react-native-community/datetimepicker'
import Checkbox from "expo-checkbox";
import { Picker } from "@react-native-picker/picker";
//Importer moment pour la mise en forme rapide de l'heure
import moment from "moment";
//Importer le document picker 
import { getDocumentAsync } from "expo-document-picker";
//Importer le component DocumentsList pour faire afficher les documents choisis
import DocumentsList from "./DocumentsList";

export default class CreatePost extends React.Component {

    constructor(props){
        super(props)
        this.title = '',
        this.overview = '',
        this.organizers = [],
        this.state = {
            backgroundImage:[],
            anciens:false,
            puntos:false,
            events:false,
            startingDate:new Date(Date.now()),
            endingDate:new Date(Date.now()),
            date:'start',
            mode:'date',
            show:false,
            documents:[],
            postImages:[],
            picker:undefined
        }
    }


    //Gérer le mode de fonctionnement du Date/Time Picker
    _showMode = (nextMode, type) => {
        //console.log('showMode')
        this.setState({show:true})
        this.setState({mode:nextMode})
        this.setState({date:type})
    }

    _showDateTimePicker = () => {
        if (this.state.events === true){
            return (
                <View>
                    <View style={styles.date_container} >
                        <Pressable onPress={()=>{this._showMode('date', 'start')}} >
                            <Text style={styles.date} >
                                Date de début {moment(this.state.startingDate).format('DD/MM/YYYY')}
                            </Text>
                            <Text style={styles.date} >
                                Heure de début {moment(this.state.startingDate).format('HH:mm')}
                            </Text>
                        </Pressable>
                        <Pressable onPress={()=>{this._showMode('date', 'end')}}>
                            <Text style={styles.date} >
                                Date de fin {moment(this.state.endingDate).format('DD/MM/YYYY')}
                            </Text>
                            <Text style={styles.date} >
                                Heure de fin {moment(this.state.endingDate).format('HH:mm')}
                            </Text>
                        </Pressable>
                    </View>
                    {this._showPicker()}
                </View>
            )
        }
    }

    //Gérer l'affichage du Date/Time Picker
    _showPicker = () => {
        if (this.state.show){
            if (this.state.date === 'start'){
                return (
                    <RNDateTimePicker
                        value={this.state.startingDate}
                        mode={this.state.mode}
                        is24Hour={true}
                        onChange={(date)=>{
                            console.log('OnChange')
                            console.log(date.nativeEvent.timestamp)
                            const currentDate = date.nativeEvent.timestamp || this.state.startingDate
                            const show1=!this.state.show
                            this.setState({show:show1})
                            this.setState({startingDate:currentDate})
                            if (this.state.mode === 'date'){
                                this._showMode('time', 'start')
                            }
                        }}
                    />
                )
            } else {
                return (
                    <RNDateTimePicker
                        value={this.state.endingDate}
                        mode={this.state.mode}
                        is24Hour={true}
                        onChange={(date)=>{
                            console.log('OnChange')
                            console.log(date.nativeEvent.timestamp)
                            const currentDate = date.nativeEvent.timestamp || this.state.endingDate
                            const show1=!this.state.show
                            this.setState({show:show1})
                            this.setState({endingDate:currentDate})
                            if (this.state.mode === 'date'){
                                this._showMode('time', 'end')
                            }
                        }}
                    />
                )
            }
        }
    }

    _showDocumentsSelector = (documentype) =>{
        switch(documentype) {
            //Image de fond
            case 'BackgroundImagePicker':
                return this.state.backgroundImage
            //Images
            case 'ImagePicker':
                return this.state.postImages
            //Organizateurs
            case 'OrganizersPicker':
                return this.organizers
            //Documents
            default :
                return this.state.documents
        }
    }

    //Méthode générale pour sélectionner un document
    _picDocuments = (documentype) => {
        return (
            <View>
                <Button title={documentype} onPress={() => this._documentsSelector(documentype)} />
                <DocumentsList
                    documentype={documentype}
                    items={this._showDocumentsSelector(documentype)}
                    removeFromList={this._removeFromList}
                />
            </View>
        )
    }

    //Méthode permettant de supprimer des documents du selecteur
    _removeFromList = (documentype, item) => {
        let id
        console.log('RemoveFromList')
        switch(documentype){
            case 'BackgroundImagePicker':
                console.log(this.state)
                console.log(item)
                id = this.state.backgroundImage.indexOf(item)
                console.log(id)
                if (id != -1) {
                    const backgroundImage = [...this.state.backgroundImage]
                    backgroundImage.splice(id, 1)
                    console.log(backgroundImage)
                    this.setState({backgroundImage:backgroundImage})
                }
            break
            case 'ImagePicker':
                console.log(this.state)
                console.log(item)
                id = this.state.postImages.indexOf(item)
                console.log(id)
                if (id != -1) {
                    const images = [...this.state.postImages]
                    images.splice(id, 1)
                    console.log(images)
                    this.setState({postImages:images})
                }
            break
            case 'OrganizersPicker':
                console.log(this.state)
                console.log(item)
                id = this.organizers.indexOf(item)
                console.log(id)
                if (id != -1) {
                    const organizers = [...this.organizers]
                    images.splice(id, 1)
                    console.log(organizers)
                    this.organizers=organizers
                }
            break
            default:
                console.log(this.state)
                console.log(item)
                id = this.state.documents.indexOf(item)
                console.log(id)
                if (id != -1) {
                    const documents = [...this.state.documents]
                    documents.splice(id, 1)
                    console.log(documents)
                    this.setState({documents:documents})
                }

        }
    }

    //Gérer la sélection pour le selecteur de documents
    _documentsSelector = (documentype) =>{
        switch(documentype) {
            //Image de fond
            case 'BackgroundImagePicker':
                getDocumentAsync().then((result) => {
                    if (!result.cancelled) {
                        this.setState({backgroundImage:[...this.state.backgroundImage,result]})
                    } else {
                        alert("Choix de l'image annulé")
                    }
                })
            break
            //Images
            case 'ImagePicker':
                getDocumentAsync().then((result) => {
                    if (!result.cancelled) {
                        this.setState({postImages:[...this.state.postImages,result]})
                    } else {
                        alert("Choix de l'image annulé")
                    }
                })
            break
            //Documents
            default :
                getDocumentAsync().then((result) => {
                    if (!result.cancelled) {
                        this.setState({documents:[...this.state.documents,result]})
                    } else {
                        alert('Choix du document annulé')
                    }
                })
        }
    }

    //Gérer le selecteur pour les organisateurs
    _handlePickerValueChange = (value) => {
        console.log(this.organizers)
        this.setState({picker:value})
        if (value != undefined && this.organizers.indexOf(value) === -1){
            this.organizers.push(value)
        }
    }

    //Créer les valeurs du selecteurs pour les organisateurs
    _organizersList(){
        let organizers
        for (const i of ["Comit'ss","Gasole"]){
            organizers = i
        }        
    } 

    //Gérer la validation des données
    _dataValidation(){
        if (this.state.endingDate <= this.state.startingDate){
            alert("La date de fin de l'évènement est avant sa date de début.")
            return false
        }
        if (this.title === ""){
            alert("Il n'y a pas de titre pour le post.")
            console.log(this.organizers[0])
            return false
        }
        if (this.overview === ""){
            alert("Il n'y a pas de description du post.")
            return false
        }
        if (this.organizers[0] === undefined) {
            alert("Il n'y a pas d'organisateurs pour la manip.")
        }
        if (this.state.anciens === false && this.state.puntos === false){
            alert("Pour qui le post est adressé ? Anciens ou Puntos")
        }
    }

    //Gérer l'envoi du post au serveur
    _showPostExample = () => {
        if (this._dataValidation()) {
            const post = {
                id:undefined,
                backgroundImage:this.state.backgroundImage[0],
                title:this.title,
                overview:this.overview,
                postImages:this.state.postImages,
                documents: this.state.documents,
                organizers:this.organizers,
                startingDate:moment(this.state.startingDate).format('DD/MM/YYYY'),
                endingDate:moment(this.state.endingDate).format('DD/MM/YYYY'),
                viewability:{
                    anciens:this.state.anciens,
                    puntos:this.state.puntos
                }
            }
            console.log(post)
            this.setState({
                anciens:false,
                puntos:false,
                startingDate:new Date(Date.now()),
                endingDate:new Date(Date.now()),
                date:'start',
                mode:'date',
                show:false,
                documents:[],
                postImages:[],
                backgroundImage:[]
            })
            this.props.navigation.navigate('PostDetails', {post:post, idDetails:'test'})
        }
    }

    render(){
        console.log('Render')
        console.log(this.organizers)
        return(
            <ScrollView style={styles.body_container}>
                <Text style={styles.title}>Création de post</Text>
                <View style={styles.picker_container}>
                    {this._picDocuments('BackgroundImage')}
                </View>
                <TextInput 
                    onChangeText={(text) => this.title=text}
                    placeholder='Titre du post'
                    style={styles.title_input}
                    require={true}
                />
                <View style={styles.checkbox_container} >
                    <View style={styles.switch_container}>
                        <Checkbox 
                            onValueChange={(value) => {this.setState({anciens:value})}}
                            value={this.state.anciens}
                            style={styles.switch}
                        />
                        <Text>Anciens</Text>
                    </View>
                    <View style={styles.switch_container}>
                        <Checkbox 
                            onValueChange={(value) => {this.setState({puntos:value})}}
                            value={this.state.puntos}
                            style={styles.switch}
                        />
                        <Text>Puntos</Text>
                    </View>
                </View>
                <View>
                    <View style={styles.switch_container}>
                        <View style={styles.switch_container}>
                                <Checkbox 
                                    onValueChange={(value) => {this.setState({events:value})}}
                                    value={this.state.events}
                                    style={styles.switch}
                                />
                                <Text>Créer un évenement sur le calendrier ?</Text>
                        </View>
                    </View>
                    {this._showDateTimePicker()}
                </View>
    
                <TextInput 
                    onChangeText={(text) => {
                        this.overview = text
                        this.setState({overview: text})
                    }}
                    placeholder='Description'
                    style={styles.description_input}
                    require={true}
                    multiline={true}
                    numberOfLines={100}
                />
                <View style={styles.picker_container}>
                    {this._picDocuments('DocumentPicker')}
                </View>
                <View style={styles.picker_container}>
                    {this._picDocuments('ImagePicker')}
                </View>
                <Text>Organisateurs:</Text>
                <Picker selectedValue={this.state.picker} onValueChange={(value) => this._handlePickerValueChange(value)}>
                    <Picker.Item value={undefined} />
                    {this._organizersList()}
                </Picker>
                <DocumentsList
                    documentype={"OrganizersPicker"}
                    items={this._showDocumentsSelector()}
                    removeFromList={this._removeFromList}
                />
                <View style={styles.button_container} >
                    <Button title='Aperçu du post' onPress={()=>this._showPostExample()} />
                </View>
            </ScrollView>
        )
    }
}

const styles=StyleSheet.create({
    body_container:{
        padding:5
    },
    title:{
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center',
        margin:3,
        paddingBottom:5
    },
    picker_container:{
        margin:5
    },
    title_input:{
        borderColor:'blue',
        borderWidth:1,
        marginBottom:3
    },
    description_input:{
        textAlignVertical:"top",
        height:165,
        borderWidth:1,
        borderColor:'blue'
    },
    switch_container:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        margin:5
    },
    switch:{
        marginRight:5
    },
    checkbox_container:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        paddingVertical:8
    },
    date_container:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        paddingBottom:5
    },
    date:{
        textAlign:'center'
    },
    button_container:{
        alignItems:'flex-end',
        marginTop:5
    }
})