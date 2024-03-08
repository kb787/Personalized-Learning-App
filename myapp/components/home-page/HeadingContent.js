import { Text, View, StyleSheet,Image } from 'react-native';

const HeadingContent = () => {
    return (
        <View>
            <Text style={styles.headingStyling}>
                Empower Your Potential: Uncover Optimal Skills Recommendations Tailored to Your Expertise and Learning Speed!
            </Text>
            <Image source={require('../../images/homepageImage.png')} style={styles.homepageImageStyling} />
        </View>
    )
}

export default HeadingContent;

const styles = StyleSheet.create(
  {    
    headingStyling: {
        fontSize: 20,
        paddingTop: '5%',
        textAlign: 'center'
    },
    homepageImageStyling: {
        width: '85%',
        height: '40%',
        marginTop: '9%',
        marginLeft: '5%',
        marginRight: '3%',
        borderRadius: 7,
        // paddingTop: '6%',
    }
  }   
)

