import { StyleSheet, Text, View } from "react-native";
import Category from "../../components/Category";
import Header from "../../components/Header";
import bovinaImg from "../../assets/images/bovina.png";
import frangoImg from "../../assets/images/aves.png";
import suinaImg from "../../assets/images/suina.png";
import React from "react";
import ItemsList from "../../components/ItemsList";
import ButtonAdd from "../../components/ButtonAdd";

const Meats = () => {
    const [geral, setGeral] = React.useState(styles.hide);

    //ICONES
    const [icones, setIcones] = React.useState(styles.view);

    // LISTAS
    const [bovina, setBovina] = React.useState(styles.hide);
    const [frango, setFrango] = React.useState(styles.hide);
    const [suina, setSuina] = React.useState(styles.hide);

    return (
        <>
            <Header />

            <View style={styles.containerMain}>
                <View style={styles.pageTop}>
                    <Text style={styles.pageName}>Carnes</Text>
                </View>

                <View style={[styles.icons, icones]}>
                    <Category text="Bovina" image={bovinaImg} textBelow={false} onClick={() => {
                        setGeral(styles.view);
                        setBovina(styles.view);
                        setIcones(styles.hide);
                    }
                    } />
                </View>

                <View style={[styles.icons, icones]}>
                    <Category text="Frango" image={frangoImg} textBelow={false} onClick={() => {
                        setGeral(styles.view);
                        setFrango(styles.view);
                        setIcones(styles.hide);
                    }
                    } />
                </View>

                <View style={[styles.icons, icones]}>
                    <Category text="Suína" image={suinaImg} textBelow={false} onClick={() => {
                        setGeral(styles.view);
                        setSuina(styles.view);
                        setIcones(styles.hide);
                    }
                    } />
                </View>

                <View style={[styles.content, geral]}>
                    <Text style={styles.title}>Selecione os itens</Text>

                    <View style={[styles.containerList, bovina]}>
                        <ItemsList item="Contra-filé" />
                        <ItemsList item="Picanha" />
                        <ItemsList item="File Mignon" />
                        <ItemsList item="Alcátra" />
                        <ItemsList item="Maminha" />
                    </View>

                    <View style={[styles.containerList, frango]}>
                        <ItemsList item="Coração" />
                        <ItemsList item="Asinha" />
                    </View>

                    <View style={[styles.containerList, suina]}>
                        <ItemsList item="Linguiça" />
                        <ItemsList item="Bistela" />
                        <ItemsList item="Costela" />
                        <ItemsList item="Panceta" />
                    </View>

                    <View style={[styles.containerButton, geral]}>
                        <ButtonAdd onClick={() => {
                            setGeral(styles.hide);
                            setBovina(styles.hide);
                            setFrango(styles.hide);
                            setSuina(styles.hide);
                            setIcones(styles.view);
                        }} />
                    </View>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    hide: {
        display: "none"
    },
    view: {
    },
    containerMain: {
        flex: 1,
        backgroundColor: "#E6E8E1",
        alignItems: "center",
    },
    pageTop: {
        height: 70,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    pageName: {
        fontSize: 17,
    },
    content: {
        width: "100%",
        alignItems: "center",
        justifyContent: "space-around",
    },
    title: {
        fontSize: 28,
        letterSpacing: 1,
        margin: 20,
    },
    containerList: {
        width: "80%",
        minHeight: 360,
        alignItems: "center",
    },
    containerButton: {
        margin: 20,
    },
    icons: {
        marginBottom: 10,
        marginTop: 60
    }
});

export default Meats;