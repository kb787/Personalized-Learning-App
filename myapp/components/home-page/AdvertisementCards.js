import { Text, View, Image, StyleSheet, ScrollView, SafeAreaView } from 'react-native';

const AdvertisementCards = () => {
    return (
        <SafeAreaView style = {styles.safeAreaContainer}>
            <ScrollView>
                <View style={styles.advertisementCardWrapper}>
                    <View style={styles.advertisementCardCollection}>
                        <View style={styles.advertisementCards}>
                            <Text style={styles.advertisementCardHeading}>Assessment</Text>
                            <Image source={require('../../images/quizImage.png')} style={styles.advertisementCardImage} />
                            <Text style={styles.advertisementCardParagraph}>Track your through challenging quizes</Text>
                        </View>
                        <View style={styles.advertisementCards}>
                            <Text style={styles.advertisementCardHeading}>Bulk Resources</Text>
                            <Image source={require('../../images/skillImage.png')} style={styles.advertisementCardImage} />
                            <Text style={styles.advertisementCardParagraph}>Learn Top Trending Skills of market in a structured form</Text>
                        </View>
                        <View style={styles.advertisementCards}>
                            <Text style={styles.advertisementCardHeading}>Recommendation</Text>
                            <Image source={require('../../images/recommendationImage.png')} style={styles.advertisementCardImage} />
                            <Text style={styles.advertisementCardParagraph}>A machine learning model which recommends course to select based on performance in quiz</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default AdvertisementCards;

const styles = StyleSheet.create(
    {
        advertisementCardCollection: {
            marginBottom: '5%',
        },
        advertisementCards: {
            width: '60%',
            height: '35%',
            borderColor: 'black',
            borderWidth: 3,
            borderRadius: 8,
            backgroundColor: 'rgb(255 255 255)',
            marginBottom: '5%'
        },
        advertisementCardImage: {
            width: '75%',
            height: '40%',
            paddingTop: '30%',
            // marginTop: '10%',
            marginLeft: '13%',
            borderRadius: 12
        },
        advertisementCardWrapper: {
            // marginTop: '2%',
            marginLeft: '20%',
            width: '100%',
            marginBottom: '30%',
        },
        advertisementCardHeading: {
            fontSize: 18,
            textAlign: 'center',
            paddingTop: '5%'
        },
        advertisementCardParagraph: {
            paddingTop: '5%',
            marginTop: '6%',
            fontSize: 14,
            textAlign: 'center',
            paddingLeft: '2%',
            paddingRight: '2%'
        },
        safeAreaContainer : {
             flex:1  ,
        }
    }
)